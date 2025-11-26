# Site Portfolio – Aude Charrier

## À propos
Bienvenue sur mon portfolio !
Je suis Aude Charrier, en reconversion vers le développement web dans le secteur de Bordeaux.  

J’aime créer des interfaces **simples, interactives et porteuses de sens**.  
Mon approche combine **rigueur technique, créativité et expérience utilisateur**, avec un souci du détail et de la clarté.  
Ce portfolio est ma première réalisation “from scratch” pour mettre en valeur mes compétences et mes projets.

## Description
Un site portfolio pour présenter mon parcours de reconversion et mes premiers projets.  
Il comporte les pages suivantes :
- **Accueil** : une brève présentation de mon projet professionnel,
- **A Propos** : mon parcours détaillé, mes soft-skills, mon CV, ma projection à l'avenir,
- **Projets**  : liens vers les sources GitHub de mes premiers projets,  
- **Contact** : un formulaire pour me contacter.  

Réaliser ce site "from scratch" était une évidence et me permet de présenter certains projets en contexte, comme précisé ci-dessous.

**Avertissement** : Le site n'est pas encore responsive. La page A Propos est mieux optimisée sous Firefox que Chrome.

## Fonctionnalités
- **Animations et transitions** sur certaines pages :
    - Toutes pages : boutons avec hover effect, `.cta`, lignes 202 - 219 `style.css`
    - Page Accueil:  animation keyframes `.texte-presentation` `.photo-credits`, lignes 268 - 304 `style.css`
    - Page A Propos: - animation keyframes `.texte-glisse`, lignes 418 - 431 `style.css`
                    - transition `.soft-perso::after`(et autres), lignes 737 - 787 `style.css` + fichier `script_a_propos.js`
    - Page Projets : hover effect `.grid-projet a img`, lignes 819 - 827 `style.css`

- **Intégration de projets** : générateur aléatoire de citations, formulaire de contact
- **Accès aux projets** : Citations, ToDoList, Galerie, Formulaire, via leurs dépôts GitHub

- **Améliorations futures** :
   - rendre le site responsive pour petits écrans
   - ajout d'une checkbox "Données perosnnelles" sur le formulaire de contact
   - mise en forme du titre général du site

## Technologies utilisées
- **HTML** : structuration des pages, sections sémantiques, éléments structurants, formulaires
- **CSS** : mise en page, couleurs, typographies, animations, transitions, utilisation de **Flexbox et Grid** pour la structure et l'alignement des éléments  
- **JavaScript** :  
    - Événements (submit, click, mouseover, input…)  
    - Validation de formulaires et feedback utilisateur pour une expérience fluide  
    - Gestion du temps et des séquences pour certaines animations et contenus interactifs  
    - Création et intégration dynamique du générateur de citations dans le site  
    - Accès aux autres projets (ToDoList, Galerie, Formulaire) via liens vers leurs dépôts GitHub

## Liens
- [Voir la démo](https://audecharrier.github.io/Portfolio/) 
- [Voir le ReadMe des projets](./projets/Portfolio_ReadMe.md) 
- [Voir Ce que j'ai appris dans ce portfolio](./pdf/Les_commandements_du_codeur.pdf)

## Me contacter
Envie d'en savoir plus ? Intéressé.e par une alternance pour votre entreprise ? Ecrivez-moi !
- **Email** : [charrier.aude@gmail.com](mailto:charrier.aude@gmail.com)  
- **LinkedIn** : [Aude-Charrier-devweb](https://www.linkedin.com/in/aude-charrier-devweb/)  
- **GitHub** : [AudeCharrier](https://github.com/AudeCharrier/)








