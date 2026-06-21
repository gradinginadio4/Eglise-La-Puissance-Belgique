# Images à fournir — remplacer les placeholders

Chaque visuel ci-dessous est actuellement un placeholder SVG gris/bleu dans
`assets/img/placeholders/`. Remplacez le fichier (même nom, ou mettez à jour le
chemin dans le HTML/CSS) par votre visuel réel. Formats recommandés : WebP ou
JPEG optimisé, sauf logo/favicon (SVG ou PNG).

| Fichier placeholder | Où il apparaît | Visuel à y mettre | Dimensions conseillées | Poids cible |
|---|---|---|---|---|
| `logo.svg` | En-tête (toutes pages) | Logo de l'église, version lisible sur fond clair | ~160×40 px (ratio ~4:1) | < 15 Ko |
| `logo-footer.svg` | Pied de page | Logo en version claire/monochrome sur fond bleu nuit | ~140×35 px | < 15 Ko |
| `favicon.svg` | Onglet du navigateur | Icône carrée (monogramme ou symbole), lisible en très petit | 64×64 px (carré) | < 10 Ko |
| `hero.svg` | Accueil, grande image d'en-tête | Photo réelle de l'assemblée réunie pendant la louange ou le culte. Pas de banque d'images. Plan large, visages, lumière chaude. | 1600×1200 px (ratio 4:3), recadrable | < 200 Ko (WebP) |
| `pasteur.svg` | Page « Qui sommes-nous » | Portrait digne de l'Évangéliste Christophe Kapay, cadrage vertical, regard franc, fond sobre. | 600×800 px (ratio 3:4) | < 120 Ko |
| `evenement-1.svg` | Accueil, agenda | Photo ou visuel de l'événement 1 | 480×270 px (16:9) | < 60 Ko |
| `evenement-2.svg` | Accueil, agenda | Photo ou visuel de l'événement 2 | 480×270 px (16:9) | < 60 Ko |
| `evenement-3.svg` | Accueil, agenda | Photo ou visuel de l'événement 3 | 480×270 px (16:9) | < 60 Ko |

## Conseil de traitement (cohérence visuelle)
Appliquez à toutes les photos le filtre déjà prévu dans le design system :
`brightness(0.92) contrast(1.08) saturate(1.1)`. Il harmonise des photos prises
dans des conditions différentes (flash, salle sombre) en une palette cohérente
et digne.
