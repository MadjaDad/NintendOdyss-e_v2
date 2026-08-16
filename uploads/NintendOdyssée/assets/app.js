/* ===========================================================
   Logique partagée — Mon Périple Vidéoludique
   Stockage : localStorage (fonctionne une fois le site hébergé
   ou ouvert directement depuis un fichier, pas dans un aperçu
   sandboxé qui bloque l'accès au stockage du navigateur).
   =========================================================== */

const LUDO = (function(){
  const KEY_COMPLETED = "ludo:completed";   // { "gba:slug": true, ... }
  const KEY_PLAYING    = "ludo:playing";    // "gba:slug" ou null (un seul, toutes consoles confondues)

  function safeGet(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){
      return fallback;
    }
  }
  function safeSet(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }
    catch(e){ /* stockage indisponible (mode privé...) : on continue sans persister */ }
  }

  function gameKey(consoleKey, slug){ return consoleKey + ":" + slug; }

  function isCompleted(consoleKey, slug){
    const completed = safeGet(KEY_COMPLETED, {});
    return !!completed[gameKey(consoleKey, slug)];
  }
  function toggleCompleted(consoleKey, slug){
    const completed = safeGet(KEY_COMPLETED, {});
    const k = gameKey(consoleKey, slug);
    completed[k] = !completed[k];
    safeSet(KEY_COMPLETED, completed);
    return completed[k];
  }
  function countCompleted(consoleKey, games){
    const completed = safeGet(KEY_COMPLETED, {});
    return games.filter(g => completed[gameKey(consoleKey, g.slug)]).length;
  }

  function getPlaying(){ return safeGet(KEY_PLAYING, null); }
  function isPlaying(consoleKey, slug){ return getPlaying() === gameKey(consoleKey, slug); }
  function setPlaying(consoleKey, slug){
    const k = gameKey(consoleKey, slug);
    const current = getPlaying();
    const next = (current === k) ? null : k; // re-cliquer désactive
    safeSet(KEY_PLAYING, next);
    return next;
  }

  function findGameByKey(fullKey){
    if(!fullKey) return null;
    const [consoleKey, ...rest] = fullKey.split(":");
    const slug = rest.join(":");
    const consoleData = window.LUDO_DATA.consoles[consoleKey];
    if(!consoleData) return null;
    const game = consoleData.games.find(g => g.slug === slug);
    if(!game) return null;
    return { consoleKey, consoleData, game };
  }

  function coverPath(consoleKey, slug){
    return "images/" + consoleKey + "/" + slug + ".jpg";
  }

  function scoreClass(score){
    if(score === null || score === undefined) return "na";
    if(score >= 85) return "hi";
    if(score >= 70) return "mid";
    return "lo";
  }

  function scoreLabel(score, scoreType){
    if(score === null || score === undefined) return { text:"—", sup:"" };
    return { text: String(score), sup: scoreType === "user" ? "U" : "C" };
  }

  function fmtDate(iso){
    const [y,m,d] = iso.split("-");
    const mois = ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
    return `${parseInt(d,10)} ${mois[parseInt(m,10)-1]} ${y}`;
  }

  /* ---------- Rendu : carte de jeu (pages console) ---------- */

  function buildCoverEl(consoleKey, game){
    const cover = document.createElement("div");
    cover.className = "cover";
    const img = document.createElement("img");
    img.src = coverPath(consoleKey, game.slug);
    img.alt = "";
    img.loading = "lazy";
    img.onerror = function(){
      img.style.display = "none";
      fallback.style.display = "flex";
    };
    const fallback = document.createElement("div");
    fallback.className = "cover-fallback";
    fallback.innerHTML = "<span></span>";
    fallback.querySelector("span").textContent = game.title;
    cover.appendChild(img);
    cover.appendChild(fallback);
    return cover;
  }

  function buildGameCard(consoleKey, game, onChange){
    const done = isCompleted(consoleKey, game.slug);
    const playing = isPlaying(consoleKey, game.slug);

    const card = document.createElement("div");
    card.className = "game-card" + (done ? " done" : "") + (playing ? " playing" : "");

    const btn = document.createElement("button");
    btn.className = "check-btn" + (done ? " checked" : "");
    btn.setAttribute("aria-label", "Marquer comme terminé : " + game.title);
    btn.onclick = () => {
      const nowDone = toggleCompleted(consoleKey, game.slug);
      card.classList.toggle("done", nowDone);
      btn.classList.toggle("checked", nowDone);
      if(onChange) onChange();
    };

    const body = document.createElement("div");
    body.className = "game-card-body";

    const title = document.createElement("div");
    title.className = "game-title";
    title.textContent = game.title;

    const row = document.createElement("div");
    row.className = "meta-row";

    const datePill = document.createElement("span");
    datePill.className = "pill date";
    datePill.textContent = fmtDate(game.date);

    const sc = scoreLabel(game.score, game.scoreType);
    const scorePill = document.createElement("span");
    scorePill.className = "pill score " + scoreClass(game.score);
    scorePill.innerHTML = sc.text + (sc.sup ? `<sup>${sc.sup}</sup>` : "");
    scorePill.title = game.scoreType === "user" ? "Note utilisateurs Metacritic (/100)" :
                       game.scoreType === "critic" ? "Metascore critique Metacritic (note utilisateurs indisponible)" :
                       "Pas de note Metacritic disponible";

    const hltbPill = document.createElement("span");
    hltbPill.className = "pill hltb";
    hltbPill.textContent = "⏱ " + game.hltb;

    row.appendChild(datePill);
    row.appendChild(scorePill);
    row.appendChild(hltbPill);

    const playBtn = document.createElement("button");
    playBtn.className = "playing-btn" + (playing ? " active" : "");
    playBtn.textContent = playing ? "▶ En cours" : "Marquer \"en cours\"";
    playBtn.onclick = () => {
      setPlaying(consoleKey, game.slug);
      if(onChange) onChange();
      // Re-rendu léger : on retire "playing" de toutes les cartes puis on le remet sur la bonne
      document.querySelectorAll(".game-card.playing").forEach(el => el.classList.remove("playing"));
      document.querySelectorAll(".playing-btn.active").forEach(el => { el.classList.remove("active"); el.textContent = "Marquer \"en cours\""; });
      if(isPlaying(consoleKey, game.slug)){
        card.classList.add("playing");
        playBtn.classList.add("active");
        playBtn.textContent = "▶ En cours";
      }
    };

    body.appendChild(title);
    body.appendChild(row);
    body.appendChild(playBtn);

    card.appendChild(btn);
    card.appendChild(body);
    return card;
  }

  function renderConsoleList(consoleKey, containerEl, progressFillEl, progressTextEl, progressPctEl){
    const consoleData = window.LUDO_DATA.consoles[consoleKey];
    if(!consoleData) return;
    const games = consoleData.games;

    function updateProgress(){
      const done = countCompleted(consoleKey, games);
      const total = games.length;
      if(progressTextEl) progressTextEl.textContent = `${done} / ${total} terminés`;
      if(progressPctEl) progressPctEl.textContent = total ? Math.round(done/total*100) + "%" : "0%";
      if(progressFillEl) progressFillEl.style.width = (total ? Math.round(done/total*100) : 0) + "%";
    }

    containerEl.innerHTML = "";
    let lastYear = null;
    games.forEach(game => {
      const year = game.date.slice(0,4);
      if(year !== lastYear){
        const div = document.createElement("div");
        div.className = "year-divider";
        div.textContent = year;
        containerEl.appendChild(div);
        lastYear = year;
      }
      const card = buildGameCard(consoleKey, game, updateProgress);
      containerEl.appendChild(card);
    });

    updateProgress();
  }

  /* ---------- Rendu : Home ---------- */

  function renderHomeHero(containerEl){
    const playingKey = getPlaying();
    const found = findGameByKey(playingKey);

    containerEl.innerHTML = "";

    if(!found){
      const empty = document.createElement("div");
      empty.className = "hero-empty";
      empty.textContent = "Aucun jeu marqué \"en cours\" pour l'instant. Va sur une liste et clique sur \"Marquer en cours\" sur le jeu auquel tu joues.";
      containerEl.appendChild(empty);
      return;
    }

    const { consoleKey, consoleData, game } = found;

    const card = document.createElement("div");
    card.className = "hero-card";

    const coverWrap = document.createElement("div");
    coverWrap.className = "hero-cover";
    coverWrap.appendChild(buildCoverEl(consoleKey, game));

    const body = document.createElement("div");
    body.className = "hero-body";

    const eyebrow = document.createElement("div");
    eyebrow.className = "hero-eyebrow";
    eyebrow.textContent = "En ce moment";

    const title = document.createElement("div");
    title.className = "hero-title";
    title.textContent = game.title;

    const consoleLine = document.createElement("div");
    consoleLine.className = "hero-console";
    consoleLine.textContent = consoleData.name + " · " + fmtDate(game.date);

    const blurb = document.createElement("div");
    blurb.className = "hero-blurb";
    blurb.textContent = game.blurb;

    const row = document.createElement("div");
    row.className = "meta-row";
    const sc = scoreLabel(game.score, game.scoreType);
    const scorePill = document.createElement("span");
    scorePill.className = "pill score " + scoreClass(game.score);
    scorePill.innerHTML = sc.text + (sc.sup ? `<sup>${sc.sup}</sup>` : "");
    const hltbPill = document.createElement("span");
    hltbPill.className = "pill hltb";
    hltbPill.textContent = "⏱ " + game.hltb;
    row.appendChild(scorePill);
    row.appendChild(hltbPill);

    body.appendChild(eyebrow);
    body.appendChild(title);
    body.appendChild(consoleLine);
    body.appendChild(blurb);
    body.appendChild(row);

    card.appendChild(coverWrap);
    card.appendChild(body);
    containerEl.appendChild(card);
  }

  function renderHomeConsoleGrid(containerEl){
    containerEl.innerHTML = "";
    Object.values(window.LUDO_DATA.consoles).forEach(consoleData => {
      const card = document.createElement("a");
      card.className = "console-card" + (consoleData.ready ? "" : " disabled");
      card.style.background = `linear-gradient(160deg, ${consoleData.color}33, transparent)`;
      card.style.borderColor = consoleData.color + "55";
      if(consoleData.ready) card.href = consoleData.page;
      else card.removeAttribute("href");

      const name = document.createElement("div");
      name.className = "console-card-name";
      name.textContent = consoleData.name;
      card.appendChild(name);

      if(consoleData.ready){
        const done = countCompleted(consoleData.key, consoleData.games);
        const total = consoleData.games.length;
        const prog = document.createElement("div");
        prog.className = "console-card-progress";
        prog.textContent = `${done} / ${total} terminés`;
        card.appendChild(prog);
      } else {
        const soon = document.createElement("div");
        soon.className = "console-card-soon";
        soon.textContent = "Bientôt disponible";
        card.appendChild(soon);
      }

      containerEl.appendChild(card);
    });
  }

  return {
    isCompleted, toggleCompleted, countCompleted,
    getPlaying, isPlaying, setPlaying,
    coverPath, buildCoverEl, buildGameCard,
    renderConsoleList, renderHomeHero, renderHomeConsoleGrid,
    fmtDate, scoreClass, scoreLabel
  };
})();
