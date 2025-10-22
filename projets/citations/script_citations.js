
/******************************************************************************/
/********************* LISTE ALEATOIRE DE CITATIONS ***************************/

// ------------------------ définition des variables ----------------------------

const listeCitations = [
    "Tout le monde est un génie. Mais si vous jugez un poisson à sa capacité de grimper à un arbre, il vivra toute sa vie en croyant qu'il est stupide.",
    "La folie, c'est se comporter de la même manière et s'attendre à un résultat différent.",
    "Parler est un besoin, écouter est un art.",
    "Quand un homme a faim, mieux vaut lui apprendre à pêcher que de lui donner un poisson.",
    "Un jour j'irai vivre en Théorie, car en Théorie tout se passe bien.", 
    "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    "Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
    "Il n'est pas de vent favorable pour celui qui ne sait pas où il va.",
    "Si vos rêves ne vous font pas peur, c'est qu'ils ne sont pas assez grands.",
    "Fais de ta vie un rêve, et d'un rêve, une réalité.",
    "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.",
    "Il vaut mieux être détesté pour ce que tu es, plutôt qu'être aimé pour ce que tu n'es pas."
];

const auteurs = [
    "Albert Einstein",
    "Albert Einstein",
    "Goethe",
    "Confucius",
    "Pierre Desproges",
    "Nelson Mandela",
    "Abbé Pierre",
    "Sénèque",
    "Ellen Johnson Sirleaf",
    "Antoine de Saint-Exupéry",
    "Mark Twain",
    "Kurt Cobain",
];


const tableauEntier = new Array(12);

for (i=0; i<=11; i++) {
    tableauEntier[i] = new Array(2);
    tableauEntier[i][0] = listeCitations[i];  // colonne 0
    tableauEntier[i][1] = auteurs[i]          // colonne 1
};

//-----------------------------------------------------------------------------------------
// ----------------- définition de la fonction affichage aléatoire ------------------------

function affichAleatoire () {
        
    const min =0;
    const max = tableauEntier.length;
    let i = Math.floor(Math.random() * (max-min)) + min;              // nb aléatoire entier entre 0 et tableau.length

    let boxCitations = document.querySelector(".box-citations");      // <div> déjà en place ne html
    let phrase = document.querySelector(".phrase");                   // <p> déjà en plac en html
    let auteur = document.querySelector(".auteur");                   // <p> déjà en plac en html
    
    boxCitations.classList.add("fade-in");                            // fondu d'entrée, durée définie en css
    phrase.textContent = `${tableauEntier[i][0]}`;                    // j'injecte i dans la colonne 0, celle des citations
    auteur.textContent = `${tableauEntier[i][1]}`;                    // l'auteur correspondant dans colonne 1

    setTimeout(() => {
        boxCitations.classList.remove("fade-in"),
        boxCitations.classList.add("fade-out")                        // fondu de sortie, durée définie en css
        },
        4000);                                                        // on voit la citation 3 secondes avant que le fondu de sortie démarre

    boxCitations.classList.remove("fade-out");    
};

//--------------------------------------------------------------------------------------------
//--------------------------- exécution de la fonction ---------------------------------------

setInterval(affichAleatoire, 5000);                                   // durée totale d'une séquence : 4 sec.
                                                                      // puis renouvellement aléatoire (mais on peut tomber sur la même)