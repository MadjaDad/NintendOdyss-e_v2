/* ===========================================================
   Données du site — Mon Périple Vidéoludique
   Un objet par console. "games" est trié par date de sortie.
   score / scoreType: scoreType "user" = note utilisateurs
   Metacritic (x10, ex. 8.9 -> 89) ; "critic" = Metascore critique
   utilisé quand la note utilisateurs n'est pas disponible ;
   null = aucune note Metacritic (ex. sortie Japon uniquement).
   =========================================================== */

const DATA = {
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
        {slug:"advance-wars", title:"Advance Wars", date:"2001-09-09", score:86, scoreType:"user", hltb:"14h", blurb:"Stratégie tour par tour culte qui a lancé toute une série."},
        {slug:"gradius-galaxies", title:"Gradius Galaxies", date:"2001-11-06", score:76, scoreType:"critic", hltb:"5h", blurb:"Le shoot horizontal de Konami en poche, options et power-ups au complet."},
        {slug:"golden-sun", title:"Golden Sun", date:"2001-11-11", score:89, scoreType:"user", hltb:"19h", blurb:"RPG au tour par tour avec un système de Psynergie marquant."},
        {slug:"klonoa-empire-of-dreams", title:"Klonoa: Empire of Dreams", date:"2001-11-14", score:79, scoreType:"critic", hltb:"5h", blurb:"Plateforme onirique signée Namco, charme et level design soignés."},
        {slug:"wario-land-4", title:"Wario Land 4", date:"2001-11-18", score:87, scoreType:"user", hltb:"6h", blurb:"Plateforme non-linéaire à la direction artistique et sonore culte."},
        {slug:"tactics-ogre-the-knight-of-lodis", title:"Tactics Ogre: The Knight of Lodis", date:"2001-11-21", score:82, scoreType:"critic", hltb:"35h", blurb:"Tactical-RPG exigeant, préquelle des épisodes SNES/N64."},
        {slug:"crash-bandicoot-the-huge-adventure", title:"Crash Bandicoot: The Huge Adventure", date:"2002-01-16", score:78, scoreType:"critic", hltb:"5h", blurb:"Crash en 2.5D sur portable, plateforme rapide et étonnamment fidèle."},
        {slug:"sonic-advance", title:"Sonic Advance", date:"2002-02-19", score:79, scoreType:"critic", hltb:"4h", blurb:"Le retour du hérisson en 2D par Dimps, vitesse et level design réussis."},
        {slug:"broken-sword-shadow-of-the-templars", title:"Broken Sword: The Shadow of the Templars", date:"2002-03-22", score:76, scoreType:"critic", hltb:"10h", blurb:"Enquête templière de Paris à Syrie, le point'n click culte en poche."},
        {slug:"fire-emblem-the-binding-blade", title:"Fire Emblem: The Binding Blade", date:"2002-03-29", score:null, scoreType:"none", hltb:"22h", blurb:"L'épisode de Roy, resté au Japon, préquelle directe de notre premier Fire Emblem."},
        {slug:"mega-man-zero", title:"Mega Man Zero", date:"2002-09-09", score:78, scoreType:"critic", hltb:"5h", blurb:"Zero reprend le flambeau dans une série d'action stylée et exigeante."},
        {slug:"medal-of-honor-underground-gba", title:"Medal of Honor: Underground", date:"2002-11-05", score:79, scoreType:"critic", hltb:"6h", blurb:"Résistance française vue du dessus, prouesse technique sur la portable."},
        {slug:"zelda-a-link-to-the-past-four-swords", title:"The Legend of Zelda: A Link to the Past & Four Swords", date:"2002-12-03", score:88, scoreType:"user", hltb:"10h", blurb:"Le classique SNES plus un mode multijoueur inédit, Four Swords."},
        {slug:"kirby-nightmare-in-dream-land", title:"Kirby: Nightmare in Dream Land", date:"2002-12-16", score:79, scoreType:"critic", hltb:"5h", blurb:"Remake du tout premier Kirby, doux et accessible."},
        {slug:"sonic-advance-2", title:"Sonic Advance 2", date:"2002-12-20", score:80, scoreType:"critic", hltb:"4h", blurb:"Suite plus rapide et plus exigeante, Tiny Chao Garden inclus."},
        {slug:"crash-bandicoot-2-n-tranced", title:"Crash Bandicoot 2: N-Tranced", date:"2003-01-13", score:76, scoreType:"critic", hltb:"5h", blurb:"Suite portable plus inventive, hypnose et niveaux à gimmicks."},
        {slug:"rayman-3-gba", title:"Rayman 3", date:"2003-03-17", score:79, scoreType:"critic", hltb:"8h", blurb:"Rayman revient à la 2D pour un épisode portable très réussi."},
        {slug:"golden-sun-the-lost-age", title:"Golden Sun: The Lost Age", date:"2003-04-14", score:89, scoreType:"user", hltb:"24h", blurb:"Suite directe de Golden Sun, poursuite de l'aventure et des Psynergies."},
        {slug:"ninja-five-o", title:"Ninja Five-O", date:"2003-04-22", score:82, scoreType:"critic", hltb:"4h", blurb:"Ninja, grappin et otages : pépite d'action devenue pièce de collection."},
        {slug:"donkey-kong-country", title:"Donkey Kong Country", date:"2003-06-09", score:87, scoreType:"user", hltb:"8h", blurb:"Portage du classique SNES, toujours aussi solide."},
        {slug:"dragon-ball-z-legacy-of-goku-2", title:"Dragon Ball Z: The Legacy of Goku II", date:"2003-06-17", score:88, scoreType:"user", hltb:"12h", blurb:"Action-RPG dans l'univers DBZ, de la saga Cell à Buu."},
        {slug:"mega-man-battle-network-3", title:"Mega Man Battle Network 3", date:"2003-06-18", score:83, scoreType:"critic", hltb:"18h", blurb:"RPG tactique en réseau, l'un des sommets de la série."},
        {slug:"advance-wars-2-black-hole-rising", title:"Advance Wars 2: Black Hole Rising", date:"2003-06-23", score:88, scoreType:"critic", hltb:"15h", blurb:"Suite plus équilibrée, avec une nouvelle campagne solo."},
        {slug:"boktai-the-sun-is-in-your-hand", title:"Boktai: The Sun Is in Your Hand", date:"2003-09-29", score:76, scoreType:"critic", hltb:"12h", blurb:"Chasseur de vampires avec un capteur solaire intégré à la cartouche."},
        {slug:"mega-man-zero-2", title:"Mega Man Zero 2", date:"2003-10-28", score:80, scoreType:"critic", hltb:"5h", blurb:"Zero traqué par la Néo-Arcadie, action affûtée et formes élémentaires."},
        {slug:"fire-emblem", title:"Fire Emblem", date:"2003-11-03", score:89, scoreType:"user", hltb:"25h", blurb:"Premier épisode occidental de la saga, tactique et permadeath."},
        {slug:"mario-and-luigi-superstar-saga", title:"Mario & Luigi: Superstar Saga", date:"2003-11-17", score:86, scoreType:"user", hltb:"15h", blurb:"RPG humoristique en duo, combos et timing à la clé."},
        {slug:"kingdom-hearts-chain-of-memories", title:"Kingdom Hearts: Chain of Memories", date:"2003-12-07", score:82, scoreType:"critic", hltb:"13h", blurb:"Spin-off à système de cartes, entre deux épisodes canoniques."},
        {slug:"mega-man-zero-3", title:"Mega Man Zero 3", date:"2004-04-15", score:81, scoreType:"critic", hltb:"4h", blurb:"Troisième volet, affine la formule sans bouleverser l'équilibre."},
        {slug:"river-city-ransom-ex", title:"River City Ransom EX", date:"2004-05-25", score:80, scoreType:"critic", hltb:"6h", blurb:"Baston, RPG et sushis dans les rues de River City, culte NES modernisé."},
        {slug:"sonic-advance-3", title:"Sonic Advance 3", date:"2004-06-07", score:79, scoreType:"critic", hltb:"5h", blurb:"Duos de personnages aux capacités combinées, le plus riche des Sonic GBA."},
        {slug:"shining-force-resurrection-of-the-dark-dragon", title:"Shining Force: Resurrection of the Dark Dragon", date:"2004-06-08", score:78, scoreType:"critic", hltb:"20h", blurb:"Remake soigné du tactical fondateur de Sega."},
        {slug:"sabre-wulf", title:"Sabre Wulf", date:"2004-06-22", score:76, scoreType:"critic", hltb:"10h", blurb:"Aventure-exploration signée Rare, jungle et créatures à apprivoiser."},
        {slug:"astro-boy-omega-factor", title:"Astro Boy: Omega Factor", date:"2004-08-17", score:85, scoreType:"critic", hltb:"4h", blurb:"Beat'em up signé Treasure, hommage complet à l'oeuvre de Tezuka."},
        {slug:"pokemon-firered-leafgreen", title:"Pokémon FireRed / LeafGreen", date:"2004-09-07", score:85, scoreType:"user", hltb:"24h", blurb:"Remake de la toute première génération Pokémon."},
        {slug:"dragon-ball-z-buus-fury", title:"Dragon Ball Z: Buu's Fury", date:"2004-09-14", score:86, scoreType:"user", hltb:"15h", blurb:"Suite directe de Legacy of Goku II, jusqu'à la saga Buu."},
        {slug:"boktai-2-solar-boy-django", title:"Boktai 2: Solar Boy Django", date:"2004-09-28", score:77, scoreType:"critic", hltb:"12h", blurb:"Suite du chasseur de vampires au capteur solaire, imaginée par Kojima."},
        {slug:"donkey-kong-country-2-diddys-kong-quest", title:"Donkey Kong Country 2: Diddy's Kong Quest", date:"2004-11-15", score:88, scoreType:"user", hltb:"9h", blurb:"Portage du meilleur épisode SNES de la trilogie DKC."},
        {slug:"zelda-the-minish-cap", title:"The Legend of Zelda: The Minish Cap", date:"2005-01-10", score:88, scoreType:"user", hltb:"11h", blurb:"Link rétrécit pour explorer un monde miniature, très bien noté."},
        {slug:"pokemon-emerald", title:"Pokémon Emerald", date:"2005-04-30", score:88, scoreType:"user", hltb:"24h", blurb:"Version augmentée de Ruby/Sapphire, contenu post-jeu étoffé."},
        {slug:"fire-emblem-the-sacred-stones", title:"Fire Emblem: The Sacred Stones", date:"2005-05-23", score:87, scoreType:"user", hltb:"20h", blurb:"Dernier Fire Emblem GBA, jumeaux royaux et monde ouvert."},
        {slug:"boktai-3-sabatas-counterattack", title:"Boktai 3: Sabata's Counterattack", date:"2005-06-23", score:null, scoreType:"none", hltb:"12h", blurb:"Conclusion de la trilogie solaire de Kojima, restée au Japon."},
        {slug:"riviera-the-promised-land", title:"Riviera: The Promised Land", date:"2005-06-28", score:76, scoreType:"critic", hltb:"20h", blurb:"RPG atypique de Sting, exploration condensée et quatre héroïnes à lier."},
        {slug:"rebelstar-tactical-command", title:"Rebelstar: Tactical Command", date:"2005-09-06", score:77, scoreType:"critic", hltb:"15h", blurb:"Tactique par les créateurs de X-COM, taillée pour la portable."},
        {slug:"mega-man-zero-4", title:"Mega Man Zero 4", date:"2005-09-27", score:75, scoreType:"critic", hltb:"5h", blurb:"Conclusion de la saga Zero, entre résistance humaine et cyber-elfes."},
        {slug:"mega-man-battle-network-6", title:"Mega Man Battle Network 6", date:"2005-11-14", score:76, scoreType:"critic", hltb:"20h", blurb:"Ultime épisode de la saga réseau, la formule à son apogée."},
        {slug:"mother-3", title:"Mother 3", date:"2006-04-20", score:null, scoreType:"none", hltb:"20h", blurb:"Suite culte d'Earthbound, jamais sortie officiellement hors Japon."},
        {slug:"dragon-ball-advanced-adventure", title:"Dragon Ball: Advanced Adventure", date:"2006-06-06", score:86, scoreType:"user", hltb:"6h", blurb:"Retour aux origines de Dragon Ball, l'enfance de Goku."},
        {slug:"summon-night-swordcraft-story-2", title:"Summon Night: Swordcraft Story 2", date:"2006-11-14", score:75, scoreType:"critic", hltb:"20h", blurb:"Suite plus généreuse, forge et duels affinés."},
        {slug:"yggdra-union", title:"Yggdra Union", date:"2006-11-21", score:77, scoreType:"critic", hltb:"30h", blurb:"Tactical-RPG à cartes de Sting, exigeant et singulier."}
      ]
    },

    ds: {
      key: "ds",
      name: "Nintendo DS",
      short: "DS",
      color: "#3d6a91",
      theme: "assets/theme-ds.css",
      page: "ds.html",
      ready: true,
      games: [
        {slug:"advance-wars-dual-strike", title:"Advance Wars: Dual Strike", date:"2005-08-22", score:88, scoreType:"user", hltb:"25h", blurb:"La stratégie culte passe sur deux écrans avec les duos de généraux."},
        {slug:"trauma-center-under-the-knife", title:"Trauma Center: Under the Knife", date:"2005-10-04", score:77, scoreType:"critic", hltb:"8h", blurb:"Chirurgie au stylet sous tension, opérations impossibles et virus mystérieux."},
        {slug:"sonic-rush", title:"Sonic Rush", date:"2005-11-15", score:82, scoreType:"critic", hltb:"4h", blurb:"Sonic à toute vitesse sur deux écrans, avec Blaze et la jauge de boost."},
        {slug:"mario-and-luigi-partners-in-time", title:"Mario & Luigi: Partners in Time", date:"2005-11-28", score:85, scoreType:"user", hltb:"17h", blurb:"Les frères voyagent dans le temps aux côtés de leurs versions bébés."},
        {slug:"hotel-dusk-room-215", title:"Hotel Dusk: Room 215", date:"2007-01-22", score:78, scoreType:"critic", hltb:"15h", blurb:"Polar interactif au crayonné unique, console tenue comme un livre."},
        {slug:"puzzle-quest-challenge-of-the-warlords", title:"Puzzle Quest: Challenge of the Warlords", date:"2007-03-20", score:80, scoreType:"critic", hltb:"30h", blurb:"Alignements de gemmes et campagne de RPG, mélange redoutablement addictif."},
        {slug:"sonic-rush-adventure", title:"Sonic Rush Adventure", date:"2007-09-18", score:78, scoreType:"critic", hltb:"8h", blurb:"Suite maritime de Sonic Rush, îles à explorer entre deux courses effrénées."},
        {slug:"zelda-phantom-hourglass", title:"The Legend of Zelda: Phantom Hourglass", date:"2007-10-01", score:90, scoreType:"critic", hltb:"15h", blurb:"Suite directe de Wind Waker, entièrement jouée au stylet."},
        {slug:"advance-wars-days-of-ruin", title:"Advance Wars: Days of Ruin", date:"2008-01-21", score:86, scoreType:"critic", hltb:"25h", blurb:"Advance Wars post-apocalyptique, plus sombre et rééquilibré."},
        {slug:"shiren-the-wanderer", title:"Mystery Dungeon: Shiren the Wanderer", date:"2008-02-05", score:78, scoreType:"critic", hltb:"40h", blurb:"Roguelike japonais exigeant, chaque mort renvoie au premier étage."},
        {slug:"professor-layton-curious-village", title:"Professeur Layton et l'Étrange Village", date:"2008-02-10", score:88, scoreType:"user", hltb:"12h", blurb:"Énigmes élégantes et village mystérieux, naissance d'une série culte."},
        {slug:"soma-bringer", title:"Soma Bringer", date:"2008-02-28", score:null, scoreType:"none", hltb:"25h", blurb:"L'action-RPG de Monolith Soft resté au Japon, pensé pour le jeu à trois."},
        {slug:"ninja-gaiden-dragon-sword", title:"Ninja Gaiden: Dragon Sword", date:"2008-03-25", score:80, scoreType:"critic", hltb:"8h", blurb:"Ryu Hayabusa au stylet, action nerveuse et lisible malgré le format."},
        {slug:"the-world-ends-with-you", title:"The World Ends with You", date:"2008-04-22", score:90, scoreType:"user", hltb:"20h", blurb:"RPG d'action ultra-stylé dans Shibuya, combats sur les deux écrans."},
        {slug:"locks-quest", title:"Lock's Quest", date:"2008-09-08", score:78, scoreType:"critic", hltb:"20h", blurb:"Construire ses défenses le jour, repousser les automates la nuit."},
        {slug:"kirby-super-star-ultra", title:"Kirby Super Star Ultra", date:"2008-09-22", score:89, scoreType:"user", hltb:"8h", blurb:"Remake de Super Star et ses nombreux modes, l'un des meilleurs Kirby."},
        {slug:"rune-factory-2", title:"Rune Factory 2", date:"2008-11-18", score:76, scoreType:"critic", hltb:"40h", blurb:"Ferme et donjons sur deux générations, le fils reprend le flambeau."},
        {slug:"chrono-trigger", title:"Chrono Trigger", date:"2008-11-25", score:91, scoreType:"user", hltb:"23h", blurb:"Le voyage temporel légendaire de la SNES, enfin portable."},
        {slug:"big-bang-mini", title:"Big Bang Mini", date:"2009-01-27", score:78, scoreType:"critic", hltb:"10h", blurb:"Shoot au stylet en feux d'artifice, une trentaine de niveaux inventifs."},
        {slug:"fire-emblem-shadow-dragon", title:"Fire Emblem: Shadow Dragon", date:"2009-02-16", score:81, scoreType:"critic", hltb:"20h", blurb:"Remake du tout premier Fire Emblem, avec Marth."},
        {slug:"gta-chinatown-wars", title:"Grand Theft Auto: Chinatown Wars", date:"2009-03-17", score:93, scoreType:"critic", hltb:"12h", blurb:"GTA vu du dessus étonnamment complet, taillé sur mesure pour la DS."},
        {slug:"henry-hatsworth", title:"Henry Hatsworth in the Puzzling Adventure", date:"2009-03-17", score:79, scoreType:"critic", hltb:"10h", blurb:"Moitié plateforme, moitié puzzle, un gentleman contre le Monde Étrange."},
        {slug:"suikoden-tierkreis", title:"Suikoden Tierkreis", date:"2009-03-17", score:78, scoreType:"critic", hltb:"30h", blurb:"Les 108 étoiles du destin en poche, dans un multivers inédit."},
        {slug:"pokemon-platinum", title:"Pokémon Platine", date:"2009-03-22", score:88, scoreType:"user", hltb:"40h", blurb:"Version définitive de Sinnoh, avec le Monde Distorsion."},
        {slug:"knights-in-the-nightmare", title:"Knights in the Nightmare", date:"2009-06-02", score:80, scoreType:"critic", hltb:"25h", blurb:"Hybride de tactical-RPG et de shoot'em up signé Sting, unique en son genre."},
        {slug:"professor-layton-diabolical-box", title:"Professeur Layton et la Boîte de Pandore", date:"2009-08-24", score:84, scoreType:"critic", hltb:"13h", blurb:"Deuxième enquête du professeur, à bord du Molentary Express."},
        {slug:"mario-and-luigi-bowsers-inside-story", title:"Mario & Luigi: Voyage au centre de Bowser", date:"2009-09-14", score:89, scoreType:"user", hltb:"25h", blurb:"Mario et Luigi explorent l'intérieur de Bowser, sommet de la série."},
        {slug:"pokemon-mystery-dungeon-explorers-of-sky", title:"Pokémon Donjon Mystère: Explorateurs du Ciel", date:"2009-10-12", score:86, scoreType:"user", hltb:"35h", blurb:"Version ultime d'Explorateurs, l'histoire Pokémon la plus émouvante."},
        {slug:"might-and-magic-clash-of-heroes", title:"Might & Magic: Clash of Heroes", date:"2009-12-01", score:87, scoreType:"critic", hltb:"18h", blurb:"Puzzle-RPG à campagne complète, cinq héros et autant de styles."},
        {slug:"zelda-spirit-tracks", title:"The Legend of Zelda: Spirit Tracks", date:"2009-12-07", score:87, scoreType:"critic", hltb:"18h", blurb:"Link conducteur de train, accompagné du fantôme de la princesse Zelda."},
        {slug:"pokemon-heartgold-soulsilver", title:"Pokémon HeartGold / SoulSilver", date:"2010-03-14", score:90, scoreType:"user", hltb:"40h", blurb:"Remake de la deuxième génération, Johto et Kanto réunis, Pokéwalker inclus."},
        {slug:"infinite-space", title:"Infinite Space", date:"2010-03-16", score:78, scoreType:"critic", hltb:"60h", blurb:"Space opera tentaculaire de PlatinumGames, flottes à composer et récit fleuve."},
        {slug:"smt-strange-journey", title:"Shin Megami Tensei: Strange Journey", date:"2010-03-23", score:80, scoreType:"critic", hltb:"40h", blurb:"Expédition SMT pure et dure en Antarctique, sombre et fascinante."},
        {slug:"lufia-curse-of-the-sinistrals", title:"Lufia: Curse of the Sinistrals", date:"2010-08-31", score:77, scoreType:"critic", hltb:"25h", blurb:"Remake en action-RPG du classique SNES, rythmé et généreux."},
        {slug:"professor-layton-unwound-future", title:"Professeur Layton et le Destin Perdu", date:"2010-09-12", score:89, scoreType:"user", hltb:"12h", blurb:"Le voyage dans le temps le plus émouvant du professeur."},
        {slug:"last-window-the-secret-of-cape-west", title:"Last Window: The Secret of Cape West", date:"2010-09-17", score:77, scoreType:"critic", hltb:"12h", blurb:"La suite de Hotel Dusk, polar feutré sorti uniquement en Europe."},
        {slug:"etrian-odyssey-3-the-drowned-city", title:"Etrian Odyssey III: The Drowned City", date:"2010-09-21", score:79, scoreType:"critic", hltb:"60h", blurb:"Labyrinthe englouti et cartographie au stylet, pour explorateurs patients."},
        {slug:"rune-factory-3", title:"Rune Factory 3", date:"2010-11-09", score:80, scoreType:"critic", hltb:"50h", blurb:"Donjons, ferme et romance : l'épisode DS le plus abouti de la série."},
        {slug:"999-nine-hours-nine-persons-nine-doors", title:"999: Nine Hours, Nine Persons, Nine Doors", date:"2010-11-16", score:90, scoreType:"user", hltb:"10h", blurb:"Visual novel à énigmes sous tension, neuf personnes piégées sur un navire."},
        {slug:"sonic-colors-ds", title:"Sonic Colors", date:"2010-11-16", score:79, scoreType:"critic", hltb:"6h", blurb:"Version DS taillée pour la 2D, wisps colorés et level design généreux."},
        {slug:"golden-sun-dark-dawn", title:"Golden Sun: Dark Dawn", date:"2010-11-29", score:79, scoreType:"critic", hltb:"30h", blurb:"La saga Psynergie revient une génération plus tard."},
        {slug:"ghost-trick-phantom-detective", title:"Ghost Trick: Phantom Detective", date:"2011-01-11", score:90, scoreType:"user", hltb:"12h", blurb:"Sitôt mort, Sissel manipule les objets pour changer le destin des vivants."},
        {slug:"pokemon-black-white", title:"Pokémon Noir / Blanc", date:"2011-03-06", score:82, scoreType:"user", hltb:"32h", blurb:"Cinquième génération à Unys, avec uniquement de nouveaux Pokémon."},
        {slug:"okamiden", title:"Okamiden", date:"2011-03-15", score:78, scoreType:"critic", hltb:"20h", blurb:"Chibiterasu reprend le pinceau céleste dans une suite pleine de charme."},
        {slug:"kirby-mass-attack", title:"Kirby Mass Attack", date:"2011-09-19", score:83, scoreType:"critic", hltb:"7h", blurb:"Jusqu'à dix Kirby menés au stylet, inventif de bout en bout."},
        {slug:"solatorobo-red-the-hunter", title:"Solatorobo: Red the Hunter", date:"2011-09-27", score:77, scoreType:"critic", hltb:"15h", blurb:"Chasseur canin et mécha dans un archipel céleste, dix ans de fabrication."},
        {slug:"professor-layton-last-specter", title:"Professeur Layton et l'Appel du Spectre", date:"2011-10-17", score:78, scoreType:"critic", hltb:"15h", blurb:"Première enquête aux côtés de Luke, aux origines du duo."},
        {slug:"inazuma-eleven-2", title:"Inazuma Eleven 2", date:"2012-05-18", score:79, scoreType:"critic", hltb:"35h", blurb:"RPG de football contre des envahisseurs, deux versions au choix."},
        {slug:"pokemon-conquest", title:"Pokémon Conquest", date:"2012-06-18", score:80, scoreType:"critic", hltb:"30h", blurb:"Pokémon rencontre Nobunaga's Ambition, crossover tactique inattendu."},
        {slug:"inazuma-eleven-3", title:"Inazuma Eleven 3", date:"2013-09-27", score:76, scoreType:"critic", hltb:"40h", blurb:"Coupe du monde et techniques surpuissantes, conclusion de la trilogie."}
      ]
    },

    n3ds: {
      key: "n3ds",
      name: "Nintendo 3DS",
      short: "3DS",
      color: "#ff2ea6",
      theme: "assets/theme-3ds.css",
      page: "3ds.html",
      ready: true,
      games: [
        {slug:"zelda-ocarina-of-time-3d", title:"The Legend of Zelda: Ocarina of Time 3D", date:"2011-06-19", score:91, scoreType:"user", hltb:"26h", blurb:"Le chef-d'oeuvre N64 remis à neuf, avec la Master Quest en bonus."},
        {slug:"smt-devil-survivor-overclocked", title:"Shin Megami Tensei: Devil Survivor Overclocked", date:"2011-08-23", score:78, scoreType:"critic", hltb:"30h", blurb:"Le huis clos tactique de Tokyo, réédité avec voix et huitième jour."},
        {slug:"cave-story-3d", title:"Cave Story 3D", date:"2011-11-08", score:78, scoreType:"critic", hltb:"10h", blurb:"Le classique indépendant repensé en 3D, action et récit toujours aussi justes."},
        {slug:"mutant-mudds", title:"Mutant Mudds", date:"2012-01-26", score:76, scoreType:"critic", hltb:"6h", blurb:"Plateforme rétro sur trois plans de profondeur, exigeante et lisible."},
        {slug:"kid-icarus-uprising", title:"Kid Icarus: Uprising", date:"2012-03-23", score:87, scoreType:"user", hltb:"11h", blurb:"Le retour de Pit par Masahiro Sakurai, dialogues savoureux et action intense."},
        {slug:"kingdom-hearts-3d-dream-drop-distance", title:"Kingdom Hearts 3D: Dream Drop Distance", date:"2012-07-31", score:75, scoreType:"critic", hltb:"17h", blurb:"Sora et Riku alternent dans les mondes endormis, étape clé de l'intrigue."},
        {slug:"zero-escape-virtues-last-reward", title:"Zero Escape: Virtue's Last Reward", date:"2012-10-23", score:88, scoreType:"user", hltb:"30h", blurb:"Suite de 999, huis clos à embranchements où chaque trahison compte."},
        {slug:"professor-layton-miracle-mask", title:"Professeur Layton et le Masque des Miracles", date:"2012-10-28", score:81, scoreType:"critic", hltb:"15h", blurb:"Cinquième enquête du professeur, entre cirque et cité du désert."},
        {slug:"crimson-shroud", title:"Crimson Shroud", date:"2012-12-13", score:76, scoreType:"critic", hltb:"10h", blurb:"RPG de table signé Matsuno, figurines et dés à l'écran."},
        {slug:"fire-emblem-awakening", title:"Fire Emblem: Awakening", date:"2013-02-04", score:89, scoreType:"user", hltb:"25h", blurb:"L'épisode qui a sauvé la série, avec mariages et enfants entre unités."},
        {slug:"etrian-odyssey-4", title:"Etrian Odyssey IV: Legends of the Titan", date:"2013-02-26", score:82, scoreType:"critic", hltb:"40h", blurb:"Dungeon-RPG où l'on dessine soi-même sa carte sur l'écran tactile."},
        {slug:"monster-hunter-3-ultimate", title:"Monster Hunter 3 Ultimate", date:"2013-03-19", score:85, scoreType:"critic", hltb:"50h", blurb:"La chasse aux monstres dans sa version la plus complète de l'ère Tri."},
        {slug:"luigis-mansion-dark-moon", title:"Luigi's Mansion: Dark Moon", date:"2013-03-24", score:84, scoreType:"user", hltb:"12h", blurb:"Luigi reprend l'aspirateur à fantômes à travers cinq manoirs variés."},
        {slug:"donkey-kong-country-returns-3d", title:"Donkey Kong Country Returns 3D", date:"2013-05-24", score:78, scoreType:"critic", hltb:"8h", blurb:"Le retour exigeant de la famille Kong, adapté du jeu Wii."},
        {slug:"shin-megami-tensei-4", title:"Shin Megami Tensei IV", date:"2013-07-16", score:83, scoreType:"critic", hltb:"45h", blurb:"Apocalypse démoniaque entre royaume médiéval et Tokyo en ruines."},
        {slug:"attack-of-the-friday-monsters", title:"Attack of the Friday Monsters!", date:"2013-07-18", score:81, scoreType:"critic", hltb:"3h", blurb:"Un été japonais où les monstres télé prennent vie, court et touchant."},
        {slug:"mario-and-luigi-dream-team", title:"Mario & Luigi: Dream Team", date:"2013-08-11", score:81, scoreType:"critic", hltb:"30h", blurb:"Les frères plongent dans les rêves de Luigi, démultiplié à l'infini."},
        {slug:"etrian-odyssey-untold-millennium-girl", title:"Etrian Odyssey Untold: The Millennium Girl", date:"2013-10-01", score:80, scoreType:"critic", hltb:"40h", blurb:"Le premier Etrian refait, avec un mode histoire scénarisé inédit."},
        {slug:"rune-factory-4", title:"Rune Factory 4", date:"2013-10-01", score:78, scoreType:"critic", hltb:"55h", blurb:"Ferme, romance et donjons, le mariage parfait des genres."},
        {slug:"pokemon-x-y", title:"Pokémon X / Y", date:"2013-10-12", score:84, scoreType:"user", hltb:"32h", blurb:"Le passage de Pokémon à la 3D, avec Kalos et les méga-évolutions."},
        {slug:"zelda-a-link-between-worlds", title:"The Legend of Zelda: A Link Between Worlds", date:"2013-11-22", score:90, scoreType:"user", hltb:"16h", blurb:"Hyrule d'A Link to the Past revisité, Link se fond dans les murs."},
        {slug:"bravely-default", title:"Bravely Default", date:"2014-02-07", score:84, scoreType:"user", hltb:"50h", blurb:"Le RPG old-school de Square Enix, avec son système Brave et Default."},
        {slug:"kirby-triple-deluxe", title:"Kirby: Triple Deluxe", date:"2014-05-02", score:80, scoreType:"critic", hltb:"6h", blurb:"Kirby joue sur la profondeur des deux plans grâce à la 3D."},
        {slug:"shovel-knight", title:"Shovel Knight", date:"2014-06-26", score:88, scoreType:"user", hltb:"6h", blurb:"Hommage parfait aux plateformers NES, à la pelle et au StreetPass."},
        {slug:"azure-striker-gunvolt", title:"Azure Striker Gunvolt", date:"2014-08-29", score:78, scoreType:"critic", hltb:"8h", blurb:"Action 2D électrique par les vétérans de Mega Man, scoring et nerf."},
        {slug:"fantasy-life", title:"Fantasy Life", date:"2014-10-24", score:84, scoreType:"user", hltb:"40h", blurb:"RPG de vie de Level-5 où l'on enchaîne douze métiers avec bonheur."},
        {slug:"pokemon-omega-ruby-alpha-sapphire", title:"Pokémon Rubis Oméga / Saphir Alpha", date:"2014-11-21", score:84, scoreType:"user", hltb:"30h", blurb:"Hoenn refait en 3D, avec l'envol libre à dos de Pokémon."},
        {slug:"persona-q-shadow-of-the-labyrinth", title:"Persona Q: Shadow of the Labyrinth", date:"2014-11-25", score:80, scoreType:"critic", hltb:"60h", blurb:"Les castings de Persona 3 et 4 réunis dans un labyrinthe façon Etrian."},
        {slug:"zelda-majoras-mask-3d", title:"The Legend of Zelda: Majora's Mask 3D", date:"2015-02-13", score:89, scoreType:"user", hltb:"20h", blurb:"Les trois jours de Termina remasterisés, toujours aussi singuliers."},
        {slug:"monster-hunter-4-ultimate", title:"Monster Hunter 4 Ultimate", date:"2015-02-13", score:88, scoreType:"user", hltb:"60h", blurb:"La chasse gagne la verticalité et la monte, sommet de la série sur 3DS."},
        {slug:"smt-devil-survivor-2-record-breaker", title:"Shin Megami Tensei: Devil Survivor 2 Record Breaker", date:"2015-05-05", score:81, scoreType:"critic", hltb:"40h", blurb:"Les Septentriones assiègent le Japon, version enrichie d'un épilogue complet."},
        {slug:"etrian-odyssey-2-untold", title:"Etrian Odyssey 2 Untold: The Fafnir Knight", date:"2015-08-04", score:80, scoreType:"critic", hltb:"40h", blurb:"Le deuxième labyrinthe refait avec mode histoire, version définitive."},
        {slug:"stella-glow", title:"Stella Glow", date:"2015-11-17", score:77, scoreType:"critic", hltb:"40h", blurb:"Tactical-RPG de sorcières chanteuses, chant du cygne d'Imageepoch."},
        {slug:"steamworld-heist", title:"SteamWorld Heist", date:"2015-12-10", score:87, scoreType:"critic", hltb:"15h", blurb:"Tactique au tour par tour où chaque tir se vise à la main, brillant."},
        {slug:"fire-emblem-fates", title:"Fire Emblem Fates", date:"2016-02-19", score:82, scoreType:"user", hltb:"30h", blurb:"Deux familles, deux voies : Héritage accessible ou Conquête exigeante."},
        {slug:"bravely-second-end-layer", title:"Bravely Second: End Layer", date:"2016-04-15", score:81, scoreType:"critic", hltb:"45h", blurb:"Suite directe de Bravely Default, système de jobs encore affiné."},
        {slug:"kirby-planet-robobot", title:"Kirby: Planet Robobot", date:"2016-06-10", score:87, scoreType:"user", hltb:"7h", blurb:"Kirby pilote une armure mécha, l'un des meilleurs épisodes de la série."},
        {slug:"7th-dragon-3-code-vfd", title:"7th Dragon III Code: VFD", date:"2016-07-12", score:76, scoreType:"critic", hltb:"30h", blurb:"Chasse aux dragons à travers les époques, seul épisode sorti en Occident."},
        {slug:"monster-hunter-generations", title:"Monster Hunter Generations", date:"2016-07-15", score:85, scoreType:"critic", hltb:"50h", blurb:"Épisode anniversaire aux styles de chasse libres, hommage à la saga."},
        {slug:"smt-4-apocalypse-3ds", title:"Shin Megami Tensei IV: Apocalypse", date:"2016-09-20", score:84, scoreType:"critic", hltb:"40h", blurb:"Relecture de SMT IV du point de vue d'un chasseur ressuscité."},
        {slug:"yo-kai-watch-2", title:"Yo-kai Watch 2", date:"2016-09-30", score:80, scoreType:"critic", hltb:"40h", blurb:"Guerre d'esprits entre deux versions, l'épisode le plus complet de la série."},
        {slug:"fire-emblem-echoes-shadows-of-valentia", title:"Fire Emblem Echoes: Shadows of Valentia", date:"2017-05-19", score:86, scoreType:"user", hltb:"30h", blurb:"Remake de Gaiden, doublé intégral et direction artistique superbe."},
        {slug:"ever-oasis", title:"Ever Oasis", date:"2017-06-23", score:77, scoreType:"critic", hltb:"25h", blurb:"Bâtir une oasis et explorer le désert, ultime charme signé Grezzo."},
        {slug:"monster-hunter-stories", title:"Monster Hunter Stories", date:"2017-09-08", score:81, scoreType:"critic", hltb:"35h", blurb:"Monster Hunter en RPG au tour par tour, monstres à élever."},
        {slug:"mario-and-luigi-superstar-saga-bowsers-minions", title:"Mario & Luigi: Superstar Saga + Les sbires de Bowser", date:"2017-10-06", score:81, scoreType:"critic", hltb:"15h", blurb:"Le premier Mario & Luigi refait, avec la campagne des sbires en bonus."},
        {slug:"pokemon-ultra-sun-ultra-moon", title:"Pokémon Ultra-Soleil / Ultra-Lune", date:"2017-11-17", score:84, scoreType:"critic", hltb:"35h", blurb:"Version définitive d'Alola, ultime épisode Pokémon de la 3DS."},
        {slug:"radiant-historia-perfect-chronology", title:"Radiant Historia: Perfect Chronology", date:"2018-02-13", score:83, scoreType:"critic", hltb:"35h", blurb:"Le RPG temporel dans sa version définitive, troisième ligne d'histoire incluse."},
        {slug:"the-alliance-alive", title:"The Alliance Alive", date:"2018-03-27", score:76, scoreType:"critic", hltb:"35h", blurb:"Hommage aux RPG SaGa, neuf héros sous un ciel confisqué."},
        {slug:"etrian-odyssey-nexus", title:"Etrian Odyssey Nexus", date:"2019-02-05", score:81, scoreType:"critic", hltb:"60h", blurb:"Le grand best-of des labyrinthes, adieu de la série à la 3DS."},
        {slug:"persona-q2-new-cinema-labyrinth", title:"Persona Q2: New Cinema Labyrinth", date:"2019-06-04", score:78, scoreType:"critic", hltb:"50h", blurb:"Les héros de Persona 3, 4 et 5 piégés dans un cinéma, adieu en beauté de la 3DS."}
      ]
    },

    gamecube: {
      key: "gamecube",
      name: "GameCube",
      short: "GC",
      color: "#4b3f8f",
      theme: "assets/theme-gamecube.css",
      page: "gamecube.html",
      ready: true,
      games: [
        {slug:"luigis-mansion", title:"Luigi's Mansion", date:"2001-11-18", score:85, scoreType:"user", hltb:"6h", blurb:"Luigi aspire les fantômes d'un manoir hanté, titre de lancement devenu culte."},
        {slug:"star-wars-rogue-squadron-2-rogue-leader", title:"Star Wars Rogue Squadron II: Rogue Leader", date:"2001-11-18", score:87, scoreType:"user", hltb:"6h", blurb:"Vitrine technique du lancement, batailles spatiales spectaculaires de la trilogie originale."},
        {slug:"pikmin", title:"Pikmin", date:"2001-12-02", score:88, scoreType:"user", hltb:"10h", blurb:"Stratégie en temps réel miniature signée Miyamoto, 30 jours pour repartir."},
        {slug:"sonic-adventure-2-battle", title:"Sonic Adventure 2: Battle", date:"2002-02-11", score:87, scoreType:"user", hltb:"11h", blurb:"Version enrichie de l'aventure Dreamcast, Chao Garden et mode 2 joueurs inclus."},
        {slug:"star-fox-adventures", title:"Star Fox Adventures", date:"2002-09-23", score:82, scoreType:"critic", hltb:"15h", blurb:"Dernier jeu de Rare chez Nintendo, aventure à la Zelda avec Fox McCloud."},
        {slug:"timesplitters-2", title:"TimeSplitters 2", date:"2002-10-08", score:88, scoreType:"critic", hltb:"8h", blurb:"FPS à voyages temporels des créateurs de GoldenEye, campagne inventive."},
        {slug:"phantasy-star-online-episode-1-2", title:"Phantasy Star Online Episode I & II", date:"2002-10-29", score:85, scoreType:"critic", hltb:"30h", blurb:"Le RPG en ligne pionnier de Sega, jouable en écran partagé sur GameCube."},
        {slug:"medal-of-honor-frontline", title:"Medal of Honor: Frontline", date:"2002-11-07", score:82, scoreType:"critic", hltb:"8h", blurb:"Débarquement et lignes ennemies, la campagne la plus cinématographique de la série."},
        {slug:"baldurs-gate-dark-alliance", title:"Baldur's Gate: Dark Alliance", date:"2002-11-19", score:80, scoreType:"critic", hltb:"15h", blurb:"Action-RPG des Royaumes Oubliés, donjons et butin à deux sur le canapé."},
        {slug:"star-wars-jedi-knight-2-jedi-outcast", title:"Star Wars Jedi Knight II: Jedi Outcast", date:"2002-11-19", score:75, scoreType:"critic", hltb:"12h", blurb:"Kyle Katarn reprend le sabre laser, duels et Force à la première personne."},
        {slug:"skies-of-arcadia-legends", title:"Skies of Arcadia Legends", date:"2003-01-27", score:89, scoreType:"user", hltb:"45h", blurb:"Portage enrichi du RPG de pirates du ciel de la Dreamcast."},
        {slug:"rayman-3-hoodlum-havoc", title:"Rayman 3: Hoodlum Havoc", date:"2003-03-21", score:76, scoreType:"critic", hltb:"10h", blurb:"Rayman contre les Hoodlums, plateforme haute en couleur et en verve."},
        {slug:"zelda-the-wind-waker", title:"The Legend of Zelda: The Wind Waker", date:"2003-03-24", score:90, scoreType:"user", hltb:"26h", blurb:"Navigation en cel-shading intemporel sur un océan sans fin."},
        {slug:"splinter-cell", title:"Tom Clancy's Splinter Cell", date:"2003-04-08", score:88, scoreType:"critic", hltb:"11h", blurb:"L'infiltration dans l'ombre selon Sam Fisher, premier du nom."},
        {slug:"hitman-2-silent-assassin", title:"Hitman 2: Silent Assassin", date:"2003-04-08", score:82, scoreType:"critic", hltb:"12h", blurb:"L'Agent 47 sort de sa retraite, contrats ouverts à la discrétion du joueur."},
        {slug:"giftpia", title:"Giftpia", date:"2003-04-25", score:null, scoreType:"none", hltb:"20h", blurb:"Rembourser sa dette sur une île japonaise : l'aventure décalée de Skip, restée au Japon."},
        {slug:"lost-kingdoms-2", title:"Lost Kingdoms II", date:"2003-05-19", score:76, scoreType:"critic", hltb:"15h", blurb:"Suite plus riche et mieux rythmée, deck à composer soi-même."},
        {slug:"the-simpsons-hit-and-run", title:"The Simpsons: Hit & Run", date:"2003-09-16", score:89, scoreType:"user", hltb:"12h", blurb:"GTA parodique dans Springfield, devenu culte auprès de toute une génération."},
        {slug:"freedom-fighters", title:"Freedom Fighters", date:"2003-09-26", score:81, scoreType:"critic", hltb:"8h", blurb:"Résistance urbaine contre l'occupant, escouade à commander d'un doigt."},
        {slug:"viewtiful-joe", title:"Viewtiful Joe", date:"2003-10-07", score:87, scoreType:"user", hltb:"7h", blurb:"Beat'em up stylisé de Capcom où Joe ralentit et accélère le temps."},
        {slug:"star-wars-rogue-squadron-3-rebel-strike", title:"Star Wars Rogue Squadron III: Rebel Strike", date:"2003-10-21", score:78, scoreType:"critic", hltb:"8h", blurb:"Rebel Strike conclut la trilogie Rogue Squadron, à pied comme en vol."},
        {slug:"gladius", title:"Gladius", date:"2003-10-28", score:78, scoreType:"critic", hltb:"30h", blurb:"Tournois de gladiateurs en tactique au tour par tour, signé LucasArts."},
        {slug:"lotr-return-of-the-king", title:"Le Seigneur des Anneaux : Le Retour du Roi", date:"2003-11-05", score:80, scoreType:"critic", hltb:"8h", blurb:"Les batailles du film en beat'em up soigné, jouable à deux."},
        {slug:"sphinx-and-the-cursed-mummy", title:"Sphinx and the Cursed Mummy", date:"2003-11-11", score:76, scoreType:"critic", hltb:"15h", blurb:"Aventure égyptienne à la Zelda, entre héros solaire et momie maladroite."},
        {slug:"prince-of-persia-the-sands-of-time", title:"Prince of Persia: The Sands of Time", date:"2003-11-18", score:92, scoreType:"critic", hltb:"8h", blurb:"Renaissance acrobatique de la série, avec la dague qui remonte le temps."},
        {slug:"metal-arms-glitch-in-the-system", title:"Metal Arms: Glitch in the System", date:"2003-11-18", score:82, scoreType:"critic", hltb:"12h", blurb:"Robot rebelle et arsenal réjouissant, TPS culte passé sous les radars."},
        {slug:"beyond-good-and-evil", title:"Beyond Good & Evil", date:"2003-12-11", score:90, scoreType:"user", hltb:"10h", blurb:"Aventure de Michel Ancel portée par la reporter Jade, culte malgré son échec commercial."},
        {slug:"james-bond-everything-or-nothing", title:"James Bond 007: Everything or Nothing", date:"2004-02-17", score:82, scoreType:"critic", hltb:"6h", blurb:"007 en vue à la troisième personne, avec un casting hollywoodien complet."},
        {slug:"metal-gear-solid-the-twin-snakes", title:"Metal Gear Solid: The Twin Snakes", date:"2004-03-09", score:88, scoreType:"user", hltb:"12h", blurb:"Remake du premier Metal Gear Solid avec le gameplay de MGS2."},
        {slug:"pokemon-colosseum", title:"Pokémon Colosseum", date:"2004-03-22", score:84, scoreType:"user", hltb:"25h", blurb:"RPG Pokémon sur console de salon où l'on vole les Pokémon Obscurs."},
        {slug:"rainbow-six-3", title:"Tom Clancy's Rainbow Six 3", date:"2004-04-20", score:76, scoreType:"critic", hltb:"10h", blurb:"Antiterrorisme tactique où chaque assaut se planifie avant de tirer."},
        {slug:"zelda-four-swords-adventures", title:"The Legend of Zelda: Four Swords Adventures", date:"2004-06-07", score:86, scoreType:"critic", hltb:"15h", blurb:"Zelda coopératif à quatre Link, connecté aux Game Boy Advance."},
        {slug:"spider-man-2", title:"Spider-Man 2", date:"2004-06-28", score:80, scoreType:"critic", hltb:"10h", blurb:"La balancée dans New York qui a défini les jeux de super-héros."},
        {slug:"tales-of-symphonia", title:"Tales of Symphonia", date:"2004-07-13", score:89, scoreType:"user", hltb:"45h", blurb:"RPG d'action au scénario généreux, épisode le plus aimé de la série Tales."},
        {slug:"pikmin-2", title:"Pikmin 2", date:"2004-08-30", score:90, scoreType:"user", hltb:"20h", blurb:"Suite sans limite de temps, grottes, trésors et deux capitaines."},
        {slug:"x-men-legends", title:"X-Men Legends", date:"2004-09-21", score:82, scoreType:"critic", hltb:"15h", blurb:"Action-RPG coopératif à quatre, les mutants enfin en équipe."},
        {slug:"second-sight", title:"Second Sight", date:"2004-09-21", score:75, scoreType:"critic", hltb:"8h", blurb:"Pouvoirs psychiques et infiltration dans un thriller à double époque."},
        {slug:"paper-mario-the-thousand-year-door", title:"Paper Mario: The Thousand-Year Door", date:"2004-10-11", score:91, scoreType:"user", hltb:"35h", blurb:"RPG en papier à l'écriture hilarante, souvent cité comme le meilleur Paper Mario."},
        {slug:"baten-kaitos-eternal-wings", title:"Baten Kaitos: Eternal Wings and the Lost Ocean", date:"2004-11-16", score:80, scoreType:"critic", hltb:"55h", blurb:"RPG à cartes aux décors peints à la main, dans un monde d'îles célestes."},
        {slug:"viewtiful-joe-2", title:"Viewtiful Joe 2", date:"2004-11-18", score:86, scoreType:"critic", hltb:"8h", blurb:"Suite directe avec Silvia jouable et un nouveau pouvoir de zoom."},
        {slug:"timesplitters-future-perfect", title:"TimeSplitters: Future Perfect", date:"2005-03-21", score:84, scoreType:"critic", hltb:"8h", blurb:"Voyages temporels et humour absurde, le FPS fun par excellence."},
        {slug:"splinter-cell-chaos-theory", title:"Splinter Cell: Chaos Theory", date:"2005-03-31", score:87, scoreType:"critic", hltb:"12h", blurb:"L'infiltration à son sommet, lumière et son comme armes."},
        {slug:"killer7", title:"Killer7", date:"2005-07-07", score:84, scoreType:"user", hltb:"15h", blurb:"Thriller stylisé et radical de Suda51, sept tueurs dans un même corps."},
        {slug:"battalion-wars", title:"Battalion Wars", date:"2005-09-19", score:76, scoreType:"critic", hltb:"12h", blurb:"Advance Wars passe à l'action en temps réel, escouades en pagaille."},
        {slug:"pokemon-xd-gale-of-darkness", title:"Pokémon XD: Gale of Darkness", date:"2005-10-03", score:80, scoreType:"user", hltb:"30h", blurb:"Suite de Colosseum autour d'un Lugia Obscur réputé impossible à purifier."},
        {slug:"fire-emblem-path-of-radiance", title:"Fire Emblem: Path of Radiance", date:"2005-10-17", score:90, scoreType:"user", hltb:"30h", blurb:"Premier Fire Emblem en 3D, début de l'histoire d'Ike et des mercenaires de Greil."},
        {slug:"gun", title:"Gun", date:"2005-11-08", score:76, scoreType:"critic", hltb:"8h", blurb:"Western en monde ouvert, vengeance sanglante sur la piste de l'Ouest."},
        {slug:"chibi-robo", title:"Chibi-Robo!", date:"2006-02-06", score:77, scoreType:"critic", hltb:"14h", blurb:"Petit robot ménager qui répare le quotidien d'une famille, attachant et original."},
        {slug:"baten-kaitos-origins", title:"Baten Kaitos Origins", date:"2006-09-25", score:84, scoreType:"critic", hltb:"40h", blurb:"Préquelle au système de cartes affiné, jamais sortie en Europe."},
        {slug:"zelda-twilight-princess", title:"The Legend of Zelda: Twilight Princess", date:"2006-12-11", score:90, scoreType:"user", hltb:"34h", blurb:"Ultime jeu GameCube, Link loup et crépuscule pour un adieu épique."}
      ]
    },

    ps2: {
      key: "ps2",
      name: "PlayStation 2",
      short: "PS2",
      color: "#4a5fc1",
      theme: "assets/theme-ps2.css",
      page: "ps2.html",
      ready: true,
      games: [
        {slug:"onimusha-warlords", title:"Onimusha: Warlords", date:"2001-03-13", score:86, scoreType:"critic", hltb:"6h", blurb:"Samouraïs contre démons dans un Japon féodal réinventé par Capcom."},
        {slug:"dark-cloud", title:"Dark Cloud", date:"2001-05-29", score:80, scoreType:"critic", hltb:"25h", blurb:"Donjons et reconstruction de villages, premier RPG maison de Level-5."},
        {slug:"klonoa-2-lunateas-veil", title:"Klonoa 2: Lunatea's Veil", date:"2001-07-24", score:91, scoreType:"critic", hltb:"8h", blurb:"Plateforme 2.5D onirique et mélancolique, injustement méconnue."},
        {slug:"ico", title:"Ico", date:"2001-09-24", score:90, scoreType:"user", hltb:"6h", blurb:"Un garçon, une princesse et un château : la poésie selon Fumito Ueda."},
        {slug:"devil-may-cry", title:"Devil May Cry", date:"2001-10-16", score:88, scoreType:"user", hltb:"8h", blurb:"Dante invente le jeu d'action stylé, pistolets et épée démoniaque en main."},
        {slug:"grand-theft-auto-3", title:"Grand Theft Auto III", date:"2001-10-22", score:87, scoreType:"user", hltb:"16h", blurb:"Liberty City en monde ouvert 3D, le jeu qui a tout changé."},
        {slug:"ace-combat-04-shattered-skies", title:"Ace Combat 04: Shattered Skies", date:"2001-11-01", score:89, scoreType:"critic", hltb:"10h", blurb:"Guerre aérienne et récit poignant vu du sol, l'envol de la série."},
        {slug:"metal-gear-solid-2-sons-of-liberty", title:"Metal Gear Solid 2: Sons of Liberty", date:"2001-11-13", score:89, scoreType:"user", hltb:"11h", blurb:"Infiltration virtuose et scénario vertigineux signés Hideo Kojima."},
        {slug:"jak-and-daxter-the-precursor-legacy", title:"Jak and Daxter: The Precursor Legacy", date:"2001-12-03", score:87, scoreType:"user", hltb:"10h", blurb:"Plateforme sans temps de chargement de Naughty Dog, monde continu."},
        {slug:"kingdom-hearts", title:"Kingdom Hearts", date:"2002-09-16", score:88, scoreType:"user", hltb:"30h", blurb:"La rencontre improbable de Disney et Square, devenue légendaire."},
        {slug:"sly-cooper-and-the-thievius-raccoonus", title:"Sly Cooper and the Thievius Raccoonus", date:"2002-09-23", score:86, scoreType:"critic", hltb:"7h", blurb:"Cambriolages en cel-shading avec le raton laveur le plus classe du genre."},
        {slug:"wild-arms-3", title:"Wild Arms 3", date:"2002-10-15", score:79, scoreType:"critic", hltb:"35h", blurb:"Western fantastique en cel-shading, chevauchées et gardiens anciens."},
        {slug:"suikoden-3", title:"Suikoden III", date:"2002-10-24", score:81, scoreType:"critic", hltb:"35h", blurb:"Trois points de vue croisés et 108 étoiles du destin à recruter."},
        {slug:"gta-vice-city", title:"Grand Theft Auto: Vice City", date:"2002-10-27", score:87, scoreType:"user", hltb:"18h", blurb:"Miami années 80, néons et radio culte : le GTA le plus stylé."},
        {slug:"ratchet-and-clank", title:"Ratchet & Clank", date:"2002-11-04", score:89, scoreType:"user", hltb:"11h", blurb:"Duo lombax-robot et arsenal délirant, début d'une grande série."},
        {slug:"dark-cloud-2", title:"Dark Cloud 2", date:"2003-02-17", score:87, scoreType:"critic", hltb:"45h", blurb:"Action-RPG de Level-5 mêlant donjons, photos, inventions et reconstruction."},
        {slug:"xenosaga-episode-1", title:"Xenosaga Episode I", date:"2003-02-25", score:83, scoreType:"critic", hltb:"40h", blurb:"Space opera philosophique très narratif, début de la trilogie de Monolith."},
        {slug:"zone-of-the-enders-the-2nd-runner", title:"Zone of the Enders: The 2nd Runner", date:"2003-03-11", score:84, scoreType:"critic", hltb:"6h", blurb:"Combats de mechas fulgurants produits par Kojima, pur concentré d'adrénaline."},
        {slug:"disgaea-hour-of-darkness", title:"Disgaea: Hour of Darkness", date:"2003-08-27", score:89, scoreType:"user", hltb:"45h", blurb:"Tactical-RPG parodique aux niveaux 9999 et à l'humour démoniaque."},
        {slug:"jak-2", title:"Jak II", date:"2003-10-14", score:87, scoreType:"critic", hltb:"15h", blurb:"Virage sombre et monde ouvert pour la suite de Naughty Dog."},
        {slug:"ratchet-and-clank-going-commando", title:"Ratchet & Clank: Going Commando", date:"2003-11-11", score:90, scoreType:"user", hltb:"15h", blurb:"Suite plus grande et mieux armée, la formule Ratchet à maturité."},
        {slug:"star-ocean-till-the-end-of-time", title:"Star Ocean: Till the End of Time", date:"2004-08-31", score:80, scoreType:"critic", hltb:"40h", blurb:"Science-fantasy aux combats en temps réel, avec un twist resté fameux."},
        {slug:"sly-2-band-of-thieves", title:"Sly 2: Band of Thieves", date:"2004-09-14", score:88, scoreType:"critic", hltb:"14h", blurb:"Braquages en équipe et ville ouverte, le meilleur épisode de la bande."},
        {slug:"shadow-hearts-covenant", title:"Shadow Hearts: Covenant", date:"2004-09-27", score:85, scoreType:"critic", hltb:"40h", blurb:"RPG gothique dans l'Europe de 1915, sommet de la série."},
        {slug:"shin-megami-tensei-nocturne", title:"Shin Megami Tensei: Nocturne", date:"2004-10-12", score:90, scoreType:"user", hltb:"50h", blurb:"Tokyo détruit et renaissance du monde, le SMT le plus culte."},
        {slug:"ace-combat-5-the-unsung-war", title:"Ace Combat 5: The Unsung War", date:"2004-10-25", score:84, scoreType:"critic", hltb:"12h", blurb:"Dogfights spectaculaires et escadron attachant, l'apogée de la série."},
        {slug:"gta-san-andreas", title:"Grand Theft Auto: San Andreas", date:"2004-10-26", score:90, scoreType:"user", hltb:"31h", blurb:"Trois villes, un État entier : le GTA le plus vaste et le plus aimé."},
        {slug:"ratchet-and-clank-up-your-arsenal", title:"Ratchet & Clank: Up Your Arsenal", date:"2004-11-02", score:91, scoreType:"critic", hltb:"12h", blurb:"Troisième épisode surarmé, avec le Dr Nefarious à la barre."},
        {slug:"jak-3", title:"Jak 3", date:"2004-11-09", score:84, scoreType:"critic", hltb:"12h", blurb:"Conclusion de la trilogie entre désert et ville, buggies à l'appui."},
        {slug:"metal-gear-solid-3-snake-eater", title:"Metal Gear Solid 3: Snake Eater", date:"2004-11-17", score:93, scoreType:"user", hltb:"16h", blurb:"Survie en jungle pendant la guerre froide, souvent cité comme le meilleur MGS."},
        {slug:"devil-may-cry-3-dantes-awakening", title:"Devil May Cry 3: Dante's Awakening", date:"2005-03-01", score:89, scoreType:"user", hltb:"12h", blurb:"Dante jeune et arrogant, action au style exigeant et jubilatoire."},
        {slug:"god-of-war", title:"God of War", date:"2005-03-22", score:91, scoreType:"user", hltb:"9h", blurb:"La vengeance de Kratos contre l'Olympe, brutale et mise en scène."},
        {slug:"digital-devil-saga-ps2", title:"Shin Megami Tensei: Digital Devil Saga", date:"2005-04-05", score:84, scoreType:"critic", hltb:"30h", blurb:"Spin-off SMT au tour par tour où les héros dévorent leurs ennemis."},
        {slug:"psychonauts", title:"Psychonauts", date:"2005-06-21", score:88, scoreType:"user", hltb:"14h", blurb:"Raz explore l'esprit des gens dans l'aventure la plus inventive de Tim Schafer."},
        {slug:"the-warriors", title:"The Warriors", date:"2005-10-17", score:84, scoreType:"critic", hltb:"15h", blurb:"Rockstar adapte le film culte en beat'em up urbain étonnamment riche."},
        {slug:"shadow-of-the-colossus", title:"Shadow of the Colossus", date:"2005-10-18", score:92, scoreType:"user", hltb:"8h", blurb:"Seize colosses dans une terre interdite, chef-d'oeuvre de Fumito Ueda."},
        {slug:"prince-of-persia-the-two-thrones", title:"Prince of Persia: The Two Thrones", date:"2005-12-01", score:85, scoreType:"critic", hltb:"8h", blurb:"Le prince aux deux visages referme la trilogie des sables."},
        {slug:"kingdom-hearts-2", title:"Kingdom Hearts II", date:"2006-03-28", score:89, scoreType:"user", hltb:"35h", blurb:"Sora revient dans une aventure plus ample au système de combat affiné."},
        {slug:"yakuza", title:"Yakuza", date:"2006-09-05", score:75, scoreType:"critic", hltb:"20h", blurb:"Kiryu protège une orpheline dans Kamurocho, naissance d'une saga culte."},
        {slug:"okami", title:"Ōkami", date:"2006-09-19", score:91, scoreType:"user", hltb:"30h", blurb:"La déesse Amaterasu repeint le monde au pinceau céleste, estampe jouable."},
        {slug:"valkyrie-profile-2-silmeria", title:"Valkyrie Profile 2: Silmeria", date:"2006-09-26", score:84, scoreType:"critic", hltb:"40h", blurb:"Silmeria et ses einherjar dans un système de combat d'orfèvre."},
        {slug:"god-hand", title:"God Hand", date:"2006-10-10", score:89, scoreType:"user", hltb:"12h", blurb:"Beat'em up délirant et ultra-exigeant de Clover, devenu culte."},
        {slug:"bully", title:"Bully", date:"2006-10-17", score:86, scoreType:"user", hltb:"17h", blurb:"Rockstar au pensionnat : chahut, cours et petites magouilles."},
        {slug:"rogue-galaxy", title:"Rogue Galaxy", date:"2007-01-30", score:82, scoreType:"critic", hltb:"45h", blurb:"Space opera d'action-RPG de Level-5, pirates et planètes exotiques."},
        {slug:"god-of-war-2", title:"God of War II", date:"2007-03-13", score:91, scoreType:"user", hltb:"11h", blurb:"Kratos défie les Titans, chant du cygne spectaculaire de la console."},
        {slug:"odin-sphere", title:"Odin Sphere", date:"2007-05-22", score:83, scoreType:"critic", hltb:"25h", blurb:"Cinq destins croisés en 2D somptueuse signée Vanillaware."},
        {slug:"super-robot-taisen-original-generations", title:"Super Robot Taisen: Original Generations", date:"2007-06-28", score:null, scoreType:"none", hltb:"60h", blurb:"Les deux épisodes GBA refaits en grand, sommet mecha resté au Japon."},
        {slug:"persona-3-fes", title:"Persona 3 FES", date:"2008-04-22", score:90, scoreType:"user", hltb:"70h", blurb:"Lycée le jour, Tartare la nuit : version enrichie du RPG qui a réinventé Persona."},
        {slug:"yakuza-2", title:"Yakuza 2", date:"2008-09-09", score:82, scoreType:"critic", hltb:"25h", blurb:"Kiryu entre Kamurocho et Osaka, l'épisode qui installe la saga pour de bon."},
        {slug:"persona-4", title:"Persona 4", date:"2008-12-09", score:92, scoreType:"user", hltb:"70h", blurb:"Enquête surnaturelle à Inaba, ultime grand RPG de la PlayStation 2."}
      ]
    },

    jrpg: {
      key: "jrpg",
      name: "JRPG",
      short: "JRPG",
      color: "#c14a6b",
      theme: "assets/theme-jrpg.css",
      page: "jrpg.html",
      ready: true,
      games: [
        {slug:"dark-cloud", title:"Dark Cloud (PS2)", date:"2001-05-29", score:80, scoreType:"critic", hltb:"25h", blurb:"Donjons et reconstruction de villages, premier RPG maison de Level-5."},
        {slug:"kingdom-hearts", title:"Kingdom Hearts (PS2)", date:"2002-09-16", score:88, scoreType:"user", hltb:"30h", blurb:"La rencontre improbable de Disney et Square, devenue légendaire."},
        {slug:"wild-arms-3", title:"Wild Arms 3 (PS2)", date:"2002-10-15", score:79, scoreType:"critic", hltb:"35h", blurb:"Western fantastique en cel-shading, chevauchées et gardiens anciens."},
        {slug:"suikoden-3", title:"Suikoden III (PS2)", date:"2002-10-24", score:81, scoreType:"critic", hltb:"35h", blurb:"Trois points de vue croisés et 108 étoiles du destin à recruter."},
        {slug:"skies-of-arcadia-legends", title:"Skies of Arcadia Legends (GC)", date:"2003-01-27", score:89, scoreType:"user", hltb:"45h", blurb:"Portage enrichi du RPG de pirates du ciel de la Dreamcast."},
        {slug:"breath-of-fire-dragon-quarter", title:"Breath of Fire: Dragon Quarter (PS2)", date:"2003-02-14", score:78, scoreType:"critic", hltb:"20h", blurb:"Épisode radical en sous-sol, compteur dragon et recommencements assumés."},
        {slug:"dark-cloud-2", title:"Dark Cloud 2 (PS2)", date:"2003-02-17", score:87, scoreType:"critic", hltb:"45h", blurb:"Action-RPG mêlant donjons, photos, inventions et reconstruction."},
        {slug:"xenosaga-episode-1", title:"Xenosaga Episode I (PS2)", date:"2003-02-25", score:83, scoreType:"critic", hltb:"40h", blurb:"Space opera philosophique très narratif, début de la trilogie de Monolith."},
        {slug:"disgaea-hour-of-darkness", title:"Disgaea: Hour of Darkness (PS2)", date:"2003-08-27", score:89, scoreType:"user", hltb:"45h", blurb:"Tactical-RPG parodique aux niveaux 9999 et à l'humour démoniaque."},
        {slug:"pokemon-colosseum", title:"Pokémon Colosseum (GC)", date:"2004-03-22", score:84, scoreType:"user", hltb:"25h", blurb:"RPG Pokémon de salon où l'on vole les Pokémon Obscurs."},
        {slug:"front-mission-4", title:"Front Mission 4 (PS2)", date:"2004-06-15", score:77, scoreType:"critic", hltb:"40h", blurb:"Tactique de wanzers entre Europe et Venezuela, mechas et complots."},
        {slug:"tales-of-symphonia", title:"Tales of Symphonia (GC)", date:"2004-07-13", score:89, scoreType:"user", hltb:"45h", blurb:"RPG d'action au scénario généreux, épisode le plus aimé des Tales."},
        {slug:"star-ocean-till-the-end-of-time", title:"Star Ocean: Till the End of Time (PS2)", date:"2004-08-31", score:80, scoreType:"critic", hltb:"40h", blurb:"Science-fantasy aux combats en temps réel, avec un twist resté fameux."},
        {slug:"shadow-hearts-covenant", title:"Shadow Hearts: Covenant (PS2)", date:"2004-09-27", score:85, scoreType:"critic", hltb:"40h", blurb:"RPG gothique dans l'Europe de 1915, sommet de la série."},
        {slug:"paper-mario-the-thousand-year-door", title:"Paper Mario: The Thousand-Year Door (GC)", date:"2004-10-11", score:91, scoreType:"user", hltb:"35h", blurb:"RPG en papier à l'écriture hilarante, souvent cité comme le meilleur Paper Mario."},
        {slug:"shin-megami-tensei-nocturne", title:"Shin Megami Tensei: Nocturne (PS2)", date:"2004-10-12", score:90, scoreType:"user", hltb:"50h", blurb:"Tokyo détruit et renaissance du monde, le SMT le plus culte."},
        {slug:"baten-kaitos-eternal-wings", title:"Baten Kaitos: Eternal Wings and the Lost Ocean (GC)", date:"2004-11-16", score:80, scoreType:"critic", hltb:"55h", blurb:"RPG à cartes aux décors peints à la main, dans un monde d'îles célestes."},
        {slug:"digital-devil-saga", title:"Shin Megami Tensei: Digital Devil Saga (PS2)", date:"2005-04-05", score:84, scoreType:"critic", hltb:"30h", blurb:"Spin-off SMT au tour par tour où les héros dévorent leurs ennemis."},
        {slug:"radiata-stories", title:"Radiata Stories (PS2)", date:"2005-09-06", score:77, scoreType:"critic", hltb:"40h", blurb:"RPG léger aux 177 personnages recrutables et au choix déchirant."},
        {slug:"pokemon-xd-gale-of-darkness", title:"Pokémon XD: Gale of Darkness (GC)", date:"2005-10-03", score:80, scoreType:"user", hltb:"30h", blurb:"Suite de Colosseum autour d'un Lugia Obscur réputé impossible à purifier."},
        {slug:"digital-devil-saga-2", title:"Shin Megami Tensei: Digital Devil Saga 2 (PS2)", date:"2005-10-04", score:84, scoreType:"critic", hltb:"30h", blurb:"Conclusion du diptyque, du Junkyard vers le monde réel."},
        {slug:"fire-emblem-path-of-radiance", title:"Fire Emblem: Path of Radiance (GC)", date:"2005-10-17", score:90, scoreType:"user", hltb:"30h", blurb:"Premier Fire Emblem en 3D, début de l'histoire d'Ike et des mercenaires de Greil."},
        {slug:"suikoden-5", title:"Suikoden V (PS2)", date:"2006-03-21", score:78, scoreType:"critic", hltb:"45h", blurb:"Retour aux sources pour la saga des 108 étoiles du destin."},
        {slug:"kingdom-hearts-2", title:"Kingdom Hearts II (PS2)", date:"2006-03-28", score:89, scoreType:"user", hltb:"35h", blurb:"Sora revient dans une aventure plus ample au système de combat affiné."},
        {slug:"disgaea-2", title:"Disgaea 2: Cursed Memories (PS2)", date:"2006-08-29", score:84, scoreType:"critic", hltb:"45h", blurb:"Nouvelle plongée dans le Netherworld, toujours plus de niveaux absurdes."},
        {slug:"xenosaga-episode-3", title:"Xenosaga Episode III (PS2)", date:"2006-08-29", score:81, scoreType:"critic", hltb:"35h", blurb:"Conclusion resserrée et spectaculaire de la trilogie KOS-MOS."},
        {slug:"baten-kaitos-origins", title:"Baten Kaitos Origins (GC)", date:"2006-09-25", score:84, scoreType:"critic", hltb:"40h", blurb:"Préquelle au système de cartes affiné, jamais sortie en Europe."},
        {slug:"valkyrie-profile-2-silmeria", title:"Valkyrie Profile 2: Silmeria (PS2)", date:"2006-09-26", score:84, scoreType:"critic", hltb:"40h", blurb:"Silmeria et ses einherjar dans un système de combat d'orfèvre."},
        {slug:"tales-of-the-abyss", title:"Tales of the Abyss (PS2)", date:"2006-10-10", score:78, scoreType:"critic", hltb:"45h", blurb:"Luke apprend à exister au-delà de sa réplique, un Tales majeur."},
        {slug:"rogue-galaxy", title:"Rogue Galaxy (PS2)", date:"2007-01-30", score:82, scoreType:"critic", hltb:"45h", blurb:"Space opera d'action-RPG de Level-5, pirates et planètes exotiques."},
        {slug:"odin-sphere", title:"Odin Sphere (PS2)", date:"2007-05-22", score:83, scoreType:"critic", hltb:"25h", blurb:"Cinq destins croisés en 2D somptueuse signée Vanillaware."},
        {slug:"super-robot-taisen-original-generations", title:"Super Robot Taisen: Original Generations (PS2)", date:"2007-06-28", score:null, scoreType:"none", hltb:"60h", blurb:"Les deux épisodes GBA refaits en grand, sommet mecha resté au Japon."},
        {slug:"fire-emblem-radiant-dawn", title:"Fire Emblem: Radiant Dawn (Wii)", date:"2007-11-05", score:78, scoreType:"critic", hltb:"35h", blurb:"Suite directe de Path of Radiance, exigeante et riche en points de vue."},
        {slug:"soma-bringer", title:"Soma Bringer (DS)", date:"2008-02-28", score:null, scoreType:"none", hltb:"25h", blurb:"L'action-RPG de Monolith Soft resté au Japon, pensé pour le jeu à trois."},
        {slug:"the-world-ends-with-you", title:"The World Ends with You (DS)", date:"2008-04-22", score:90, scoreType:"user", hltb:"20h", blurb:"RPG d'action ultra-stylé dans Shibuya, combats sur les deux écrans."},
        {slug:"persona-3-fes", title:"Persona 3 FES (PS2)", date:"2008-04-22", score:90, scoreType:"user", hltb:"70h", blurb:"Lycée le jour, Tartare la nuit : le RPG qui a réinventé Persona."},
        {slug:"disgaea-3", title:"Disgaea 3: Absence of Justice (PS3)", date:"2008-08-26", score:79, scoreType:"critic", hltb:"45h", blurb:"L'académie des démons où sécher les cours est une vertu, grinding sans fin."},
        {slug:"eternal-sonata", title:"Eternal Sonata (PS3)", date:"2008-10-21", score:80, scoreType:"critic", hltb:"30h", blurb:"RPG musical rêvé par Chopin mourant, mélancolique et coloré."},
        {slug:"valkyria-chronicles", title:"Valkyria Chronicles (PS3)", date:"2008-11-04", score:89, scoreType:"user", hltb:"30h", blurb:"Tactique en aquarelle dans une Europe alternative en guerre."},
        {slug:"chrono-trigger", title:"Chrono Trigger (DS)", date:"2008-11-25", score:91, scoreType:"user", hltb:"23h", blurb:"Le voyage temporel légendaire de la SNES, enfin portable."},
        {slug:"persona-4", title:"Persona 4 (PS2)", date:"2008-12-09", score:92, scoreType:"user", hltb:"70h", blurb:"Enquête surnaturelle à Inaba, ultime grand RPG de la PlayStation 2."},
        {slug:"fire-emblem-shadow-dragon", title:"Fire Emblem: Shadow Dragon (DS)", date:"2009-02-16", score:81, scoreType:"critic", hltb:"20h", blurb:"Remake du tout premier Fire Emblem, avec Marth."},
        {slug:"suikoden-tierkreis", title:"Suikoden Tierkreis (DS)", date:"2009-03-17", score:78, scoreType:"critic", hltb:"30h", blurb:"Les 108 étoiles en poche, dans un multivers inédit."},
        {slug:"pokemon-platinum", title:"Pokémon Platine (DS)", date:"2009-03-22", score:88, scoreType:"user", hltb:"40h", blurb:"Version définitive de Sinnoh, avec le Monde Distorsion."},
        {slug:"knights-in-the-nightmare", title:"Knights in the Nightmare (DS)", date:"2009-06-02", score:80, scoreType:"critic", hltb:"25h", blurb:"Hybride de SRPG et de shoot'em up signé Sting, unique en son genre."},
        {slug:"muramasa-the-demon-blade", title:"Muramasa: The Demon Blade (Wii)", date:"2009-09-08", score:81, scoreType:"critic", hltb:"15h", blurb:"Sabres maudits et estampes animées, Vanillaware au sommet sur Wii."},
        {slug:"mario-and-luigi-bowsers-inside-story", title:"Mario & Luigi: Voyage au centre de Bowser (DS)", date:"2009-09-14", score:89, scoreType:"user", hltb:"25h", blurb:"Mario et Luigi explorent l'intérieur de Bowser, sommet de la série."},
        {slug:"demons-souls", title:"Demon's Souls (PS3)", date:"2009-10-06", score:92, scoreType:"user", hltb:"30h", blurb:"L'acte fondateur de From Software, Boletaria et ses âmes."},
        {slug:"pokemon-mystery-dungeon-explorers-of-sky", title:"Pokémon Donjon Mystère: Explorateurs du Ciel (DS)", date:"2009-10-12", score:86, scoreType:"user", hltb:"35h", blurb:"Version ultime d'Explorateurs, l'histoire Pokémon la plus émouvante."},
        {slug:"pokemon-heartgold-soulsilver", title:"Pokémon HeartGold / SoulSilver (DS)", date:"2010-03-14", score:90, scoreType:"user", hltb:"40h", blurb:"Remake de la deuxième génération, Johto et Kanto réunis."},
        {slug:"infinite-space", title:"Infinite Space (DS)", date:"2010-03-16", score:78, scoreType:"critic", hltb:"60h", blurb:"Space opera tentaculaire de PlatinumGames, flottes à composer et récit fleuve."},
        {slug:"resonance-of-fate", title:"Resonance of Fate (PS3)", date:"2010-03-16", score:80, scoreType:"user", hltb:"40h", blurb:"Ballet aérien d'armes à feu signé tri-Ace, culte et singulier."},
        {slug:"smt-strange-journey", title:"Shin Megami Tensei: Strange Journey (DS)", date:"2010-03-23", score:80, scoreType:"critic", hltb:"40h", blurb:"Expédition SMT pure et dure en Antarctique, sombre et fascinante."},
        {slug:"sakura-wars-so-long-my-love", title:"Sakura Wars: So Long, My Love (PS2)", date:"2010-03-30", score:78, scoreType:"critic", hltb:"25h", blurb:"Théâtre, mechas à vapeur et romance à New York, ultime éclat PS2."},
        {slug:"nier", title:"Nier (PS3)", date:"2010-04-27", score:88, scoreType:"user", hltb:"20h", blurb:"Récit déchirant et musiques inoubliables, culte malgré ses rugosités."},
        {slug:"lufia-curse-of-the-sinistrals", title:"Lufia: Curse of the Sinistrals (DS)", date:"2010-08-31", score:77, scoreType:"critic", hltb:"25h", blurb:"Remake en action-RPG du classique SNES, rythmé et généreux."},
        {slug:"rune-factory-3", title:"Rune Factory 3 (DS)", date:"2010-11-09", score:80, scoreType:"critic", hltb:"50h", blurb:"Donjons, ferme et romance : l'épisode DS le plus abouti de la série."},
        {slug:"golden-sun-dark-dawn", title:"Golden Sun: Dark Dawn (DS)", date:"2010-11-29", score:79, scoreType:"critic", hltb:"30h", blurb:"La saga Psynergie revient une génération plus tard."},
        {slug:"pokemon-black-white", title:"Pokémon Noir / Blanc (DS)", date:"2011-03-06", score:82, scoreType:"user", hltb:"32h", blurb:"Cinquième génération à Unys, avec uniquement de nouveaux Pokémon."},
        {slug:"smt-devil-survivor-overclocked", title:"Shin Megami Tensei: Devil Survivor Overclocked (3DS)", date:"2011-08-23", score:78, scoreType:"critic", hltb:"30h", blurb:"Tokyo bouclé pendant sept jours, version définitive avec huitième jour."},
        {slug:"disgaea-4", title:"Disgaea 4: A Promise Unforgotten (PS3)", date:"2011-09-06", score:80, scoreType:"critic", hltb:"45h", blurb:"Sardines, révolution et grinding infini dans le Netherworld en HD."},
        {slug:"solatorobo-red-the-hunter", title:"Solatorobo: Red the Hunter (DS)", date:"2011-09-27", score:77, scoreType:"critic", hltb:"15h", blurb:"Chasseur canin et mécha dans un archipel céleste, dix ans de fabrication."},
        {slug:"dark-souls", title:"Dark Souls (PS3)", date:"2011-10-04", score:90, scoreType:"user", hltb:"40h", blurb:"Lordran interconnecté et implacable, le RPG d'action qui a fait école."},
        {slug:"tales-of-graces-f", title:"Tales of Graces f (PS3)", date:"2012-03-13", score:77, scoreType:"critic", hltb:"40h", blurb:"Le système de combat le plus affûté de la série Tales."},
        {slug:"inazuma-eleven-2", title:"Inazuma Eleven 2 (DS)", date:"2012-05-18", score:79, scoreType:"critic", hltb:"35h", blurb:"RPG de football contre des envahisseurs, deux versions au choix."},
        {slug:"pokemon-conquest", title:"Pokémon Conquest (DS)", date:"2012-06-18", score:80, scoreType:"critic", hltb:"30h", blurb:"Pokémon rencontre Nobunaga's Ambition, crossover tactique inattendu."},
        {slug:"the-last-story", title:"The Last Story (Wii)", date:"2012-08-14", score:80, scoreType:"critic", hltb:"20h", blurb:"Le RPG crépusculaire de Sakaguchi sur Wii, intime et resserré."},
        {slug:"pokemon-black-2-white-2", title:"Pokémon Noir 2 / Blanc 2 (DS)", date:"2012-10-07", score:84, scoreType:"user", hltb:"35h", blurb:"Suites directes inédites, retour à Unys deux ans après."},
        {slug:"ni-no-kuni-wrath-of-the-white-witch", title:"Ni no Kuni: Wrath of the White Witch (PS3)", date:"2013-01-22", score:85, scoreType:"user", hltb:"45h", blurb:"Conte animé par le studio Ghibli, féérique et généreux."},
        {slug:"fire-emblem-awakening", title:"Fire Emblem: Awakening (3DS)", date:"2013-02-04", score:89, scoreType:"user", hltb:"25h", blurb:"L'épisode qui a sauvé la série, avec mariages et enfants entre unités."},
        {slug:"etrian-odyssey-4", title:"Etrian Odyssey IV: Legends of the Titan (3DS)", date:"2013-02-26", score:82, scoreType:"critic", hltb:"40h", blurb:"Dungeon-RPG où l'on dessine soi-même sa carte sur l'écran tactile."},
        {slug:"dragons-dogma-dark-arisen", title:"Dragon's Dogma: Dark Arisen (PS3)", date:"2013-04-23", score:87, scoreType:"critic", hltb:"45h", blurb:"Chasse aux chimères et système de pions, l'action-RPG culte de Capcom."},
        {slug:"shin-megami-tensei-4", title:"Shin Megami Tensei IV (3DS)", date:"2013-07-16", score:83, scoreType:"critic", hltb:"45h", blurb:"Apocalypse démoniaque entre royaume médiéval et Tokyo en ruines."},
        {slug:"tales-of-xillia", title:"Tales of Xillia (PS3)", date:"2013-08-06", score:78, scoreType:"critic", hltb:"40h", blurb:"Deux héros au choix pour l'épisode anniversaire des Tales."},
        {slug:"mario-and-luigi-dream-team", title:"Mario & Luigi: Dream Team (3DS)", date:"2013-08-11", score:81, scoreType:"critic", hltb:"30h", blurb:"Les frères plongent dans les rêves de Luigi, démultiplié à l'infini."},
        {slug:"inazuma-eleven-3", title:"Inazuma Eleven 3 (DS)", date:"2013-09-27", score:76, scoreType:"critic", hltb:"40h", blurb:"Coupe du monde et techniques surpuissantes, conclusion de la trilogie."},
        {slug:"rune-factory-4", title:"Rune Factory 4 (3DS)", date:"2013-10-01", score:78, scoreType:"critic", hltb:"55h", blurb:"Ferme, romance et donjons, le mariage parfait des genres."},
        {slug:"pokemon-x-y", title:"Pokémon X / Y (3DS)", date:"2013-10-12", score:84, scoreType:"user", hltb:"32h", blurb:"Le passage de Pokémon à la 3D, avec Kalos et les méga-évolutions."},
        {slug:"bravely-default", title:"Bravely Default (3DS)", date:"2014-02-07", score:84, scoreType:"user", hltb:"50h", blurb:"Le RPG old-school de Square Enix, avec son système Brave et Default."},
        {slug:"dark-souls-2", title:"Dark Souls II (PS3)", date:"2014-03-11", score:91, scoreType:"critic", hltb:"45h", blurb:"Drangleic et ses cycles de malédiction, suite plus vaste."},
        {slug:"fantasy-life", title:"Fantasy Life (3DS)", date:"2014-10-24", score:84, scoreType:"user", hltb:"40h", blurb:"RPG de vie de Level-5 où l'on enchaîne douze métiers avec bonheur."},
        {slug:"pokemon-omega-ruby-alpha-sapphire", title:"Pokémon Rubis Oméga / Saphir Alpha (3DS)", date:"2014-11-21", score:84, scoreType:"user", hltb:"30h", blurb:"Hoenn refait en 3D, avec l'envol libre à dos de Pokémon."},
        {slug:"persona-q-shadow-of-the-labyrinth", title:"Persona Q: Shadow of the Labyrinth (3DS)", date:"2014-11-25", score:80, scoreType:"critic", hltb:"60h", blurb:"Les castings de Persona 3 et 4 réunis dans un labyrinthe façon Etrian."},
        {slug:"smt-devil-survivor-2-record-breaker", title:"Shin Megami Tensei: Devil Survivor 2 Record Breaker (3DS)", date:"2015-05-05", score:81, scoreType:"critic", hltb:"40h", blurb:"Les Septentriones assiègent le Japon, version définitive avec épilogue complet."},
        {slug:"etrian-odyssey-2-untold", title:"Etrian Odyssey 2 Untold: The Fafnir Knight (3DS)", date:"2015-08-04", score:80, scoreType:"critic", hltb:"40h", blurb:"Le deuxième labyrinthe refait avec mode histoire, version définitive."},
        {slug:"stella-glow", title:"Stella Glow (3DS)", date:"2015-11-17", score:77, scoreType:"critic", hltb:"40h", blurb:"Tactical-RPG de sorcières chanteuses, chant du cygne d'Imageepoch."},
        {slug:"fire-emblem-fates", title:"Fire Emblem Fates (3DS)", date:"2016-02-19", score:82, scoreType:"user", hltb:"30h", blurb:"Deux familles, deux voies : Héritage accessible ou Conquête exigeante."},
        {slug:"bravely-second-end-layer", title:"Bravely Second: End Layer (3DS)", date:"2016-04-15", score:81, scoreType:"critic", hltb:"45h", blurb:"Suite directe de Bravely Default, système de jobs encore affiné."},
        {slug:"7th-dragon-3-code-vfd", title:"7th Dragon III Code: VFD (3DS)", date:"2016-07-12", score:76, scoreType:"critic", hltb:"30h", blurb:"Chasse aux dragons à travers les époques, seul épisode sorti en Occident."},
        {slug:"smt-4-apocalypse", title:"Shin Megami Tensei IV: Apocalypse (3DS)", date:"2016-09-20", score:84, scoreType:"critic", hltb:"40h", blurb:"Relecture de SMT IV du point de vue d'un chasseur ressuscité."},
        {slug:"yo-kai-watch-2", title:"Yo-kai Watch 2 (3DS)", date:"2016-09-30", score:80, scoreType:"critic", hltb:"40h", blurb:"Guerre d'esprits entre deux versions, l'épisode le plus complet de la série."},
        {slug:"persona-5", title:"Persona 5 (PS3)", date:"2017-04-04", score:92, scoreType:"user", hltb:"90h", blurb:"Les Voleurs Fantômes s'attaquent aux coeurs corrompus, style inégalé."},
        {slug:"fire-emblem-echoes-shadows-of-valentia", title:"Fire Emblem Echoes: Shadows of Valentia (3DS)", date:"2017-05-19", score:86, scoreType:"user", hltb:"30h", blurb:"Remake de Gaiden, doublé intégral et direction artistique superbe."},
        {slug:"ever-oasis", title:"Ever Oasis (3DS)", date:"2017-06-23", score:77, scoreType:"critic", hltb:"25h", blurb:"Bâtir une oasis et explorer le désert, ultime charme signé Grezzo."},
        {slug:"monster-hunter-stories", title:"Monster Hunter Stories (3DS)", date:"2017-09-08", score:81, scoreType:"critic", hltb:"35h", blurb:"Monster Hunter en RPG au tour par tour, monstres à élever."},
        {slug:"pokemon-ultra-sun-ultra-moon", title:"Pokémon Ultra-Soleil / Ultra-Lune (3DS)", date:"2017-11-17", score:84, scoreType:"critic", hltb:"35h", blurb:"Version définitive d'Alola, ultime épisode Pokémon de la 3DS."},
        {slug:"radiant-historia-perfect-chronology", title:"Radiant Historia: Perfect Chronology (3DS)", date:"2018-02-13", score:83, scoreType:"critic", hltb:"35h", blurb:"Le RPG temporel dans sa version définitive, troisième ligne d'histoire incluse."},
        {slug:"the-alliance-alive", title:"The Alliance Alive (3DS)", date:"2018-03-27", score:76, scoreType:"critic", hltb:"35h", blurb:"Hommage aux RPG SaGa, neuf héros sous un ciel confisqué."},
        {slug:"etrian-odyssey-nexus", title:"Etrian Odyssey Nexus (3DS)", date:"2019-02-05", score:81, scoreType:"critic", hltb:"60h", blurb:"Le grand best-of des labyrinthes, adieu de la série à la 3DS."},
        {slug:"persona-q2-new-cinema-labyrinth", title:"Persona Q2: New Cinema Labyrinth (3DS)", date:"2019-06-04", score:78, scoreType:"critic", hltb:"50h", blurb:"Les héros de Persona 3, 4 et 5 piégés dans un cinéma."}
      ]
    },

    /* Onglet "Sagas" : au lieu d'une liste plate, des séries. Chacune se lit
       dans l'ordre conseillé pour la découvrir (souvent la sortie, parfois un
       épisode plus accessible en porte d'entrée). Les sagas sont présentées de
       la moyenne critique la plus basse à la plus haute. */
    sagas: {
      key: "sagas",
      name: "Sagas",
      short: "SAGA",
      color: "#c9a227",
      theme: "assets/theme-sagas.css",
      page: "sagas.html",
      ready: true,
      series: [
        {
          slug: "star-ocean",
          name: "Star Ocean",
          note: "Le remake du deuxième épisode est de loin la meilleure porte d'entrée ; les épisodes sont indépendants, on peut donc piocher librement ensuite.",
          games: [
            {slug:"so-second-story-r", title:"Star Ocean: The Second Story R", date:"2023-11-02", score:87, scoreType:"critic", hltb:"40h", blurb:"Remake somptueux du deuxième épisode, deux héros et deux récits croisés."},
            {slug:"so-till-the-end-of-time", title:"Star Ocean: Till the End of Time", date:"2004-08-31", score:80, scoreType:"critic", hltb:"40h", blurb:"Science-fantasy aux combats en temps réel, avec un twist resté fameux."},
            {slug:"so-divine-force", title:"Star Ocean: The Divine Force", date:"2022-10-27", score:74, scoreType:"critic", hltb:"40h", blurb:"Retour aux sources spatial avec exploration aérienne et double protagoniste."},
            {slug:"so-first-departure-r", title:"Star Ocean: First Departure R", date:"2019-12-05", score:72, scoreType:"critic", hltb:"25h", blurb:"Le tout premier épisode remis au goût du jour, court et fondateur."},
            {slug:"so-last-hope", title:"Star Ocean: The Last Hope", date:"2010-02-09", score:72, scoreType:"critic", hltb:"50h", blurb:"Préquelle spatiale généreuse, système de combat rapide et technique."}
          ]
        },
        {
          slug: "sonic",
          name: "Sonic",
          note: "Commencer par Mania, qui condense tout ce que la série a de meilleur en 2D, avant d'attaquer les épisodes 3D dans l'ordre de leur qualité.",
          games: [
            {slug:"sonic-mania-saga", title:"Sonic Mania", date:"2017-08-15", score:86, scoreType:"critic", hltb:"6h", blurb:"La 2D Mega Drive ressuscitée par des fans devenus développeurs."},
            {slug:"sonic-adventure-2-saga", title:"Sonic Adventure 2", date:"2001-06-19", score:87, scoreType:"user", hltb:"11h", blurb:"Le sommet de l'ère Dreamcast, Chao Garden et double campagne."},
            {slug:"sonic-rush-saga", title:"Sonic Rush", date:"2005-11-15", score:82, scoreType:"critic", hltb:"4h", blurb:"Vitesse pure sur deux écrans, avec Blaze et la jauge de boost."},
            {slug:"sonic-advance-saga", title:"Sonic Advance", date:"2002-02-19", score:79, scoreType:"critic", hltb:"4h", blurb:"Le retour du hérisson en 2D par Dimps, level design réussi."},
            {slug:"sonic-colors-saga", title:"Sonic Colors", date:"2010-11-16", score:78, scoreType:"critic", hltb:"8h", blurb:"Wisps colorés et parc d'attractions spatial, l'un des 3D les plus aimés."},
            {slug:"sonic-generations-saga", title:"Sonic Generations", date:"2011-11-01", score:77, scoreType:"critic", hltb:"8h", blurb:"Vingt ans de Sonic revisités, chaque niveau en versions 2D et 3D."},
            {slug:"sonic-superstars-saga", title:"Sonic Superstars", date:"2023-10-17", score:73, scoreType:"critic", hltb:"8h", blurb:"Retour à la 2D en jouant sur les pouvoirs des Émeraudes."},
            {slug:"sonic-frontiers-saga", title:"Sonic Frontiers", date:"2022-11-08", score:71, scoreType:"critic", hltb:"25h", blurb:"Premier Sonic en monde ouvert, imparfait mais attachant."}
          ]
        },
        {
          slug: "etrian-odyssey",
          name: "Etrian Odyssey",
          note: "Les Untold ajoutent un mode histoire qui adoucit l'entrée dans la série ; les épisodes numérotés sont indépendants, Nexus fait office de best-of final.",
          games: [
            {slug:"eo-untold-1", title:"Etrian Odyssey Untold: The Millennium Girl", date:"2013-10-01", score:80, scoreType:"critic", hltb:"40h", blurb:"Le premier labyrinthe refait avec un mode histoire scénarisé."},
            {slug:"eo-untold-2", title:"Etrian Odyssey 2 Untold: The Fafnir Knight", date:"2015-08-04", score:80, scoreType:"critic", hltb:"40h", blurb:"Le deuxième labyrinthe refait, version définitive de l'épisode."},
            {slug:"eo-3", title:"Etrian Odyssey III: The Drowned City", date:"2010-09-21", score:79, scoreType:"critic", hltb:"60h", blurb:"Labyrinthe englouti et navigation maritime, souvent cité comme le meilleur."},
            {slug:"eo-4", title:"Etrian Odyssey IV: Legends of the Titan", date:"2013-02-26", score:82, scoreType:"critic", hltb:"40h", blurb:"Le plus accessible de la série, exploration en dirigeable."},
            {slug:"eo-5", title:"Etrian Odyssey V: Beyond the Myth", date:"2017-10-17", score:79, scoreType:"critic", hltb:"60h", blurb:"Retour à l'épure, personnalisation des classes très poussée."},
            {slug:"eo-nexus", title:"Etrian Odyssey Nexus", date:"2019-02-05", score:81, scoreType:"critic", hltb:"60h", blurb:"Le grand best-of des labyrinthes, adieu de la série à la 3DS."}
          ]
        },
        {
          slug: "mega-man",
          name: "Mega Man",
          note: "Les compilations rassemblent tout l'essentiel : classique d'abord, puis X, puis Zero et enfin Battle Network pour la branche RPG.",
          games: [
            {slug:"mm-legacy-collection", title:"Mega Man Legacy Collection", date:"2015-08-25", score:83, scoreType:"critic", hltb:"10h", blurb:"Les six premiers épisodes NES, socle de toute la série."},
            {slug:"mm-11", title:"Mega Man 11", date:"2018-10-02", score:80, scoreType:"critic", hltb:"8h", blurb:"Retour moderne réussi, avec le système de double engrenage."},
            {slug:"mm-x-legacy-collection", title:"Mega Man X Legacy Collection", date:"2018-07-24", score:78, scoreType:"critic", hltb:"15h", blurb:"La branche X, plus nerveuse et plus sombre, réunie en un disque."},
            {slug:"mm-zero-zx-collection", title:"Mega Man Zero/ZX Legacy Collection", date:"2020-02-25", score:80, scoreType:"critic", hltb:"20h", blurb:"Les six épisodes portables exigeants, avec modes d'aide bienvenus."},
            {slug:"mm-zero-2-saga", title:"Mega Man Zero 2", date:"2003-10-28", score:80, scoreType:"critic", hltb:"5h", blurb:"Sommet de la branche Zero, action affûtée et formes élémentaires."},
            {slug:"mm-battle-network-collection", title:"Mega Man Battle Network Legacy Collection", date:"2023-04-14", score:80, scoreType:"critic", hltb:"60h", blurb:"Les dix RPG tactiques en réseau, avec le troisième en sommet."}
          ]
        },
        {
          slug: "disgaea",
          name: "Disgaea",
          note: "Le premier reste le meilleur écrit ; les suivants gonflent les systèmes. Le 5 est le plus confortable si l'on veut commencer par du moderne.",
          games: [
            {slug:"disgaea-1-saga", title:"Disgaea: Hour of Darkness", date:"2003-08-27", score:89, scoreType:"user", hltb:"45h", blurb:"Laharl réclame son trône : humour démoniaque et niveaux 9999."},
            {slug:"disgaea-2-saga", title:"Disgaea 2: Cursed Memories", date:"2006-08-29", score:84, scoreType:"critic", hltb:"45h", blurb:"Nouvelle plongée dans le Netherworld, systèmes affinés."},
            {slug:"disgaea-5-saga", title:"Disgaea 5: Alliance of Vengeance", date:"2015-10-06", score:82, scoreType:"critic", hltb:"60h", blurb:"L'épisode le plus généreux et le plus lisible de la série."},
            {slug:"disgaea-4-saga", title:"Disgaea 4: A Promise Unforgotten", date:"2011-09-06", score:80, scoreType:"critic", hltb:"45h", blurb:"Sardines, révolution et grinding infini, premier épisode en HD."},
            {slug:"disgaea-3-saga", title:"Disgaea 3: Absence of Justice", date:"2008-08-26", score:79, scoreType:"critic", hltb:"45h", blurb:"L'académie des démons où sécher les cours est une vertu."}
          ]
        },
        {
          slug: "tales-of",
          name: "Tales of",
          note: "Chaque épisode est autonome. Symphonia et Arise sont les deux meilleures portes d'entrée selon que l'on préfère le charme d'époque ou le confort moderne.",
          games: [
            {slug:"tales-symphonia-saga", title:"Tales of Symphonia", date:"2004-07-13", score:89, scoreType:"user", hltb:"45h", blurb:"Le plus aimé de la série, récit généreux et compagnons marquants."},
            {slug:"tales-arise-saga", title:"Tales of Arise", date:"2021-09-10", score:87, scoreType:"critic", hltb:"45h", blurb:"Renaissance moderne de la saga, combats spectaculaires et lisibles."},
            {slug:"tales-vesperia-saga", title:"Tales of Vesperia: Definitive Edition", date:"2019-01-11", score:82, scoreType:"critic", hltb:"45h", blurb:"Yuri, justicier hors-la-loi, le héros le plus adulte de la série."},
            {slug:"tales-abyss-saga", title:"Tales of the Abyss", date:"2006-10-10", score:78, scoreType:"critic", hltb:"45h", blurb:"Luke apprend à exister au-delà de sa réplique, récit dense."},
            {slug:"tales-xillia-saga", title:"Tales of Xillia", date:"2013-08-06", score:78, scoreType:"critic", hltb:"40h", blurb:"Deux héros au choix pour l'épisode anniversaire des Tales."},
            {slug:"tales-berseria-saga", title:"Tales of Berseria", date:"2017-01-24", score:77, scoreType:"critic", hltb:"45h", blurb:"Velvet, héroïne mue par la vengeance, la plus sombre de la saga."},
            {slug:"tales-graces-saga", title:"Tales of Graces f", date:"2012-03-13", score:77, scoreType:"critic", hltb:"40h", blurb:"Le système de combat le plus affûté de toute la série."}
          ]
        },
        {
          slug: "suikoden",
          name: "Suikoden",
          note: "Le remaster des deux premiers est la porte d'entrée évidente ; le II est considéré comme l'un des plus grands JRPG jamais écrits.",
          games: [
            {slug:"suikoden-1-2-hd", title:"Suikoden I & II HD Remaster", date:"2025-03-06", score:85, scoreType:"critic", hltb:"50h", blurb:"Les deux fondateurs restaurés, dont le II et son antagoniste légendaire."},
            {slug:"suikoden-3-saga", title:"Suikoden III", date:"2002-10-24", score:81, scoreType:"critic", hltb:"35h", blurb:"Trois points de vue croisés sur une même guerre."},
            {slug:"suikoden-5-saga", title:"Suikoden V", date:"2006-03-21", score:78, scoreType:"critic", hltb:"45h", blurb:"Retour aux sources politiques, le meilleur depuis le II."},
            {slug:"suikoden-tierkreis-saga", title:"Suikoden Tierkreis", date:"2009-03-17", score:78, scoreType:"critic", hltb:"30h", blurb:"Les 108 étoiles en poche, dans un multivers indépendant."}
          ]
        },
        {
          slug: "ys",
          name: "Ys",
          note: "Chaque épisode est indépendant. Oath in Felghana pour l'action pure, ou VIII directement pour le meilleur équilibre récit et exploration.",
          games: [
            {slug:"ys-oath-felghana", title:"Ys: The Oath in Felghana", date:"2010-03-19", score:85, scoreType:"critic", hltb:"12h", blurb:"Action-RPG d'une nervosité rare, bande-son rock légendaire."},
            {slug:"ys-8-lacrimosa", title:"Ys VIII: Lacrimosa of Dana", date:"2017-09-12", score:85, scoreType:"critic", hltb:"40h", blurb:"Naufrage sur une île mystérieuse, sommet moderne de la série."},
            {slug:"ys-origin", title:"Ys Origin", date:"2012-05-31", score:82, scoreType:"critic", hltb:"15h", blurb:"Préquelle dans la Tour de Darm, trois personnages jouables."},
            {slug:"ys-x-nordics", title:"Ys X: Nordics", date:"2024-10-25", score:82, scoreType:"critic", hltb:"40h", blurb:"Adol en mer du Nord, navigation et combat en duo."},
            {slug:"ys-seven", title:"Ys Seven", date:"2010-08-17", score:80, scoreType:"critic", hltb:"30h", blurb:"Passage au groupe de trois personnages, tournant de la série."},
            {slug:"ys-9-monstrum-nox", title:"Ys IX: Monstrum Nox", date:"2021-02-02", score:80, scoreType:"critic", hltb:"40h", blurb:"Ville-prison et pouvoirs surnaturels, exploration verticale."}
          ]
        },
        {
          slug: "kirby",
          name: "Kirby",
          note: "Super Star Ultra condense la formule classique, Le Monde Oublié réussit le passage à la 3D. Les épisodes sont tous indépendants.",
          games: [
            {slug:"kirby-super-star-ultra-saga", title:"Kirby Super Star Ultra", date:"2008-09-22", score:89, scoreType:"user", hltb:"8h", blurb:"Compilation de mini-aventures, le Kirby 2D le plus complet."},
            {slug:"kirby-planet-robobot-saga", title:"Kirby: Planet Robobot", date:"2016-06-10", score:87, scoreType:"user", hltb:"7h", blurb:"Kirby pilote une armure mécha, sommet de l'ère portable."},
            {slug:"kirby-forgotten-land", title:"Kirby et le Monde Oublié", date:"2022-03-25", score:85, scoreType:"critic", hltb:"12h", blurb:"Premier vrai Kirby en 3D, transformations Bouffe-tout inoubliables."},
            {slug:"kirby-triple-deluxe-saga", title:"Kirby: Triple Deluxe", date:"2014-05-02", score:80, scoreType:"critic", hltb:"6h", blurb:"Kirby joue sur la profondeur des deux plans grâce à la 3D."},
            {slug:"kirby-return-dream-land-dx", title:"Kirby's Return to Dream Land Deluxe", date:"2023-02-24", score:79, scoreType:"critic", hltb:"10h", blurb:"Coopération à quatre et retour aux fondamentaux, version enrichie."},
            {slug:"kirby-nightmare-dream-land-saga", title:"Kirby: Nightmare in Dream Land", date:"2002-12-16", score:79, scoreType:"critic", hltb:"5h", blurb:"Remake du tout premier Kirby, doux et accessible."}
          ]
        },
        {
          slug: "professor-layton",
          name: "Professeur Layton",
          note: "La première trilogie forme un tout et se termine sur le meilleur épisode ; la seconde trilogie est une préquelle à faire ensuite.",
          games: [
            {slug:"layton-1-saga", title:"Professeur Layton et l'Étrange Village", date:"2008-02-10", score:88, scoreType:"user", hltb:"12h", blurb:"Énigmes élégantes et village mystérieux, naissance d'une série culte."},
            {slug:"layton-2-saga", title:"Professeur Layton et la Boîte de Pandore", date:"2009-08-24", score:84, scoreType:"critic", hltb:"13h", blurb:"Deuxième enquête, à bord du Molentary Express."},
            {slug:"layton-3-saga", title:"Professeur Layton et le Destin Perdu", date:"2010-09-12", score:89, scoreType:"user", hltb:"12h", blurb:"Le voyage dans le temps le plus émouvant du professeur."},
            {slug:"layton-4-saga", title:"Professeur Layton et l'Appel du Spectre", date:"2011-10-17", score:78, scoreType:"critic", hltb:"15h", blurb:"Première enquête aux côtés de Luke, début de la préquelle."},
            {slug:"layton-5-saga", title:"Professeur Layton et le Masque des Miracles", date:"2012-10-28", score:81, scoreType:"critic", hltb:"15h", blurb:"Entre cirque et cité du désert, passage réussi à la 3D."},
            {slug:"layton-6-saga", title:"Professeur Layton et le Legs des Aslantes", date:"2013-10-25", score:78, scoreType:"critic", hltb:"15h", blurb:"Conclusion des six épisodes, tour du monde et révélations."}
          ]
        },
        {
          slug: "kingdom-hearts",
          name: "Kingdom Hearts",
          note: "Suivre l'ordre de sortie fonctionne, à condition de ne pas sauter Chain of Memories : il fait le pont narratif entre les deux premiers épisodes.",
          games: [
            {slug:"kh-1-saga", title:"Kingdom Hearts", date:"2002-09-16", score:88, scoreType:"user", hltb:"30h", blurb:"La rencontre improbable de Disney et Square, devenue légendaire."},
            {slug:"kh-com-saga", title:"Kingdom Hearts: Chain of Memories", date:"2003-12-07", score:82, scoreType:"critic", hltb:"13h", blurb:"Système de cartes déroutant, mais pont narratif indispensable."},
            {slug:"kh-2-saga", title:"Kingdom Hearts II Final Mix", date:"2006-03-28", score:89, scoreType:"user", hltb:"35h", blurb:"Combat au sommet et mise en scène ample, préféré des fans."},
            {slug:"kh-bbs-saga", title:"Kingdom Hearts: Birth by Sleep", date:"2010-09-07", score:84, scoreType:"critic", hltb:"30h", blurb:"Préquelle à trois héros qui éclaire toute la mythologie."},
            {slug:"kh-ddd-saga", title:"Kingdom Hearts 3D: Dream Drop Distance", date:"2012-07-31", score:75, scoreType:"critic", hltb:"17h", blurb:"Sora et Riku dans les mondes endormis, étape clé de l'intrigue."},
            {slug:"kh-3-saga", title:"Kingdom Hearts III", date:"2019-01-29", score:83, scoreType:"critic", hltb:"30h", blurb:"Conclusion spectaculaire de la saga de la Xehanort."}
          ]
        },
        {
          slug: "ace-attorney",
          name: "Ace Attorney",
          note: "La trilogie originale d'abord, elle se conclut magistralement. Great Ace Attorney est une préquelle victorienne indépendante, à faire quand on veut.",
          games: [
            {slug:"aa-trilogy", title:"Phoenix Wright: Ace Attorney Trilogy", date:"2019-04-09", score:87, scoreType:"critic", hltb:"45h", blurb:"Les trois premiers procès réunis, sommet du genre."},
            {slug:"aa-great-chronicles", title:"The Great Ace Attorney Chronicles", date:"2021-07-27", score:87, scoreType:"critic", hltb:"50h", blurb:"Londres victorien, Sholmès en renfort, la meilleure écriture de la série."},
            {slug:"aa-apollo-trilogy", title:"Apollo Justice: Ace Attorney Trilogy", date:"2024-01-25", score:82, scoreType:"critic", hltb:"50h", blurb:"La seconde génération d'avocats, des trois derniers épisodes canoniques."},
            {slug:"aa-layton-vs", title:"Professeur Layton vs. Phoenix Wright", date:"2014-08-29", score:78, scoreType:"critic", hltb:"25h", blurb:"Crossover en terre de sorcellerie, procès et énigmes mêlés."}
          ]
        },
        {
          slug: "trails",
          name: "Trails / Legend of Heroes",
          note: "La seule saga de cette liste à suivre impérativement dans l'ordre : c'est un récit unique de vingt ans, chaque arc reprenant les personnages du précédent.",
          games: [
            {slug:"trails-sky-fc", title:"Trails in the Sky FC", date:"2011-03-29", score:84, scoreType:"critic", hltb:"45h", blurb:"Estelle et Joshua parcourent Liberl, point de départ obligatoire."},
            {slug:"trails-sky-sc", title:"Trails in the Sky SC", date:"2015-10-29", score:86, scoreType:"critic", hltb:"60h", blurb:"Suite directe qui paie tout ce que le premier avait installé."},
            {slug:"trails-zero", title:"Trails from Zero", date:"2022-09-27", score:84, scoreType:"critic", hltb:"45h", blurb:"Nouvel arc à Crossbell, enquêtes policières et ville tentaculaire."},
            {slug:"trails-cold-steel-1", title:"Trails of Cold Steel", date:"2015-12-22", score:82, scoreType:"critic", hltb:"60h", blurb:"Académie militaire d'Erebonia, classe VII et tensions de classe."},
            {slug:"trails-cold-steel-2", title:"Trails of Cold Steel II", date:"2016-09-06", score:84, scoreType:"critic", hltb:"70h", blurb:"Guerre civile, suite immédiate du premier Cold Steel."},
            {slug:"trails-cold-steel-3", title:"Trails of Cold Steel III", date:"2019-10-22", score:85, scoreType:"critic", hltb:"70h", blurb:"Convergence de tous les arcs précédents, sommet de la saga."},
            {slug:"trails-daybreak", title:"Trails through Daybreak", date:"2024-07-05", score:82, scoreType:"critic", hltb:"60h", blurb:"Nouvel arc à Calvard, entrée moderne dans l'univers."}
          ]
        },
        {
          slug: "pokemon",
          name: "Pokémon",
          note: "Les générations sont indépendantes : commencer par la version définitive d'une génération plutôt que par ses éditions initiales.",
          games: [
            {slug:"pkmn-hgss-saga", title:"Pokémon HeartGold / SoulSilver", date:"2010-03-14", score:90, scoreType:"user", hltb:"40h", blurb:"Johto et Kanto réunis, souvent considéré comme le sommet de la série."},
            {slug:"pkmn-emerald-saga", title:"Pokémon Émeraude", date:"2005-04-30", score:88, scoreType:"user", hltb:"24h", blurb:"Version définitive de Hoenn, contenu post-jeu étoffé."},
            {slug:"pkmn-platinum-saga", title:"Pokémon Platine", date:"2009-03-22", score:88, scoreType:"user", hltb:"40h", blurb:"Version définitive de Sinnoh, avec le Monde Distorsion."},
            {slug:"pkmn-b2w2-saga", title:"Pokémon Noir 2 / Blanc 2", date:"2012-10-07", score:84, scoreType:"user", hltb:"35h", blurb:"Les seules vraies suites de la série, scénario le plus travaillé."},
            {slug:"pkmn-oras-saga", title:"Pokémon Rubis Oméga / Saphir Alpha", date:"2014-11-21", score:84, scoreType:"user", hltb:"30h", blurb:"Hoenn refait en 3D, avec l'envol libre à dos de Pokémon."},
            {slug:"pkmn-legends-arceus", title:"Pokémon Légendes: Arceus", date:"2022-01-28", score:83, scoreType:"critic", hltb:"40h", blurb:"La formule enfin bousculée : capture en temps réel et zones ouvertes."}
          ]
        },
        {
          slug: "shin-megami-tensei",
          name: "Shin Megami Tensei",
          note: "Nocturne pose le ton de la série ; V est la version moderne la plus accessible. Les Digital Devil Saga forment un diptyque à part, à faire d'affilée.",
          games: [
            {slug:"smt-nocturne-saga", title:"Shin Megami Tensei III: Nocturne", date:"2004-10-12", score:90, scoreType:"user", hltb:"50h", blurb:"Tokyo détruit et renaissance du monde, l'épisode le plus culte."},
            {slug:"smt-5-vengeance", title:"Shin Megami Tensei V: Vengeance", date:"2024-06-14", score:88, scoreType:"critic", hltb:"60h", blurb:"Version définitive du cinquième, avec un second scénario complet."},
            {slug:"smt-dds-saga", title:"Shin Megami Tensei: Digital Devil Saga", date:"2005-04-05", score:84, scoreType:"critic", hltb:"30h", blurb:"Diptyque où les héros dévorent leurs ennemis pour survivre."},
            {slug:"smt-4-saga", title:"Shin Megami Tensei IV", date:"2013-07-16", score:83, scoreType:"critic", hltb:"45h", blurb:"Apocalypse démoniaque entre royaume médiéval et Tokyo en ruines."},
            {slug:"smt-strange-journey-redux", title:"Shin Megami Tensei: Strange Journey Redux", date:"2018-05-15", score:78, scoreType:"critic", hltb:"40h", blurb:"Expédition antarctique austère, version enrichie d'une fin inédite."},
            {slug:"smt-devil-survivor-saga", title:"Shin Megami Tensei: Devil Survivor Overclocked", date:"2011-08-23", score:78, scoreType:"critic", hltb:"30h", blurb:"Tokyo bouclé sept jours, la branche tactique de la série."}
          ]
        },
        {
          slug: "yakuza",
          name: "Yakuza / Like a Dragon",
          note: "Yakuza 0 est une préquelle et la meilleure entrée possible ; ensuite les Kiwami reprennent les deux premiers épisodes, puis on suit l'ordre numérique.",
          games: [
            {slug:"yakuza-0-saga", title:"Yakuza 0", date:"2017-01-24", score:85, scoreType:"critic", hltb:"40h", blurb:"Osaka et Tokyo des années 80, préquelle et porte d'entrée idéale."},
            {slug:"yakuza-kiwami-saga", title:"Yakuza Kiwami", date:"2017-08-29", score:80, scoreType:"critic", hltb:"25h", blurb:"Remake du premier épisode, Kiryu sort de prison."},
            {slug:"yakuza-kiwami-2-saga", title:"Yakuza Kiwami 2", date:"2018-08-28", score:84, scoreType:"critic", hltb:"30h", blurb:"Remake du deuxième, souvent cité comme le meilleur scénario."},
            {slug:"yakuza-5-saga", title:"Yakuza 5", date:"2015-12-08", score:83, scoreType:"critic", hltb:"50h", blurb:"Cinq villes et cinq protagonistes, l'épisode le plus vaste de l'ère Kiryu."},
            {slug:"yakuza-6-saga", title:"Yakuza 6: The Song of Life", date:"2018-04-17", score:82, scoreType:"critic", hltb:"30h", blurb:"Conclusion de l'histoire de Kiryu, plus intime et resserrée."},
            {slug:"lad-7-saga", title:"Like a Dragon: Yakuza", date:"2020-11-10", score:84, scoreType:"critic", hltb:"45h", blurb:"Ichiban prend la relève et la série bascule en RPG au tour par tour."},
            {slug:"lad-gaiden-saga", title:"Like a Dragon Gaiden", date:"2023-11-09", score:82, scoreType:"critic", hltb:"20h", blurb:"Interlude compact sur Kiryu, indispensable avant Infinite Wealth."},
            {slug:"lad-infinite-wealth", title:"Like a Dragon: Infinite Wealth", date:"2024-01-26", score:89, scoreType:"critic", hltb:"60h", blurb:"Hawaï et Japon réunis, sommet de la nouvelle formule RPG."}
          ]
        },
        {
          slug: "mario-rpg",
          name: "Mario RPG",
          note: "Trois branches indépendantes : Super Mario RPG à l'origine, les Paper Mario et les Mario & Luigi. On peut piocher dans n'importe quel ordre.",
          games: [
            {slug:"smrpg-saga", title:"Super Mario RPG", date:"2023-11-17", score:81, scoreType:"critic", hltb:"15h", blurb:"Remake du fondateur signé Square, à l'origine de toutes les branches."},
            {slug:"paper-mario-1-saga", title:"Paper Mario", date:"2001-02-05", score:93, scoreType:"critic", hltb:"25h", blurb:"Premier Paper Mario, l'écriture et le système de badges naissent ici."},
            {slug:"paper-mario-ttyd-saga", title:"Paper Mario: La Porte Millénaire", date:"2004-10-11", score:91, scoreType:"user", hltb:"35h", blurb:"Sommet incontesté de la branche papier, écriture hilarante."},
            {slug:"ml-superstar-saga-saga", title:"Mario & Luigi: Superstar Saga", date:"2003-11-17", score:86, scoreType:"user", hltb:"15h", blurb:"Naissance du duo, combos et timing au cœur des combats."},
            {slug:"ml-bowsers-inside-story-saga", title:"Mario & Luigi: Voyage au centre de Bowser", date:"2009-09-14", score:89, scoreType:"user", hltb:"25h", blurb:"Bowser jouable et son intérieur explorable, sommet de la branche."},
            {slug:"paper-mario-origami-king", title:"Paper Mario: The Origami King", date:"2020-07-17", score:80, scoreType:"critic", hltb:"30h", blurb:"Aventure moderne au ton juste, malgré des combats clivants."},
            {slug:"ml-brothership", title:"Mario & Luigi: L'Épopée fraternelle", date:"2024-11-07", score:76, scoreType:"critic", hltb:"30h", blurb:"Retour du duo après dix ans, archipel à reconnecter."}
          ]
        },
        {
          slug: "dragon-quest",
          name: "Dragon Quest",
          note: "Épisodes indépendants. Le XI est la meilleure porte d'entrée moderne, le V le récit le plus aimé, le III le classique fondateur.",
          games: [
            {slug:"dq-11-s", title:"Dragon Quest XI S", date:"2019-09-27", score:91, scoreType:"critic", hltb:"80h", blurb:"Aboutissement de la formule, version S enrichie d'un mode 16 bits."},
            {slug:"dq-5-saga", title:"Dragon Quest V: La Fiancée Céleste", date:"2009-02-17", score:89, scoreType:"user", hltb:"30h", blurb:"Une vie entière racontée, du berceau à la paternité."},
            {slug:"dq-8-saga", title:"Dragon Quest VIII: L'Odyssée du Roi Maudit", date:"2005-11-15", score:91, scoreType:"user", hltb:"60h", blurb:"Le premier en 3D cel-shading, grandiose et généreux."},
            {slug:"dq-3-hd2d", title:"Dragon Quest III HD-2D Remake", date:"2024-11-14", score:84, scoreType:"critic", hltb:"40h", blurb:"Le classique fondateur en pixel art sublimé, jobs à composer."},
            {slug:"dq-9-saga", title:"Dragon Quest IX: Les Sentinelles du Firmament", date:"2010-07-11", score:85, scoreType:"user", hltb:"40h", blurb:"Pensé pour le jeu en groupe, contenu post-scénario immense."},
            {slug:"dq-4-saga", title:"Dragon Quest IV: L'Épopée des Élus", date:"2008-09-16", score:80, scoreType:"critic", hltb:"30h", blurb:"Récit en chapitres, un par héros, avant leur réunion."}
          ]
        },
        {
          slug: "xeno",
          name: "Xeno",
          note: "Trois sous-séries sans lien scénaristique direct mais aux thèmes communs. Xenoblade est la branche la plus accessible pour commencer.",
          games: [
            {slug:"xenoblade-1-de", title:"Xenoblade Chronicles: Definitive Edition", date:"2020-05-29", score:89, scoreType:"critic", hltb:"60h", blurb:"Monde ouvert porté par deux titans, la meilleure entrée dans l'univers."},
            {slug:"xenoblade-2-saga", title:"Xenoblade Chronicles 2", date:"2017-12-01", score:83, scoreType:"critic", hltb:"70h", blurb:"Nuages, Lames et système de combat touffu, récit très attachant."},
            {slug:"xenoblade-3-saga", title:"Xenoblade Chronicles 3", date:"2022-07-29", score:89, scoreType:"critic", hltb:"70h", blurb:"Synthèse des deux précédents, sommet narratif de Monolith Soft."},
            {slug:"xenogears-saga", title:"Xenogears", date:"1998-10-20", score:84, scoreType:"critic", hltb:"60h", blurb:"L'œuvre fondatrice de Takahashi, ambitieuse et inachevée."},
            {slug:"xenosaga-1-saga", title:"Xenosaga Episode I", date:"2003-02-25", score:83, scoreType:"critic", hltb:"40h", blurb:"Space opera philosophique très narratif, début de la trilogie."},
            {slug:"xenosaga-3-saga", title:"Xenosaga Episode III", date:"2006-08-29", score:81, scoreType:"critic", hltb:"35h", blurb:"Conclusion resserrée et spectaculaire de la trilogie KOS-MOS."}
          ]
        },
        {
          slug: "advance-wars",
          name: "Advance Wars",
          note: "Dual Strike est le plus riche, Days of Ruin le plus adulte. Le Re-Boot Camp permet de découvrir les deux premiers sur matériel moderne.",
          games: [
            {slug:"aw-1-saga", title:"Advance Wars", date:"2001-09-09", score:86, scoreType:"user", hltb:"14h", blurb:"Stratégie tour par tour limpide, qui a lancé toute une série."},
            {slug:"aw-2-saga", title:"Advance Wars 2: Black Hole Rising", date:"2003-06-23", score:88, scoreType:"critic", hltb:"15h", blurb:"Suite mieux équilibrée, avec une nouvelle campagne solo."},
            {slug:"aw-dual-strike-saga", title:"Advance Wars: Dual Strike", date:"2005-08-22", score:88, scoreType:"user", hltb:"25h", blurb:"Deux écrans, duos de généraux : l'épisode le plus généreux."},
            {slug:"aw-days-of-ruin-saga", title:"Advance Wars: Days of Ruin", date:"2008-01-21", score:86, scoreType:"critic", hltb:"25h", blurb:"Virage post-apocalyptique, plus sombre et rééquilibré."},
            {slug:"aw-reboot-camp", title:"Advance Wars 1+2: Re-Boot Camp", date:"2023-04-21", score:75, scoreType:"critic", hltb:"30h", blurb:"Remake des deux premiers, fidèle mais sans surprise."}
          ]
        },
        {
          slug: "monster-hunter",
          name: "Monster Hunter",
          note: "World a modernisé la série et reste la meilleure entrée ; Rise est plus rapide et portable. Les épisodes portables classiques sont à réserver aux convaincus.",
          games: [
            {slug:"mh-world-saga", title:"Monster Hunter: World", date:"2018-01-26", score:90, scoreType:"critic", hltb:"50h", blurb:"La chasse enfin fluide et lisible, entrée idéale dans la série."},
            {slug:"mh-wilds-saga", title:"Monster Hunter Wilds", date:"2025-02-28", score:88, scoreType:"critic", hltb:"50h", blurb:"Écosystèmes vivants et météo changeante, dernier grand épisode."},
            {slug:"mh-4u-saga", title:"Monster Hunter 4 Ultimate", date:"2015-02-13", score:88, scoreType:"user", hltb:"60h", blurb:"La verticalité et la monte, sommet de l'ère portable."},
            {slug:"mh-rise-saga", title:"Monster Hunter Rise", date:"2021-03-26", score:87, scoreType:"critic", hltb:"40h", blurb:"Filoptère et chasse aérienne, le plus nerveux de la série."},
            {slug:"mh-gu-saga", title:"Monster Hunter Generations Ultimate", date:"2018-08-28", score:84, scoreType:"critic", hltb:"60h", blurb:"Épisode anniversaire aux styles de chasse libres."},
            {slug:"mh-stories-2-saga", title:"Monster Hunter Stories 2", date:"2021-07-09", score:79, scoreType:"critic", hltb:"50h", blurb:"La branche RPG au tour par tour, monstres à élever."}
          ]
        },
        {
          slug: "castlevania",
          name: "Castlevania",
          note: "Symphony of the Night invente le genre et reste la porte d'entrée ; les trois épisodes GBA/DS de Iga en sont les héritiers directs.",
          games: [
            {slug:"cv-sotn-saga", title:"Castlevania: Symphony of the Night", date:"1997-10-02", score:93, scoreType:"critic", hltb:"12h", blurb:"Le jeu qui a donné son nom au genre metroidvania."},
            {slug:"cv-aria-saga", title:"Castlevania: Aria of Sorrow", date:"2003-05-06", score:89, scoreType:"user", hltb:"8h", blurb:"Système d'âmes profond, sommet de la trilogie GBA."},
            {slug:"cv-dawn-saga", title:"Castlevania: Dawn of Sorrow", date:"2005-10-04", score:88, scoreType:"user", hltb:"9h", blurb:"Suite directe d'Aria, référence de la DS."},
            {slug:"cv-portrait-saga", title:"Castlevania: Portrait of Ruin", date:"2006-12-05", score:87, scoreType:"user", hltb:"9h", blurb:"Duo jouable explorant des tableaux maudits."},
            {slug:"cv-ecclesia-saga", title:"Castlevania: Order of Ecclesia", date:"2008-10-21", score:87, scoreType:"user", hltb:"10h", blurb:"Le plus exigeant des DS, Shanoa et son système de glyphes."},
            {slug:"cv-lords-shadow-saga", title:"Castlevania: Lords of Shadow", date:"2010-10-05", score:85, scoreType:"critic", hltb:"20h", blurb:"Relecture occidentale en action 3D, ambitieuse et spectaculaire."},
            {slug:"cv-circle-moon-saga", title:"Castlevania: Circle of the Moon", date:"2001-06-11", score:84, scoreType:"critic", hltb:"8h", blurb:"Premier metroidvania portable, sombre et exigeant."},
            {slug:"cv-rondo-saga", title:"Castlevania: Rondo of Blood", date:"2007-10-23", score:80, scoreType:"critic", hltb:"6h", blurb:"Le classique PC Engine, préquelle directe de Symphony of the Night."}
          ]
        },
        {
          slug: "fire-emblem",
          name: "Fire Emblem",
          note: "Awakening et Three Houses sont les deux entrées modernes ; Path of Radiance et son suite forment le sommet de l'ère classique.",
          games: [
            {slug:"fe-awakening-saga", title:"Fire Emblem: Awakening", date:"2013-02-04", score:89, scoreType:"user", hltb:"25h", blurb:"L'épisode qui a sauvé la série, mariages et enfants entre unités."},
            {slug:"fe-three-houses-saga", title:"Fire Emblem: Three Houses", date:"2019-07-26", score:89, scoreType:"critic", hltb:"50h", blurb:"Académie et guerre civile, quatre routes radicalement différentes."},
            {slug:"fe-por-saga", title:"Fire Emblem: Path of Radiance", date:"2005-10-17", score:90, scoreType:"user", hltb:"30h", blurb:"Premier épisode en 3D, Ike et les mercenaires de Greil."},
            {slug:"fe-7-saga", title:"Fire Emblem (Blazing Blade)", date:"2003-11-03", score:89, scoreType:"user", hltb:"25h", blurb:"Premier épisode occidental, tactique et permadeath."},
            {slug:"fe-sacred-stones-saga", title:"Fire Emblem: The Sacred Stones", date:"2005-05-23", score:87, scoreType:"user", hltb:"20h", blurb:"Jumeaux royaux et carte du monde libre, le plus accessible des GBA."},
            {slug:"fe-echoes-saga", title:"Fire Emblem Echoes: Shadows of Valentia", date:"2017-05-19", score:86, scoreType:"user", hltb:"30h", blurb:"Remake de Gaiden, doublé intégral et direction artistique superbe."},
            {slug:"fe-engage-saga", title:"Fire Emblem Engage", date:"2023-01-20", score:80, scoreType:"critic", hltb:"40h", blurb:"Tactique la plus fine de la série, récit en retrait."}
          ]
        },
        {
          slug: "devil-may-cry",
          name: "Devil May Cry",
          note: "Le 3 est une préquelle et le meilleur point de départ pour le système de combat ; le 5 conclut l'histoire familiale de Dante et Vergil.",
          games: [
            {slug:"dmc-3-saga", title:"Devil May Cry 3: Dante's Awakening", date:"2005-03-01", score:89, scoreType:"user", hltb:"12h", blurb:"Dante jeune et arrogant, action exigeante et jubilatoire."},
            {slug:"dmc-1-saga", title:"Devil May Cry", date:"2001-10-16", score:88, scoreType:"user", hltb:"8h", blurb:"Naissance du jeu d'action stylé, pistolets et épée démoniaque."},
            {slug:"dmc-5-saga", title:"Devil May Cry 5", date:"2019-03-08", score:88, scoreType:"critic", hltb:"15h", blurb:"Trois personnages jouables, aboutissement technique de la série."},
            {slug:"dmc-reboot-saga", title:"DmC: Devil May Cry", date:"2013-01-15", score:85, scoreType:"critic", hltb:"12h", blurb:"Relecture par Ninja Theory, clivante mais très solide."},
            {slug:"dmc-4-saga", title:"Devil May Cry 4", date:"2008-02-05", score:84, scoreType:"critic", hltb:"15h", blurb:"Nero et son Devil Bringer rejoignent Dante."}
          ]
        },
        {
          slug: "persona",
          name: "Persona",
          note: "Les épisodes sont indépendants : commencer par le 5 Royal ou le 4 Golden, les deux versions définitives les plus abouties.",
          games: [
            {slug:"persona-5-royal-saga", title:"Persona 5 Royal", date:"2020-03-31", score:95, scoreType:"critic", hltb:"100h", blurb:"Les Voleurs Fantômes au grand complet, style et écriture inégalés."},
            {slug:"persona-4-golden-saga", title:"Persona 4 Golden", date:"2012-06-14", score:93, scoreType:"critic", hltb:"70h", blurb:"Enquête surnaturelle à Inaba, version définitive et chaleureuse."},
            {slug:"persona-3-reload-saga", title:"Persona 3 Reload", date:"2024-02-02", score:88, scoreType:"critic", hltb:"70h", blurb:"Remake de l'épisode fondateur, lycée le jour et Tartare la nuit."},
            {slug:"persona-5-strikers-saga", title:"Persona 5 Strikers", date:"2021-02-23", score:82, scoreType:"critic", hltb:"40h", blurb:"Suite directe du 5 en action musou, road trip estival."},
            {slug:"persona-q2-saga", title:"Persona Q2: New Cinema Labyrinth", date:"2019-06-04", score:78, scoreType:"critic", hltb:"50h", blurb:"Les héros de 3, 4 et 5 réunis dans un labyrinthe façon Etrian."}
          ]
        },
        {
          slug: "final-fantasy",
          name: "Final Fantasy",
          note: "Chaque numéro est un univers autonome. Le IX ou le X sont les entrées classiques les plus sûres, le VII Remake et le XVI les plus modernes.",
          games: [
            {slug:"ff-9-saga", title:"Final Fantasy IX", date:"2000-11-14", score:94, scoreType:"critic", hltb:"40h", blurb:"Retour à l'heroic fantasy et hommage à toute la série."},
            {slug:"ff-6-saga", title:"Final Fantasy VI", date:"2022-02-23", score:92, scoreType:"user", hltb:"35h", blurb:"Le sommet 16 bits et son antagoniste légendaire, en Pixel Remaster."},
            {slug:"ff-10-saga", title:"Final Fantasy X / X-2 HD", date:"2013-12-26", score:89, scoreType:"user", hltb:"45h", blurb:"Le voyage de Tidus et Yuna à Spira, premier épisode doublé."},
            {slug:"ff-7-remake-saga", title:"Final Fantasy VII Remake", date:"2020-04-10", score:87, scoreType:"critic", hltb:"35h", blurb:"Midgar redéployée en jeu entier, combat hybride réussi."},
            {slug:"ff-16-saga", title:"Final Fantasy XVI", date:"2023-06-22", score:87, scoreType:"critic", hltb:"40h", blurb:"Virage action et politique, Clive et les Primordiaux."},
            {slug:"ff-12-zodiac-saga", title:"Final Fantasy XII: The Zodiac Age", date:"2017-07-11", score:85, scoreType:"critic", hltb:"60h", blurb:"Ivalice semi-ouverte et gambits, version remaniée et accélérée."},
            {slug:"ff-4-saga", title:"Final Fantasy IV", date:"2008-07-22", score:85, scoreType:"critic", hltb:"25h", blurb:"Le drame de Cecil, premier épisode vraiment narratif de la série."},
            {slug:"ff-14-arr-saga", title:"Final Fantasy XIV: A Realm Reborn", date:"2013-08-27", score:83, scoreType:"critic", hltb:"100h", blurb:"Le MMO devenu l'un des meilleurs récits de toute la franchise."}
          ]
        },
        {
          slug: "pikmin",
          name: "Pikmin",
          note: "Le 1 pose la tension du compte à rebours, le 2 la retire, le 4 est le plus accueillant. Tous se suivent sans dépendance scénaristique.",
          games: [
            {slug:"pikmin-2-saga", title:"Pikmin 2", date:"2004-08-30", score:90, scoreType:"user", hltb:"20h", blurb:"Sans limite de temps, grottes et trésors à ramener."},
            {slug:"pikmin-1-saga", title:"Pikmin", date:"2001-12-02", score:88, scoreType:"user", hltb:"10h", blurb:"Trente jours pour réparer son vaisseau, tension permanente."},
            {slug:"pikmin-4-saga", title:"Pikmin 4", date:"2023-07-21", score:87, scoreType:"critic", hltb:"25h", blurb:"Le plus riche et le plus accessible, avec le chien Otchin."},
            {slug:"pikmin-3-deluxe-saga", title:"Pikmin 3 Deluxe", date:"2020-10-30", score:85, scoreType:"critic", hltb:"15h", blurb:"Trois capitaines à coordonner, version enrichie du jeu Wii U."}
          ]
        },
        {
          slug: "metroid",
          name: "Metroid",
          note: "Dread ou Zero Mission pour la 2D, Prime Remastered pour la vue subjective. Les deux branches se répondent sans dépendre l'une de l'autre.",
          games: [
            {slug:"metroid-prime-remastered", title:"Metroid Prime Remastered", date:"2023-02-08", score:94, scoreType:"critic", hltb:"15h", blurb:"Le passage magistral à la première personne, remis à neuf."},
            {slug:"super-metroid-saga", title:"Super Metroid", date:"1994-04-18", score:96, scoreType:"user", hltb:"8h", blurb:"Le modèle absolu du genre, exploration et solitude parfaites."},
            {slug:"metroid-zero-mission-saga", title:"Metroid: Zero Mission", date:"2004-02-09", score:89, scoreType:"user", hltb:"6h", blurb:"Remake du tout premier Metroid, avec une fin inédite."},
            {slug:"metroid-dread-saga", title:"Metroid Dread", date:"2021-10-08", score:88, scoreType:"critic", hltb:"10h", blurb:"Suite directe de Fusion, traque implacable et 2D somptueuse."},
            {slug:"metroid-fusion-saga", title:"Metroid Fusion", date:"2002-11-17", score:88, scoreType:"user", hltb:"6h", blurb:"Le plus dirigiste et le plus angoissant des Metroid 2D."},
            {slug:"metroid-prime-2-saga", title:"Metroid Prime 2: Echoes", date:"2004-11-15", score:88, scoreType:"user", hltb:"20h", blurb:"Suite plus sombre entre monde lumineux et monde des ténèbres."},
            {slug:"metroid-samus-returns-saga", title:"Metroid: Samus Returns", date:"2017-09-15", score:88, scoreType:"user", hltb:"11h", blurb:"Remake de l'épisode Game Boy, contre-attaque au corps à corps."}
          ]
        },
        {
          slug: "souls",
          name: "Souls / FromSoftware",
          note: "Elden Ring est de loin le plus accueillant grâce à son monde ouvert ; Dark Souls reste le plus cohérent architecturalement.",
          games: [
            {slug:"elden-ring-saga", title:"Elden Ring", date:"2022-02-25", score:96, scoreType:"critic", hltb:"60h", blurb:"L'Entre-terre en monde ouvert, synthèse de quinze ans de savoir-faire."},
            {slug:"bloodborne-saga", title:"Bloodborne", date:"2015-03-24", score:92, scoreType:"critic", hltb:"35h", blurb:"Yharnam gothique et combat offensif, le plus stylé du lot."},
            {slug:"demons-souls-saga", title:"Demon's Souls", date:"2009-10-06", score:92, scoreType:"user", hltb:"30h", blurb:"L'acte fondateur, Boletaria et son Nexus."},
            {slug:"dark-souls-saga", title:"Dark Souls", date:"2011-10-04", score:90, scoreType:"user", hltb:"40h", blurb:"Lordran interconnecté, le level design le plus admiré du genre."},
            {slug:"sekiro-saga", title:"Sekiro: Shadows Die Twice", date:"2019-03-22", score:90, scoreType:"critic", hltb:"30h", blurb:"Parades au katana dans un Japon Sengoku fantasmé."},
            {slug:"dark-souls-3-saga", title:"Dark Souls III", date:"2016-04-12", score:89, scoreType:"critic", hltb:"40h", blurb:"Conclusion rapide et spectaculaire de la trilogie."}
          ]
        },
        {
          slug: "metal-gear",
          name: "Metal Gear",
          note: "L'ordre de sortie fonctionne, mais commencer par Snake Eater est très défendable : c'est la préquelle et l'épisode le plus autonome.",
          games: [
            {slug:"mgs-1-saga", title:"Metal Gear Solid", date:"1998-10-21", score:94, scoreType:"critic", hltb:"12h", blurb:"Shadow Moses et la naissance de l'infiltration cinématographique."},
            {slug:"mgs-4-saga", title:"Metal Gear Solid 4: Guns of the Patriots", date:"2008-06-12", score:94, scoreType:"critic", hltb:"18h", blurb:"Conclusion de l'histoire de Solid Snake, mise en scène démesurée."},
            {slug:"mgs-3-saga", title:"Metal Gear Solid 3: Snake Eater", date:"2004-11-17", score:93, scoreType:"user", hltb:"16h", blurb:"Survie en jungle pendant la guerre froide, souvent cité comme le meilleur."},
            {slug:"mgs-5-saga", title:"Metal Gear Solid V: The Phantom Pain", date:"2015-09-01", score:93, scoreType:"critic", hltb:"45h", blurb:"Infiltration en monde ouvert, le gameplay le plus libre de la série."},
            {slug:"mgs-2-saga", title:"Metal Gear Solid 2: Sons of Liberty", date:"2001-11-13", score:89, scoreType:"user", hltb:"11h", blurb:"Scénario vertigineux sur l'information, en avance de vingt ans."},
            {slug:"mgs-pw-saga", title:"Metal Gear Solid: Peace Walker", date:"2010-06-08", score:89, scoreType:"critic", hltb:"30h", blurb:"Chaînon entre Snake Eater et Phantom Pain, gestion de base incluse."}
          ]
        },
        {
          slug: "zelda",
          name: "The Legend of Zelda",
          note: "Aucun ordre obligatoire. A Link to the Past pour la 2D, Ocarina of Time pour la 3D classique, Breath of the Wild pour la formule moderne.",
          games: [
            {slug:"zelda-oot-saga", title:"The Legend of Zelda: Ocarina of Time", date:"1998-11-21", score:99, scoreType:"critic", hltb:"26h", blurb:"Le passage à la 3D qui a redéfini l'aventure tout entière."},
            {slug:"zelda-botw-saga", title:"The Legend of Zelda: Breath of the Wild", date:"2017-03-03", score:97, scoreType:"critic", hltb:"50h", blurb:"Hyrule ouvert et libre, réinvention totale de la série."},
            {slug:"zelda-totk-saga", title:"The Legend of Zelda: Tears of the Kingdom", date:"2023-05-12", score:96, scoreType:"critic", hltb:"60h", blurb:"Suite verticale et créative, bricolage érigé en système."},
            {slug:"zelda-alttp-saga", title:"The Legend of Zelda: A Link to the Past", date:"1992-04-13", score:95, scoreType:"user", hltb:"15h", blurb:"Le modèle 2D définitif, deux mondes superposés."},
            {slug:"zelda-mm-saga", title:"The Legend of Zelda: Majora's Mask", date:"2000-10-26", score:95, scoreType:"critic", hltb:"20h", blurb:"Trois jours en boucle à Termina, le plus singulier de tous."},
            {slug:"zelda-albw-saga", title:"The Legend of Zelda: A Link Between Worlds", date:"2013-11-22", score:91, scoreType:"critic", hltb:"16h", blurb:"Retour à Hyrule 2D avec une liberté d'ordre inédite."},
            {slug:"zelda-ww-hd-saga", title:"The Legend of Zelda: The Wind Waker HD", date:"2013-10-04", score:90, scoreType:"critic", hltb:"26h", blurb:"Le cel-shading intemporel et son océan, version rythmée."},
            {slug:"zelda-tp-hd-saga", title:"The Legend of Zelda: Twilight Princess HD", date:"2016-03-04", score:86, scoreType:"critic", hltb:"34h", blurb:"Le plus sombre des Zelda 3D, Link loup et crépuscule."}
          ]
        }
      ]
    }
  }
};

// Exposé en global pour que la page fonctionne aussi ouverte en file://
// (les imports de modules ES sont bloqués hors serveur HTTP).
if (typeof window !== "undefined") window.ODYSSEY_DATA = DATA;
