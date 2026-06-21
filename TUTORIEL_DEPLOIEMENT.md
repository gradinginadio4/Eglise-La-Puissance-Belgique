
# SECTION FINALE A — Tutoriel de déploiement GitHub Pages (pour grand débutant)

Ce tutoriel vous guide pas-à-pas, "au millimètre", pour mettre en ligne le site de l'Église La Puissance Bruxelles sur GitHub Pages. Aucune connaissance technique n'est requise. Tout se fait via l'interface web de GitHub, sans ligne de commande, sans installer Git.

---

## Étape 1 : Créer un compte GitHub

1. Ouvrez votre navigateur web (Chrome, Firefox, Safari ou Edge) et allez sur **github.com**.
2. En haut à droite de la page d'accueil GitHub, vous voyez un bouton vert **"Sign up"** (S'inscrire). Cliquez dessus.
3. Vous arrivez sur une page qui vous demande votre **adresse e-mail**. Tapez votre adresse e-mail dans le champ prévu. Cliquez sur le bouton **"Continue"**.
4. GitHub vous demande de créer un **mot de passe**. Choisissez un mot de passe sécurisé (au moins 8 caractères, avec des lettres et des chiffres). Tapez-le dans le champ. Cliquez sur **"Continue"**.
5. GitHub vous demande un **nom d'utilisateur** (username). C'est le nom qui apparaîtra dans l'adresse de votre site. Choisissez quelque chose de simple, par exemple "eglise-lapuissance-bruxelles". Si le nom est déjà pris, GitHub vous proposera des alternatives. Cliquez sur **"Continue"**.
6. GitHub vous demande si vous voulez recevoir des e-mails. Cochez ou décochez selon votre préférence. Cliquez sur **"Continue"**.
7. Vous devez résoudre un **puzzle de vérification** (captcha) pour prouver que vous n'êtes pas un robot. Suivez les instructions à l'écran (sélectionner des images, par exemple). Cliquez sur **"Vérifier"**.
8. GitHub envoie un **code de vérification** à votre adresse e-mail. Allez dans votre boîte mail, ouvrez l'e-mail de GitHub, copiez le code à 6 chiffres, revenez sur GitHub et collez-le dans le champ prévu. Cliquez sur **"Continue"**.
9. Vous arrivez sur une page qui vous demande de choisir un plan. Sélectionnez le plan **"Free"** (Gratuit) — c'est le premier, il est entièrement gratuit. Cliquez sur **"Continue for free"**.
10. GitHub vous propose de personnaliser votre expérience. Vous pouvez cliquer sur **"Skip personalization"** (Passer) en bas de la page.
11. Vous arrivez sur votre **tableau de bord GitHub** (Dashboard). Félicitations, votre compte est créé !

---

## Étape 2 : Créer un dépôt public

