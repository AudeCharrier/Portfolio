/*********************** GALERIE PHOTOS ****************************/

/*-------- tableau avec les 6 photos sous forme d'objets -------------- 
---------- les coordonnées src, alt et title d'origine ----------------
---------- et les nouvelles coordonnées à mettre au survol------------*/

const photos = [
  { selector: ".photo-1",
    src1: "images/logo_epoc_refait.webp",
    alt1: "Logo du laboratoire EPOC",
    title1: "Laboratoire universitaire EPOC",
    src2: "images/logo_ESC_refait.webp",
    alt2: "Logo Ecole Supérieure de Coaching",
    title2: "École Supérieure de Coaching",
  },
  { selector: ".photo-2",
    src1: "images/IMG_3226.webp",
    alt1: "photo de carotte sédimentaire",
    title1: "Carotte sédimentaire - Découpage en tranches pour analyser la perturbation biologique - Stage de Master",
    src2: "images/filtration.webp",
    alt2: "photo dispositif de filtration",
    title2: "Filtration échantillon d'eau naturelle - Ce sont les particules en suspension, retenues par le filtre, qui seront analysées - Technicienne chez EPOC",
  },
   { selector: ".photo-3",
    src1: "images/leco.webp",
    alt1: "Analyseur LECO Carbone",
    title1: "Analyseur LECO Carbone sédimentaire - Technicienne chez EPOC",
    src2: "images/icpms.webp",
    alt2: "Spectromètre de masse",
    title2: "Spectromètre de masse pour métaux dissous - Technicienne chez EPOC",
  },
  { selector: ".photo-4",
    src1: "images/Decathlon.webp",
    alt1: "photo intérieur Decathlon Mérignac",
    title1: "Bienvenue chez Decathlon Mérignac ! - Hôtesse de caisse",
    src2: "images/halle.webp",
    alt2: "Photo primeur La Halle de Gradignan",
    title2: "La Halle de Gradignan, primeur - Employée polyvalente",
  },
  { selector: ".photo-5",
    src1: "images/promo_octobre2019.jpg",
    alt1: "photo ma promotion de coaching",
    title1: "Promotion Coaching octobre 2019",
    src2: "images/Super_Coachs.webp",
    alt2: "Photo de promotion avec le directeur",
    title2: "La promo des Super Coachs avec le directeur !",
  },
  { selector: ".photo-6",
    src1: "images/Carlos-Bueno-03.webp",
    alt1: "photo séance de coaching",
    title1: "Reconstitution d'une séance de coaching - crédits Carlos Bueno",
    src2: "images/Carlos-Bueno-10.webp",
    alt2: "Photo outil de coaching",
    title2: "Exemple d'outil de coaching - crédits Carlos Bueno",
  },
];

let toggleMouseOver;                                // fonction qui fera effet toggle au survol entre les 2 sets de photos

photos.forEach((photo) => {
    const img = document.querySelector(photo.selector);
    
    img.addEventListener ("mouseover", () => {      // changement d'image au survol
    toggleMouseOver = setTimeout ( () => {

    if (img.src.endsWith(photo.src1)) {            // img.src n'est pas seulement la chaine de caractères de l'image, c'est tout le chemin url. donc on n'a jamais img.src === photo.src1 ! mais photo.src1 arrive à la fin de cette url
        img.src = photo.src2;                      // si c'est photo 1 on passe à photo 2
        img.alt = photo.alt2;
        img.title = photo.title2;
    }
    else {                                          // effet toggle entre les deux set d'images
        img.src = photo.src1;                       // si ce n'est pas photo1, alors c'est photo 2 et on repasse sur la photo 1
        img.alt = photo.alt1;
        img.title = photo.title1;
    }
}, 2500);                                           // temps pour voir l'image avant son changement
});
    img.addEventListener ("mouseout", () => {
    clearTimeout(toggleMouseOver);                  // désactive l'effet de mouseOver si on quitte trop tôt l'image : on peut amener la souris sur l'image au centre, 
});                                                 // en passant forcément par une image du bord, sans déclencher le mouseover sur celle du bord si on passe rapidement
});         

