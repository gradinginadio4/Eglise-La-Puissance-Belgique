
# SECTION FINALE B — Liste des ressources à fournir

Ce tableau recense exhaustivement tous les placeholders `{{...}}` présents dans le code du site. Chaque ligne indique : le placeholder, son type, les pages et sections concernées, les spécifications techniques (format, dimensions, poids max), et la méthode d'ajout.

---

## 1. Images

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{LOGO}}` | Logo | Toutes les pages (navbar) | Format : PNG ou SVG transparent. Dimensions : 160×40px (affichage), source min 320×80px. Poids max : 30 KB. | Téléverser `logo.png` (ou `logo.svg`) à la racine du dépôt. Remplacer `{{LOGO}}` par le nom exact du fichier dans le code HTML de toutes les pages. |
| `{{LOGO_FOOTER}}` | Logo | Toutes les pages (footer) | Format : PNG ou SVG transparent, version footer (même fichier ou variante allégée). Dimensions : 140×35px (affichage). Poids max : 25 KB. | Téléverser `logo-footer.png` à la racine. Remplacer `{{LOGO_FOOTER}}` dans le code HTML de toutes les pages. |
| `{{FAVICON}}` | Favicon | Toutes les pages (`<link rel="icon">`) | Format : PNG 32×32px ou ICO. Poids max : 5 KB. | Téléverser `favicon.png` à la racine. Remplacer `{{FAVICON}}` dans le `<head>` de toutes les pages. |
| `{{HERO_IMAGE}}` | Image | index.html (hero) | Format : WebP. Dimensions : 800×600px (max). Poids max : 120 KB. Filtre CSS appliqué automatiquement. | Téléverser `hero.webp` à la racine. Remplacer `{{HERO_IMAGE}}` dans index.html. |
| `{{PHOTO_PASTEUR}}` | Image | qui-sommes-nous.html (section pasteur) | Format : WebP. Dimensions : 600×800px (portrait). Poids max : 80 KB. Filtre CSS appliqué. | Téléverser `pasteur.webp` à la racine. Remplacer `{{PHOTO_PASTEUR}}` dans qui-sommes-nous.html. |
| `{{PHOTO_TEMOIGNANT_1}}` | Image | index.html (témoignage punch), temoignages.html (témoignage écrit 1) | Format : WebP. Dimensions : 96×96px (source 200×200px pour la rétine). Poids max : 20 KB. | Téléverser `temoignage-1.webp` à la racine. Remplacer dans index.html et temoignages.html. |
| `{{PHOTO_TEMOIGNANT_2}}` | Image | temoignages.html (témoignage écrit 2) | Format : WebP. Dimensions : 96×96px. Poids max : 20 KB. | Téléverser `temoignage-2.webp` à la racine. Remplacer dans temoignages.html. |
| `{{PHOTO_TEMOIGNANT_3}}` | Image | temoignages.html (témoignage écrit 3) | Format : WebP. Dimensions : 96×96px. Poids max : 20 KB. | Téléverser `temoignage-3.webp` à la racine. Remplacer dans temoignages.html. |
| `{{PHOTO_TEMOIGNANT_4}}` | Image | temoignages.html (témoignage écrit 4) | Format : WebP. Dimensions : 96×96px. Poids max : 20 KB. | Téléverser `temoignage-4.webp` à la racine. Remplacer dans temoignages.html. |
| `{{PHOTO_TEMOIGNANT_5}}` | Image | temoignages.html (témoignage écrit 5) | Format : WebP. Dimensions : 96×96px. Poids max : 20 KB. | Téléverser `temoignage-5.webp` à la racine. Remplacer dans temoignages.html. |
| `{{PHOTO_TEMOIGNANT_6}}` | Image | temoignages.html (témoignage écrit 6) | Format : WebP. Dimensions : 96×96px. Poids max : 20 KB. | Téléverser `temoignage-6.webp` à la racine. Remplacer dans temoignages.html. |
| `{{IMAGE_EVENEMENT_1}}` | Image | index.html (agenda), vie-de-leglise.html (agenda) | Format : WebP. Dimensions : 400×225px (16:9). Poids max : 60 KB. | Téléverser `evenement-1.webp` à la racine. Remplacer dans index.html et vie-de-leglise.html. |
| `{{IMAGE_EVENEMENT_2}}` | Image | index.html (agenda), vie-de-leglise.html (agenda) | Format : WebP. Dimensions : 400×225px. Poids max : 60 KB. | Téléverser `evenement-2.webp` à la racine. Remplacer dans index.html et vie-de-leglise.html. |
| `{{IMAGE_EVENEMENT_3}}` | Image | index.html (agenda), vie-de-leglise.html (agenda) | Format : WebP. Dimensions : 400×225px. Poids max : 60 KB. | Téléverser `evenement-3.webp` à la racine. Remplacer dans index.html et vie-de-leglise.html. |

---

## 2. Vidéos (IDs YouTube)

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{YOUTUBE_ID_SERMON_1}}` | Vidéo | index.html (prédication vedette), medias.html (grille 1) | ID YouTube public (11 caractères alphanumériques). Vidéo hébergée sur la chaîne officielle. | Remplacer `{{YOUTUBE_ID_SERMON_1}}` par l'ID réel dans index.html et medias.html. Exemple : "dQw4w9WgXcQ". |
| `{{YOUTUBE_ID_SERMON_2}}` | Vidéo | medias.html (grille 2) | ID YouTube public. | Remplacer dans medias.html. |
| `{{YOUTUBE_ID_SERMON_3}}` | Vidéo | medias.html (grille 3) | ID YouTube public. | Remplacer dans medias.html. |
| `{{YOUTUBE_ID_SERMON_4}}` | Vidéo | medias.html (grille 4) | ID YouTube public. | Remplacer dans medias.html. |
| `{{YOUTUBE_ID_SERMON_5}}` | Vidéo | medias.html (grille 5) | ID YouTube public. | Remplacer dans medias.html. |
| `{{YOUTUBE_ID_SERMON_6}}` | Vidéo | medias.html (grille 6) | ID YouTube public. | Remplacer dans medias.html. |
| `{{YOUTUBE_ID_TEMOIGNAGE_1}}` | Vidéo | temoignages.html (témoignage vidéo 1) | ID YouTube public. | Remplacer dans temoignages.html. |
| `{{YOUTUBE_ID_TEMOIGNAGE_2}}` | Vidéo | temoignages.html (témoignage vidéo 2) | ID YouTube public. | Remplacer dans temoignages.html. |
| `{{YOUTUBE_ID_TEMOIGNAGE_3}}` | Vidéo | temoignages.html (témoignage vidéo 3) | ID YouTube public. | Remplacer dans temoignages.html. |

