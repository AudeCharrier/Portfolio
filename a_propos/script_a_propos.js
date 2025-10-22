
/*******************************************************************************/
/*********************** SOFT-SKILLS : ANIMATION DES TRAITS ********************/

const schemaSoftSkills = document.querySelector(".flex-soft-skills");

/* mouseenter : l'evenement se déclenche une seule fois à l'entrée,
VS mouseover : il se déclenche à chaque fois que la souris entre dans un sous-élément */

schemaSoftSkills.addEventListener("mouseenter", () => {
    document.querySelector(".soft-perso").classList.add("anime-width");           // selection d'un pseudo-éléments (les traits) impossibles en js
    document.querySelector(".soft-coaching").classList.add("anime-width");        // donc je sélectionne les blocs auxquels ils sont rattachés
    document.querySelector(".soft-science").classList.add("anime-height");
});

schemaSoftSkills.addEventListener("mouseleave", () => {
    document.querySelector(".soft-perso").classList.remove("anime-width");
    document.querySelector(".soft-coaching").classList.remove("anime-width");
    document.querySelector(".soft-science").classList.remove("anime-height");
});

/* mouseleave : l'evenement de sortie se déclenche uniquement quand on sort du bloc en entier
VS  mouseout : l'evenement se déclenche dès que la souris entre dans un sous-élément */
