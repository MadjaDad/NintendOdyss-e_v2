/* ===========================================================
   Données du site — Mon Périple Vidéoludique
   Un objet par console. "games" est trié par date de sortie.
   score / scoreType: scoreType "user" = note utilisateurs
   Metacritic (x10, ex. 8.9 -> 89) ; "critic" = Metascore critique
   utilisé quand la note utilisateurs n'est pas disponible ;
   null = aucune note Metacritic (ex. sortie Japon uniquement).
   =========================================================== */

window.LUDO_DATA = {
  consoles: {
    gba: {
      key: "gba",
      name: "Game Boy Advance",
      short: "GBA",
      color: "#8fae52",
      theme: "assets/theme-gba.css",
      page: "gba.html",
      ready: true,
      games: [
        {slug:"castlevania-circle-of-the-moon", title:"Castlevania: Circle of the Moon", date:"2001-06-11", score:84, scoreType:"critic", hltb:"8h", blurb:"Premier Castlevania \"Metroidvania\" portable, sombre et exigeant."},
        {slug:"super-mario-advance", title:"Super Mario Advance", date:"2001-06-11", score:79, scoreType:"critic", hltb:"3h", blurb:"Portage 16 bits de Super Mario Bros. 2, avec Mario Bros. en bonus."},
        {slug:"kuru-kuru-kururin", title:"Kuru Kuru Kururin", date:"2001-08-10", score:78, scoreType:"critic", hltb:"4h", blurb:"Puzzle-action minimaliste : guider une hélice tournante sans toucher les murs."},
        {slug:"mario-kart-super-circuit", title:"Mario Kart: Super Circuit", date:"2001-08-27", score:84, scoreType:"critic", hltb:"6h", blurb:"Premier Mario Kart portable, avec tous les circuits de la SNES en bonus."},
        {slug:"f-zero-maximum-velocity", title:"F-Zero: Maximum Velocity", date:"2001-08-10", score:78, scoreType:"critic", hltb:"5h", blurb:"Course futuriste ultra-rapide, exigeante et sans fioritures."},
        {slug:"advance-wars", title:"Advance Wars", date:"2001-09-09", score:86, scoreType:"user", hltb:"14h", blurb:"Stratégie tour par tour culte qui a lancé toute une série."},
        {slug:"klonoa-empire-of-dreams", title:"Klonoa: Empire of Dreams", date:"2001-11-14", score:79, scoreType:"critic", hltb:"5h", blurb:"Plateforme onirique signée Namco, charme et level design soignés."},
        {slug:"golden-sun", title:"Golden Sun", date:"2001-11-11", score:89, scoreType:"user", hltb:"19h", blurb:"RPG au tour par tour avec un système de Psynergie marquant."},
        {slug:"wario-land-4", title:"Wario Land 4", date:"2001-11-18", score:87, scoreType:"user", hltb:"6h", blurb:"Plateforme non-linéaire à la direction artistique et sonore culte."},
        {slug:"tactics-ogre-the-knight-of-lodis", title:"Tactics Ogre: The Knight of Lodis", date:"2001-11-21", score:82, scoreType:"critic", hltb:"35h", blurb:"Tactical-RPG exigeant, préquelle des épisodes SNES/N64."},
        {slug:"super-mario-world-super-mario-advance-2", title:"Super Mario World: Super Mario Advance 2", date:"2002-02-09", score:88, scoreType:"user", hltb:"8h", blurb:"Le classique SNES intégral, avec toutes les sorties secrètes."},
        {slug:"sonic-advance", title:"Sonic Advance", date:"2002-02-19", score:79, scoreType:"critic", hltb:"4h", blurb:"Le retour du hérisson en 2D par Dimps, vitesse et level design réussis."},
        {slug:"castlevania-harmony-of-dissonance", title:"Castlevania: Harmony of Dissonance", date:"2002-06-06", score:79, scoreType:"critic", hltb:"8h", blurb:"Deuxième Castlevania GBA, plus lumineux, avec Juste Belmont."},
        {slug:"yoshis-island-super-mario-advance-3", title:"Yoshi's Island: Super Mario Advance 3", date:"2002-09-24", score:89, scoreType:"user", hltb:"8h", blurb:"Le chef-d'oeuvre SNES intact, exploration et direction artistique pastel."},
        {slug:"metroid-fusion", title:"Metroid Fusion", date:"2002-11-17", score:88, scoreType:"user", hltb:"6h", blurb:"Suite directe de Super Metroid, tension et progression exemplaires."},
        {slug:"zelda-a-link-to-the-past-four-swords", title:"The Legend of Zelda: A Link to the Past & Four Swords", date:"2002-12-03", score:88, scoreType:"user", hltb:"10h", blurb:"Le classique SNES plus un mode multijoueur inédit, Four Swords."},
        {slug:"kirby-nightmare-in-dream-land", title:"Kirby: Nightmare in Dream Land", date:"2002-12-16", score:79, scoreType:"critic", hltb:"5h", blurb:"Remake du tout premier Kirby, doux et accessible."},
        {slug:"sonic-advance-2", title:"Sonic Advance 2", date:"2002-12-20", score:80, scoreType:"critic", hltb:"4h", blurb:"Suite plus rapide et plus exigeante, Tiny Chao Garden inclus."},
        {slug:"final-fantasy-tactics-advance", title:"Final Fantasy Tactics Advance", date:"2003-02-14", score:84, scoreType:"critic", hltb:"35h", blurb:"Tactical-RPG dans un monde imaginé par un enfant, riche et long."},
        {slug:"golden-sun-the-lost-age", title:"Golden Sun: The Lost Age", date:"2003-04-14", score:89, scoreType:"user", hltb:"24h", blurb:"Suite directe de Golden Sun, poursuite de l'aventure et des Psynergies."},
        {slug:"castlevania-aria-of-sorrow", title:"Castlevania: Aria of Sorrow", date:"2003-05-06", score:89, scoreType:"user", hltb:"8h", blurb:"Sommet de la trilogie GBA, système d'âmes profond, souvent cité comme le meilleur."},
        {slug:"warioware-inc-mega-microgames", title:"WarioWare, Inc.: Mega Microgame$!", date:"2003-05-26", score:85, scoreType:"user", hltb:"2h", blurb:"Plus de 200 micro-jeux frénétiques, format culte et addictif."},
        {slug:"donkey-kong-country", title:"Donkey Kong Country", date:"2003-06-09", score:87, scoreType:"user", hltb:"8h", blurb:"Portage du classique SNES, toujours aussi solide."},
        {slug:"dragon-ball-z-legacy-of-goku-2", title:"Dragon Ball Z: The Legacy of Goku II", date:"2003-06-17", score:88, scoreType:"user", hltb:"12h", blurb:"Action-RPG dans l'univers DBZ, de la saga Cell à Buu."},
        {slug:"mega-man-battle-network-3", title:"Mega Man Battle Network 3", date:"2003-06-18", score:83, scoreType:"critic", hltb:"18h", blurb:"RPG tactique en réseau, l'un des sommets de la série."},
        {slug:"advance-wars-2-black-hole-rising", title:"Advance Wars 2: Black Hole Rising", date:"2003-06-23", score:88, scoreType:"critic", hltb:"15h", blurb:"Suite plus équilibrée, avec une nouvelle campagne solo."},
        {slug:"boktai-the-sun-is-in-your-hand", title:"Boktai: The Sun Is in Your Hand", date:"2003-09-29", score:76, scoreType:"critic", hltb:"12h", blurb:"Chasseur de vampires avec un capteur solaire intégré à la cartouche."},
        {slug:"super-mario-advance-4-smb3", title:"Super Mario Advance 4: Super Mario Bros. 3", date:"2003-10-21", score:86, scoreType:"user", hltb:"6h", blurb:"Le classique NES avec une carte du monde inédite."},
        {slug:"fire-emblem", title:"Fire Emblem", date:"2003-11-03", score:89, scoreType:"user", hltb:"25h", blurb:"Premier épisode occidental de la saga, tactique et permadeath."},
        {slug:"sword-of-mana", title:"Sword of Mana", date:"2003-11-11", score:71, scoreType:"critic", hltb:"15h", blurb:"Remake de Seiken Densetsu, deux personnages jouables au choix."},
        {slug:"mario-and-luigi-superstar-saga", title:"Mario & Luigi: Superstar Saga", date:"2003-11-17", score:86, scoreType:"user", hltb:"15h", blurb:"RPG humoristique en duo, combos et timing à la clé."},
        {slug:"kingdom-hearts-chain-of-memories", title:"Kingdom Hearts: Chain of Memories", date:"2003-12-07", score:82, scoreType:"critic", hltb:"13h", blurb:"Spin-off à système de cartes, entre deux épisodes canoniques."},
        {slug:"metroid-zero-mission", title:"Metroid: Zero Mission", date:"2004-02-09", score:89, scoreType:"user", hltb:"6h", blurb:"Remake du Metroid original, avec une toute nouvelle fin."},
        {slug:"mega-man-zero-3", title:"Mega Man Zero 3", date:"2004-04-15", score:81, scoreType:"critic", hltb:"4h", blurb:"Troisième volet, affine la formule sans bouleverser l'équilibre."},
        {slug:"mario-vs-donkey-kong", title:"Mario vs. Donkey Kong", date:"2004-06-09", score:84, scoreType:"critic", hltb:"5h", blurb:"Casse-tête de plateforme qui lance la série du même nom."},
        {slug:"astro-boy-omega-factor", title:"Astro Boy: Omega Factor", date:"2004-08-17", score:85, scoreType:"critic", hltb:"4h", blurb:"Beat'em up signé Treasure, hommage complet à l'oeuvre de Tezuka."},
        {slug:"pokemon-firered-leafgreen", title:"Pokémon FireRed / LeafGreen", date:"2004-09-07", score:85, scoreType:"user", hltb:"24h", blurb:"Remake de la toute première génération Pokémon."},
        {slug:"dragon-ball-z-buus-fury", title:"Dragon Ball Z: Buu's Fury", date:"2004-09-14", score:86, scoreType:"user", hltb:"15h", blurb:"Suite directe de Legacy of Goku II, jusqu'à la saga Buu."},
        {slug:"kirby-and-the-amazing-mirror", title:"Kirby & the Amazing Mirror", date:"2004-10-18", score:85, scoreType:"user", hltb:"6h", blurb:"Exploration façon Metroidvania avec jusqu'à 4 Kirby en simultané."},
        {slug:"donkey-kong-country-2-diddys-kong-quest", title:"Donkey Kong Country 2: Diddy's Kong Quest", date:"2004-11-15", score:88, scoreType:"user", hltb:"9h", blurb:"Portage du meilleur épisode SNES de la trilogie DKC."},
        {slug:"zelda-the-minish-cap", title:"The Legend of Zelda: The Minish Cap", date:"2005-01-10", score:88, scoreType:"user", hltb:"11h", blurb:"Link rétrécit pour explorer un monde miniature, très bien noté."},
        {slug:"pokemon-emerald", title:"Pokémon Emerald", date:"2005-04-30", score:88, scoreType:"user", hltb:"24h", blurb:"Version augmentée de Ruby/Sapphire, contenu post-jeu étoffé."},
        {slug:"fire-emblem-the-sacred-stones", title:"Fire Emblem: The Sacred Stones", date:"2005-05-23", score:87, scoreType:"user", hltb:"20h", blurb:"Dernier Fire Emblem GBA, jumeaux royaux et monde ouvert."},
        {slug:"gunstar-super-heroes", title:"Gunstar Super Heroes", date:"2005-07-28", score:76, scoreType:"critic", hltb:"3h", blurb:"Run and gun nerveux signé Treasure, suite de Gunstar Heroes."},
        {slug:"drill-dozer", title:"Drill Dozer", date:"2005-09-15", score:76, scoreType:"critic", hltb:"5h", blurb:"Plateforme à la perceuse par Game Freak, hors Pokémon."},
        {slug:"pokemon-mystery-dungeon-red-rescue-team", title:"Pokémon Mystery Dungeon: Red Rescue Team", date:"2005-11-17", score:71, scoreType:"critic", hltb:"20h", blurb:"Donjons procéduraux : incarnez un Pokémon dans un monde de Pokémon."},
        {slug:"final-fantasy-4-advance", title:"Final Fantasy IV Advance", date:"2005-12-12", score:80, scoreType:"critic", hltb:"20h", blurb:"Portage enrichi du classique SNES, nouveaux donjons."},
        {slug:"mother-3", title:"Mother 3", date:"2006-04-20", score:null, scoreType:"none", hltb:"20h", blurb:"Suite culte d'Earthbound, jamais sortie officiellement hors Japon."},
        {slug:"dragon-ball-advanced-adventure", title:"Dragon Ball: Advanced Adventure", date:"2006-06-06", score:86, scoreType:"user", hltb:"6h", blurb:"Retour aux origines de Dragon Ball, l'enfance de Goku."},
        {slug:"final-fantasy-5-advance", title:"Final Fantasy V Advance", date:"2006-11-06", score:76, scoreType:"critic", hltb:"25h", blurb:"Portage du système de jobs, très apprécié des puristes."}
      ]
    },

    ds: {
      key: "ds",
      name: "Nintendo DS",
      short: "DS",
      color: "#3d6a91",
      theme: "assets/theme-ds.css",
      page: "ds.html",
      ready: false,
      games: []
    },

    n3ds: {
      key: "n3ds",
      name: "Nintendo 3DS",
      short: "3DS",
      color: "#ff2ea6",
      theme: "assets/theme-3ds.css",
      page: "3ds.html",
      ready: false,
      games: []
    },

    gamecube: {
      key: "gamecube",
      name: "GameCube",
      short: "GC",
      color: "#4b3f8f",
      theme: "assets/theme-gamecube.css",
      page: "gamecube.html",
      ready: false,
      games: []
    }
  }
};