---

## 3. Liens externes

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{WHATSAPP_NUMERO}}` | Lien externe | Toutes les pages (liens WhatsApp, sticky bar, footer, CTA) | Numéro international complet, sans espaces ni signes +. Format : 324xxxxxxxx. | Remplacer dans TOUTES les pages HTML. Exemple : "32470123456". |
| `{{FACEBOOK_URL}}` | Lien externe | Toutes les pages (menu overlay, footer) | URL complète de la page Facebook. | Remplacer dans TOUTES les pages HTML. Exemple : "https://facebook.com/eglise.lapuissance.bruxelles". |
| `{{INSTAGRAM_URL}}` | Lien externe | Toutes les pages (menu overlay, footer) | URL complète du profil Instagram. | Remplacer dans TOUTES les pages HTML. Exemple : "https://instagram.com/lapuissance_bruxelles". |
| `{{YOUTUBE_CHANNEL_URL}}` | Lien externe | Toutes les pages (menu overlay, footer), medias.html (CTA) | URL complète de la chaîne YouTube. | Remplacer dans TOUTES les pages HTML. Exemple : "https://youtube.com/@LaPuissanceBruxelles". |
| `{{TIKTOK_URL}}` | Lien externe | Toutes les pages (footer) | URL complète du profil TikTok. | Remplacer dans TOUTES les pages HTML. Exemple : "https://tiktok.com/@lapuissance_bruxelles". |
| `{{FORMSPREE_URL_CONTACT}}` | Lien externe | contact.html (formulaire) | URL du formulaire Formspree (gratuit). Format : https://formspree.io/f/XXXXXXXX. | Remplacer dans contact.html. Créer un compte sur formspree.io, créer un formulaire, copier l'URL. |
| `{{FORMSPREE_URL_PRIERE}}` | Lien externe | mimpliquer.html (formulaire prière) | URL du formulaire Formspree (gratuit). | Remplacer dans mimpliquer.html. Créer un second formulaire sur Formspree. |
| `{{URL_DONS}}` | Lien externe | mimpliquer.html (section dons, commentée) | URL du processeur de paiement sécurisé. À activer uniquement après statut ASBL confirmé. | Remplacer dans mimpliquer.html (décommenter la section d'abord). |

---

## 4. Textes et données

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{ADRESSE_COMPLETE}}` | Texte | Toutes les pages (footer, infos pratiques, contact, mentions légales) | Adresse postale complète. Exemple : "Rue de l'Église 123, 1000 Bruxelles, Belgique". | Remplacer dans TOUTES les pages HTML concernées. |
| `{{ADRESSE_COURTE}}` | Texte | index.html (hero badge), premiere-visite.html (CTA final) | Version courte de l'adresse. Exemple : "Rue de l'Église, Bruxelles". | Remplacer dans index.html et premiere-visite.html. |
| `{{ADRESSE_COMPLETE_URL_ENCODED}}` | Texte | premiere-visite.html (carte, itinéraire), contact.html (carte, lien Maps) | Adresse encodée pour URL Google Maps. Espaces remplacés par +. Exemple : "Rue+de+l%27%C3%89glise+123+1000+Bruxelles". | Remplacer dans premiere-visite.html et contact.html. Utiliser un encodeur URL en ligne. |
| `{{HORAIRE_CULTE}}` | Texte | Toutes les pages (hero badge, infos pratiques, vie de l'église) | Horaire du culte dominical. Exemple : "10h00". | Remplacer dans TOUTES les pages HTML concernées. |
| `{{AUTRES_REUNIONS}}` | Texte | index.html, premiere-visite.html, vie-de-leglise.html, contact.html | Description des autres réunions. Exemple : "Mercredi : étude biblique à 19h30". | Remplacer dans les pages concernées. |
| `{{TRANSPORTS_STIB}}` | Texte | index.html, premiere-visite.html, contact.html | Lignes de métro/tram/bus et arrêt. Exemple : "Métro ligne 2 · Arrêt Rogier". | Remplacer dans les pages concernées. |
| `{{BCE_NUMERO}}` | Texte | Toutes les pages (footer), mentions-legales.html, politique-confidentialite.html | Numéro BCE/KBO de l'ASBL. Exemple : "0123.456.789". | Remplacer dans TOUTES les pages HTML. |
| `{{ANNEE_COURANTE}}` | Texte | Toutes les pages (footer copyright) | Année en cours. Exemple : "2025". | Remplacer dans TOUTES les pages HTML. |
| `{{ANNEE_IMPLANTATION}}` | Texte | index.html (card histoire), qui-sommes-nous.html (histoire) | Année d'implantation à Bruxelles. Exemple : "2018". | Remplacer dans index.html et qui-sommes-nous.html. |
| `{{HORAIRES_PERMANENCES}}` | Texte | contact.html (infos) | Horaires des permanences pastorales. Exemple : "Mardi et jeudi de 14h00 à 17h00 (sur rendez-vous)". | Remplacer dans contact.html. |
| `{{DUREE_CULTE}}` | Texte | premiere-visite.html (FAQ, à quoi s'attendre) | Durée indicative du culte. Exemple : "2 heures". | Remplacer dans premiere-visite.html. |
| `{{DUREE_PREDICATION}}` | Texte | premiere-visite.html (étapes) | Durée de la prédication. Exemple : "45 minutes". | Remplacer dans premiere-visite.html. |
| `{{INFO_PARKING}}` | Texte | premiere-visite.html (rejoindre) | Info parking. Exemple : "Parking public disponible à 200m." | Remplacer dans premiere-visite.html. |
| `{{INFO_ACCESSIBILITE_PMR}}` | Texte | premiere-visite.html (rejoindre) | Info accessibilité. Exemple : "Lieu accessible aux personnes à mobilité réduite." | Remplacer dans premiere-visite.html. |
| `{{REPONSE_GARDERIE}}` | Texte | premiere-visite.html (FAQ) | Réponse à la question garderie. Exemple : "Oui, un espace enfants est disponible pendant le culte." | Remplacer dans premiere-visite.html. |
| `{{DESCRIPTION_CULTE}}` | Texte | vie-de-leglise.html (horaires) | Description du culte. Exemple : "Culte dominical avec louange, prédication et prière." | Remplacer dans vie-de-leglise.html. |
| `{{DESCRIPTION_AUTRES_REUNIONS}}` | Texte | vie-de-leglise.html (horaires) | Description des autres réunions. | Remplacer dans vie-de-leglise.html. |
| `{{DUREE_CONSERVATION_DONNEES}}` | Texte | politique-confidentialite.html | Durée légale de conservation. Exemple : "3 ans à compter du dernier contact". | Remplacer dans politique-confidentialite.html. |
| `{{DATE_MISE_A_JOUR_POLITIQUE}}` | Texte | politique-confidentialite.html | Date de dernière mise à jour. Exemple : "1er janvier 2025". | Remplacer dans politique-confidentialite.html. |
| `{{BIOGRAPHIE_PASTEUR}}` | Texte | qui-sommes-nous.html (pasteur) | Biographie de l'évangéliste Christophe Kapay. 3-5 phrases factuelles. | Remplacer dans qui-sommes-nous.html. |

---

## 5. Événements

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{TITRE_EVENEMENT_1}}` | Texte | index.html, vie-de-leglise.html | Titre de l'événement. Exemple : "Nuit de prière". | Remplacer dans index.html et vie-de-leglise.html. |
| `{{DATE_EVENEMENT_1}}` | Texte | index.html, vie-de-leglise.html | Date de l'événement. Exemple : "15 mars 2025". | Remplacer dans les pages concernées. |
| `{{LIEU_EVENEMENT_1}}` | Texte | index.html, vie-de-leglise.html | Lieu de l'événement. Exemple : "Salle principale". | Remplacer dans les pages concernées. |
| `{{DESCRIPTION_EVENEMENT_1}}` | Texte | index.html, vie-de-leglise.html | Description courte. Exemple : "Une soirée dédiée à la prière collective." | Remplacer dans les pages concernées. |
| `{{TITRE_EVENEMENT_2}}` | Texte | index.html, vie-de-leglise.html | Titre de l'événement 2. | Remplacer dans les pages concernées. |
| `{{DATE_EVENEMENT_2}}` | Texte | index.html, vie-de-leglise.html | Date de l'événement 2. | Remplacer dans les pages concernées. |
| `{{LIEU_EVENEMENT_2}}` | Texte | index.html, vie-de-leglise.html | Lieu de l'événement 2. | Remplacer dans les pages concernées. |
| `{{DESCRIPTION_EVENEMENT_2}}` | Texte | index.html, vie-de-leglise.html | Description de l'événement 2. | Remplacer dans les pages concernées. |
| `{{TITRE_EVENEMENT_3}}` | Texte | index.html, vie-de-leglise.html | Titre de l'événement 3. | Remplacer dans les pages concernées. |
| `{{DATE_EVENEMENT_3}}` | Texte | index.html, vie-de-leglise.html | Date de l'événement 3. | Remplacer dans les pages concernées. |
| `{{LIEU_EVENEMENT_3}}` | Texte | index.html, vie-de-leglise.html | Lieu de l'événement 3. | Remplacer dans les pages concernées. |
| `{{DESCRIPTION_EVENEMENT_3}}` | Texte | index.html, vie-de-leglise.html | Description de l'événement 3. | Remplacer dans les pages concernées. |

---

## 6. Prédications (métadonnées)

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{DATE_SERMON_1}}` | Texte | index.html, medias.html | Date de la prédication. Exemple : "5 janvier 2025". | Remplacer dans index.html et medias.html. |
| `{{DUREE_SERMON_1}}` | Texte | medias.html | Durée de la vidéo. Exemple : "45 min". | Remplacer dans medias.html. |
| `{{DATE_SERMON_2}}` | Texte | medias.html | Date de la prédication 2. | Remplacer dans medias.html. |
| `{{DUREE_SERMON_2}}` | Texte | medias.html | Durée de la vidéo 2. | Remplacer dans medias.html. |
| `{{DATE_SERMON_3}}` | Texte | medias.html | Date de la prédication 3. | Remplacer dans medias.html. |
| `{{DUREE_SERMON_3}}` | Texte | medias.html | Durée de la vidéo 3. | Remplacer dans medias.html. |
| `{{DATE_SERMON_4}}` | Texte | medias.html | Date de la prédication 4. | Remplacer dans medias.html. |
| `{{DUREE_SERMON_4}}` | Texte | medias.html | Durée de la vidéo 4. | Remplacer dans medias.html. |
| `{{DATE_SERMON_5}}` | Texte | medias.html | Date de la prédication 5. | Remplacer dans medias.html. |
| `{{DUREE_SERMON_5}}` | Texte | medias.html | Durée de la vidéo 5. | Remplacer dans medias.html. |
| `{{DATE_SERMON_6}}` | Texte | medias.html | Date de la prédication 6. | Remplacer dans medias.html. |
| `{{DUREE_SERMON_6}}` | Texte | medias.html | Durée de la vidéo 6. | Remplacer dans medias.html. |

---

## 7. Témoignages

| Placeholder | Type | Page(s) et section | Spécifications | Comment l'ajouter |
|---|---|---|---|---|
| `{{PRENOM_TEMOIGNANT_1}}` | Texte | index.html, temoignages.html | Prénom du témoin 1. | Remplacer dans index.html et temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_1}}` | Texte | index.html, temoignages.html | Commune de résidence du témoin 1. Exemple : "Molenbeek". | Remplacer dans les pages concernées. |
| `{{TEXTE_TEMOIGNAGE_1}}` | Texte | temoignages.html | Texte du témoignage 1. 2-3 phrases. | Remplacer dans temoignages.html. |
| `{{DATE_TEMOIGNAGE_1}}` | Texte | temoignages.html | Date d'enregistrement du témoignage 1. | Remplacer dans temoignages.html. |
| `{{PRENOM_TEMOIGNANT_2}}` | Texte | temoignages.html | Prénom du témoin 2. | Remplacer dans temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_2}}` | Texte | temoignages.html | Commune du témoin 2. | Remplacer dans temoignages.html. |
| `{{TEXTE_TEMOIGNAGE_2}}` | Texte | temoignages.html | Texte du témoignage 2. | Remplacer dans temoignages.html. |
| `{{DATE_TEMOIGNAGE_2}}` | Texte | temoignages.html | Date du témoignage 2. | Remplacer dans temoignages.html. |
| `{{PRENOM_TEMOIGNANT_3}}` | Texte | temoignages.html | Prénom du témoin 3. | Remplacer dans temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_3}}` | Texte | temoignages.html | Commune du témoin 3. | Remplacer dans temoignages.html. |
| `{{TEXTE_TEMOIGNAGE_3}}` | Texte | temoignages.html | Texte du témoignage 3. | Remplacer dans temoignages.html. |
| `{{DATE_TEMOIGNAGE_3}}` | Texte | temoignages.html | Date du témoignage 3. | Remplacer dans temoignages.html. |
| `{{PRENOM_TEMOIGNANT_4}}` | Texte | temoignages.html | Prénom du témoin 4. | Remplacer dans temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_4}}` | Texte | temoignages.html | Commune du témoin 4. | Remplacer dans temoignages.html. |
| `{{TEXTE_TEMOIGNAGE_4}}` | Texte | temoignages.html | Texte du témoignage 4. | Remplacer dans temoignages.html. |
| `{{PRENOM_TEMOIGNANT_5}}` | Texte | temoignages.html | Prénom du témoin 5. | Remplacer dans temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_5}}` | Texte | temoignages.html | Commune du témoin 5. | Remplacer dans temoignages.html. |
| `{{TEXTE_TEMOIGNAGE_5}}` | Texte | temoignages.html | Texte du témoignage 5. | Remplacer dans temoignages.html. |
| `{{PRENOM_TEMOIGNANT_6}}` | Texte | temoignages.html | Prénom du témoin 6. | Remplacer dans temoignages.html. |
| `{{COMMUNE_TEMOIGNANT_6}}` | Texte | temoignages.html | Commune du témoin 6. | Remplacer dans temoignages.html. |
| `{{TEXTE_TEMOIGNAGE_6}}` | Texte | temoignages.html | Texte du témoignage 6. | Remplacer dans temoignages.html. |

---

## Récapitulatif par type

- **Images** : 15 ressources (logo, favicon, hero, pasteur, 6 témoignants, 3 événements)
- **Vidéos (IDs YouTube)** : 9 ressources (6 prédications, 3 témoignages vidéo)
- **Liens externes** : 8 ressources (WhatsApp, 4 réseaux sociaux, 2 Formspree, 1 dons)
- **Textes et données** : 21 ressources (adresses, horaires, BCE, biographie, etc.)
- **Événements** : 12 ressources (3 événements × 4 champs)
- **Prédications** : 12 ressources (6 prédications × 2 champs)
- **Témoignages** : 21 ressources (6 témoins × 3-4 champs)

**Total : 98 placeholders** à remplacer par des valeurs réelles avant la mise en ligne.