1. Sur votre tableau de bord GitHub, en haut à gauche, vous voyez un bouton vert **"Create repository"** (ou un bouton **"+"** puis **"New repository"**). Cliquez dessus.
2. Vous arrivez sur la page **"Create a new repository"**.
3. Dans le champ **"Repository name"** (Nom du dépôt), tapez exactement : **eglise-lapuissance-bruxelles** (ou le nom de votre choix, sans espaces, sans accents — utilisez des tirets). Ce nom apparaîtra dans l'URL de votre site.
4. Dans le champ **"Description"** (Description), vous pouvez taper : "Site web de l'Église La Puissance Bruxelles". C'est optionnel.
5. **Important** : sous le champ de description, vous voyez deux boutons radio : **"Public"** et **"Private"**. Assurez-vous que **"Public"** est sélectionné (c'est obligatoire pour GitHub Pages).
6. **Ne cochez PAS** la case "Add a README file" (Ajouter un fichier README). Laissez-la décochée.
7. **Ne cochez PAS** la case "Add .gitignore". Laissez-la décochée.
8. **Ne cochez PAS** la case "Choose a license". Laissez-la décochée.
9. Cliquez sur le bouton vert **"Create repository"** en bas de la page.
10. Vous arrivez sur la page de votre nouveau dépôt. Elle est vide pour l'instant. Vous voyez un message : "This repository is empty. Get started by creating a new file or uploading an existing file." (Ce dépôt est vide. Commencez par créer un fichier ou téléverser un fichier existant.)

---

## Étape 3 : Téléverser tous les fichiers et dossiers

1. Sur la page de votre dépôt vide, vous voyez un lien bleu **"uploading an existing file"** (téléverser un fichier existant). Cliquez dessus. Vous arrivez sur la page **"Upload files"**.
2. Vous voyez une grande zone grise avec le texte **"Drag files here to add them to your repository"** (Glissez les fichiers ici) ou **"choose your files"** (choisissez vos fichiers).
3. **Préparation sur votre ordinateur** : ouvrez l'explorateur de fichiers (Windows) ou le Finder (Mac). Créez un dossier sur votre bureau nommé "site-eglise". À l'intérieur, créez la structure exacte suivante :
   - Un fichier nommé exactement **index.html**
   - Un fichier nommé exactement **qui-sommes-nous.html**
   - Un fichier nommé exactement **premiere-visite.html**
   - Un fichier nommé exactement **vie-de-leglise.html**
   - Un fichier nommé exactement **medias.html**
   - Un fichier nommé exactement **temoignages.html**
   - Un fichier nommé exactement **mimpliquer.html**
   - Un fichier nommé exactement **contact.html**
   - Un fichier nommé exactement **mentions-legales.html**
   - Un fichier nommé exactement **politique-confidentialite.html**
   - Un fichier nommé exactement **404.html**
   - Un dossier nommé exactement **assets**
   - À l'intérieur du dossier assets, un dossier nommé exactement **css**
   - À l'intérieur du dossier css, un fichier nommé exactement **style.css**
   - À l'intérieur du dossier assets, un dossier nommé exactement **js**
   - À l'intérieur du dossier js, un fichier nommé exactement **main.js**
4. **Copiez le contenu** de chaque fichier généré (fourni dans ce document) et collez-le dans le fichier correspondant sur votre ordinateur. Assurez-vous de sauvegarder chaque fichier (Ctrl+S ou Cmd+S).
5. **Attention à la casse** : GitHub Pages est sensible à la casse. "Index.html" est différent de "index.html". Utilisez toujours des minuscules pour les noms de fichiers, exactement comme listé ci-dessus.
6. De retour sur GitHub, dans la zone de téléversement, cliquez sur **"choose your files"**.
7. Une fenêtre de sélection de fichiers s'ouvre. Naviguez jusqu'au dossier "site-eglise" sur votre bureau. **Sélectionnez TOUS les fichiers et dossiers** (vous pouvez les sélectionner tous en faisant Ctrl+A ou Cmd+A, ou en les glissant depuis le Finder/Explorateur).
8. Glissez-déposez (drag & drop) l'ensemble du dossier "site-eglise" dans la zone grise de GitHub. Vous voyez apparaître la liste de tous les fichiers et dossiers en dessous de la zone.
9. Vérifiez que la structure est correcte : vous devez voir les 11 fichiers .html à la racine, et le dossier "assets" qui contient les dossiers "css" et "js".
10. Faites défiler la page vers le bas. Vous voyez une section **"Commit changes"** (Valider les changements). Dans le champ "Commit changes...", laissez le message par défaut ("Add files via upload") ou tapez : "Ajout du site web complet".
11. Cliquez sur le bouton vert **"Commit changes"**.
12. Vous êtes redirigé vers la page principale de votre dépôt. Vous voyez maintenant la liste de tous vos fichiers. Le téléversement est terminé.

---

## Étape 4 : Activer GitHub Pages

1. Sur la page principale de votre dépôt, en haut, vous voyez plusieurs onglets : **"Code"**, **"Issues"**, **"Pull requests"**, etc. À droite, cliquez sur l'onglet **"Settings"** (Paramètres — c'est le dernier onglet, représenté par une roue dentée).
2. Vous arrivez sur la page des paramètres. Dans le menu vertical à gauche, faites défiler vers le bas jusqu'à la section **"Pages"**. Cliquez sur **"Pages"**.
3. Vous arrivez sur la page **"GitHub Pages"**.
4. Sous la section **"Build and deployment"** (Construction et déploiement), vous voyez un menu déroulant **"Source"** (Source). Cliquez dessus.
5. Sélectionnez **"Deploy from a branch"** (Déployer depuis une branche).
6. Juste en dessous, un nouveau menu déroulant apparaît : **"Branch"**. Cliquez dessus et sélectionnez **"main"**.
7. À droite du menu "Branch", un autre menu déroulant affiche **"/(root)"**. Laissez cette valeur.
8. Cliquez sur le bouton **"Save"** (Sauvegarder).
9. La page se recharge. En haut de la section Pages, vous voyez maintenant un message : "Your site is ready to be published at [URL]" (Votre site est prêt à être publié à [URL]). L'URL ressemble à : **https://votre-nom-utilisateur.github.io/eglise-lapuissance-bruxelles/**
10. **Patientez 1 à 5 minutes**. GitHub met quelques minutes à construire et publier votre site. Rafraîchissez la page (F5 ou Cmd+R) jusqu'à ce que le message change en : "Your site is live at [URL]" (Votre site est en ligne à [URL]).

---

## Étape 5 : Trouver et ouvrir l'URL du site en ligne

1. Toujours sur la page GitHub Pages (Settings → Pages), vous voyez le lien de votre site en vert : **"Your site is live at https://votre-nom-utilisateur.github.io/eglise-lapuissance-bruxelles/"**.
2. Cliquez sur ce lien. Votre site s'ouvre dans un nouvel onglet.
3. Vous voyez la page d'accueil de l'Église La Puissance Bruxelles ! Félicitations, votre site est en ligne.
4. Testez les liens : cliquez sur "Qui sommes-nous", "Première visite", etc. pour vérifier que tout fonctionne.
5. **Partagez l'URL** : copiez l'adresse depuis la barre d'adresse de votre navigateur et partagez-la avec votre communauté.

---

## Étape 6 : Comment remplacer un fichier ou une image plus tard

