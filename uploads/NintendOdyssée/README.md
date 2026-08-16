# Mon Périple Vidéoludique

Site statique (HTML/CSS/JS pur, sans framework ni build) qui retrace tes
50 meilleurs jeux par console : Game Boy Advance (fait), DS, 3DS, GameCube
(à venir).

## Structure

```
index.html          → page d'accueil (jeu "en cours" + accès aux consoles)
gba.html             → liste des 50 jeux GBA
ds.html, 3ds.html, gamecube.html → à venir
assets/
  style.css          → styles communs à toutes les pages
  theme-gba.css       → palette + typo spécifiques à la page GBA
  theme-ds.css, theme-3ds.css, theme-gamecube.css → à venir
  data.js             → toutes les données des jeux (une entrée par console)
  app.js              → logique commune (stockage, rendu des listes, la Home)
images/
  gba/                → jaquettes GBA (voir plus bas)
  ds/, 3ds/, gamecube/
```

## Ajouter tes propres jaquettes

Le site n'embarque aucune jaquette par défaut (droits d'auteur). À la place,
chaque jeu essaie de charger une image à un chemin prévisible ; si elle
n'existe pas, une jaquette générée s'affiche à la place automatiquement.

Pour ajouter une jaquette, dépose une image nommée d'après le `slug` du jeu
(visible dans `assets/data.js`) dans le dossier de la console :

```
images/gba/castlevania-circle-of-the-moon.jpg
images/gba/golden-sun.jpg
...
```

Format `.jpg` recommandé (portrait, ratio 3:4 idéalement). Aucune autre
modification n'est nécessaire : l'image apparaît automatiquement dès qu'elle
est présente.

## Sauvegarde de la progression

Les cases "terminé" et le jeu "en cours" sont sauvegardés dans le
`localStorage` du navigateur — donc **par navigateur/appareil**, pas
synchronisé entre appareils. Une fois le site hébergé (voir plus bas), ouvre
la même URL depuis le même navigateur pour retrouver ta progression.

## Héberger le site

Comme c'est un site 100% statique, n'importe quel hébergeur statique
fonctionne, sans configuration particulière :

- **Netlify** : glisser-déposer le dossier entier sur app.netlify.com/drop
- **GitHub Pages** : pousser ce dossier dans un dépôt GitHub, activer Pages
  sur la branche principale
- **Vercel**, **Cloudflare Pages** : import direct du dossier/dépôt

Aucune étape de build n'est nécessaire — c'est déjà prêt à servir tel quel.

## Prochaines étapes

- Construire `ds.html` + `theme-ds.css` + données DS
- Construire `3ds.html` + `theme-3ds.css` + données 3DS
- Construire `gamecube.html` + `theme-gamecube.css` + données GameCube