1. Retournez sur la page principale de votre dépôt GitHub (onglet "Code").
2. Naviguez jusqu'au fichier que vous voulez modifier. Par exemple, pour changer une image, allez dans le dossier "assets", puis "images" (si vous en avez créé un).
3. Cliquez sur le nom du fichier que vous voulez remplacer.
4. En haut à droite du contenu du fichier, vous voyez une icône de **crayon** ("Edit this file") et une icône de **poubelle** ("Delete this file"). Pour remplacer, cliquez sur l'icône de **crayon**.
5. Vous arrivez en mode édition. Pour remplacer une image, cliquez sur le lien **"Delete this file"** (la poubelle), confirmez la suppression, puis retournez au dossier parent et cliquez sur **"Add file"** → **"Upload files"** pour téléverser la nouvelle image.
6. Pour modifier un fichier texte (HTML, CSS, JS), cliquez sur le crayon, modifiez le texte directement dans l'éditeur, faites défiler vers le bas, tapez un message de commit (ex : "Mise à jour du texte d'accueil"), et cliquez sur **"Commit changes"**.
7. **Attendez 1 à 2 minutes** après chaque modification pour que GitHub Pages republie le site, puis rafraîchissez votre site dans le navigateur.

---

## Étape 7 : Branchement d'un nom de domaine personnalisé (optionnel)

1. Achetez un nom de domaine chez un registrar (ex : OVH, Gandi, Namecheap, GoDaddy). Par exemple : "eglise-lapuissance-bruxelles.be".
2. Sur GitHub, allez dans **Settings → Pages** de votre dépôt.
3. Vous voyez une section **"Custom domain"** (Domaine personnalisé). Tapez votre nom de domaine dans le champ (ex : "www.eglise-lapuissance-bruxelles.be"). Cliquez sur **"Save"**.
4. GitHub vérifie le domaine. Un message vous indique qu'un fichier CNAME est créé automatiquement.
5. **Chez votre registrar** (où vous avez acheté le domaine), connectez-vous à votre espace client et allez dans la gestion DNS de votre domaine.
6. Ajoutez un enregistrement **CNAME** :
   - Nom : "www" (ou "@" pour la racine)
   - Valeur : "votre-nom-utilisateur.github.io" (remplacez par votre vrai nom d'utilisateur GitHub)
   - TTL : laissez la valeur par défaut
7. Enregistrez les modifications DNS. La propagation peut prendre de **1 à 48 heures**.
8. Retournez sur GitHub Pages. Cochez la case **"Enforce HTTPS"** (Forcer HTTPS) pour sécuriser votre site.
9. Votre site est maintenant accessible via votre nom de domaine personnalisé.

---

## Étape 8 : Erreurs fréquentes et solutions

### Page blanche
- **Cause** : Le fichier index.html n'est pas à la racine du dépôt, ou son nom est mal orthographié (majuscule, espace, etc.).
- **Solution** : Vérifiez que le fichier s'appelle exactement "index.html" (minuscules, sans espace) et qu'il est bien à la racine (pas dans un sous-dossier).

### Erreur 404 (page non trouvée)
- **Cause 1** : Le lien interne pointe vers un fichier qui n'existe pas ou dont le nom est différent.
- **Solution** : Vérifiez la casse des noms de fichiers. Sur GitHub Pages, "Qui-sommes-nous.html" est différent de "qui-sommes-nous.html". Utilisez toujours des minuscules.
- **Cause 2** : Le site n'a pas encore fini de se construire après un commit.
- **Solution** : Attendez 2 à 3 minutes et rafraîchissez la page.

### Casse des noms de fichiers
- **Problème** : Vous avez nommé un fichier "Medias.html" avec un M majuscule, mais le lien dans le code pointe vers "medias.html" avec un m minuscule.
- **Solution** : Renommez le fichier pour qu'il corresponde exactement au lien. Sur GitHub, cliquez sur le fichier, puis sur le crayon, modifiez le nom en haut, et validez.

### Délai de publication
- **Problème** : Vous avez fait une modification mais elle n'apparaît pas sur le site.
- **Solution** : GitHub Pages met généralement 1 à 2 minutes pour republier un site après un commit. Parfois jusqu'à 5 minutes. Patientez et rafraîchissez (F5). Vous pouvez aussi vérifier l'état de publication dans l'onglet **"Actions"** de votre dépôt — si vous voyez un point vert, c'est publié ; un point orange, c'est en cours ; un point rouge, il y a une erreur.

### Images qui ne s'affichent pas
- **Cause** : Le chemin vers l'image est incorrect, ou l'image n'a pas été téléversée.
- **Solution** : Vérifiez que l'image est bien dans le dépôt (dans le bon dossier) et que le chemin dans le code HTML correspond exactement (sensible à la casse).

### Le menu ne s'ouvre pas sur mobile
- **Cause** : Le fichier JavaScript (main.js) n'a pas été téléversé ou son chemin est incorrect.
- **Solution** : Vérifiez que le fichier "assets/js/main.js" existe bien dans votre dépôt et que le chemin dans le HTML est exactement "assets/js/main.js".

---

**Votre site est maintenant en ligne et accessible au monde entier !**
