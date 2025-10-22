/*********************************************************************/
/************************* TO DO LIST *********************************/

//---------------- DECLARATION DES VARIABLES ------------------------

const tâche = document.getElementById("tâche");
const domaine = document.getElementById("domaine");
const duree = document.getElementById("durée");
const deadline = document.getElementById("deadline");
const priorité = document.getElementById("priorité");

const champsObligatoires = [tâche, deadline, priorité];

const liste = document.getElementById("liste");
const form = document.querySelector("form");

//------------------------------------------------------------------------------------
//---------------------------DECLARATION DES FONCTIONS--------------------------------

/* détecter les champs input vides et afficher un message d'erreur
au niveau du label
stocker la valeur true or false (rempli ou vide) pour l'exploiter ensuite */

function spanChampsVides (champ, objet) {
    
    let rempli = true;
    
    if (champ.value.trim() === "") {
        let span = document.createElement("span");
        span.className ="vide";
        span.innerText = "Veuillez renseigner ce champ";
        
        let label = document.querySelector(`label[for="${champ.id}"]`);
        label.appendChild(span);
        label.classList.add("erreur");
        
        rempli = false;
    }
        return objet[champ.id] = rempli;
}

/* vérifier si la date renseignée est postérieure à aujourd'hui */

function verifDate (deadline) {
    
    let dateOk = true;
    
    const deadlineValue = deadline.value;                                    // la date est encore une chaine de caractères
    const [year, month, day] = deadlineValue.split('-').map(Number);         // transformer la date en trois nombres

    const dateChoisie = new Date(year, month - 1, day);                      // en JS les mois vont de 0 à 11 : je transforme le mois recueilli pour le
                                                                             // comparer ensuite à la date d'aujourd'hui
    const dateAujourdhui = new Date();

    if (dateChoisie < dateAujourdhui) {
        alert("La date limite doit être postérieure à aujourd'hui !");
        dateOk = false;
}
    return dateOk;
};

/* création d'un input checkbox */

function creationCheckBox (p) {                                             // la checkbox sera associée à son paragraphe (future tâche)
    const checkbox = document.createElement("input");                       // création
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {                             // changement de style du paragraphe si checked
        p.classList.toggle("checked");
    });
    return checkbox; 
}

/* création du <div> qui contiendra checkbox + <p> de la tâche */

function creationBoxTache (priorité, tâche, duree, domaine, deadline) {      // dans l'appel de la fct il y aura déjà priorité.value (et autres), 
    const boxTache = document.createElement("div");                          // donc je ne peux pas écrire dans la définition priorité.value. 
                                                                             // sinon il appliquera priorité.value.value et ça revient au sélecteur html
    const p = document.createElement("p");          
    p.innerText =`${tâche} - ${duree} - ${domaine} - avant le : ${deadline}`;
    p.className =("priorite");

    switch (priorité) {                                                      // style selon la priorité
        case "Haute" : p.classList.add("priorite-haute"); break;
        case "Moyenne" : p.classList.add("priorite-moyenne"); break;
        case "Basse" : p.classList.add("priorite-basse"); break;
        };

        const checkbox = creationCheckBox(p);
        boxTache.appendChild(checkbox);                                     // ajout au DOM
        boxTache.appendChild(p);
        
        return boxTache;
    };

/* création du bouton de modification */

function creationBtnModif () {
    const btnModif = document.createElement("button");
    btnModif.className="modifier";
    btnModif.innerHTML= `<ion-icon name="pencil-outline"></ion-icon>`;        // icone du bouton

    btnModif.addEventListener("click", (e) => {                               // contenu éditable au clic
        const p = e.target.closest(".box").querySelector("p");
        p.contentEditable = true;
        p.focus();
                                                                            
        const stopEnter = (e) => {                                                // pour sortir intuitivement de la frappe : je vais faire un écouteur 
            if (e.key === "Enter") {                                              // keypress avec arrêt à la touche Enter
                //e.preventDefault()  pour empêcher le retour ligne : pas nécessaire                                                            
                p.contentEditable = false;
                p.removeEventListener("keypress", stopEnter);                    // mais je dois enlever l'écouteur,
            }};                                                                  // sinon, ça crée un nouvel écouteur keypress à chaque frappe future !  
        p.addEventListener("keypress", stopEnter);                               // j'ajoute la fonction stopEnter à l'event keypress, c'est ce qui permet 
        });                                                                      // de caractériser cet écouteur pour l'enlever ensuite
                                                                                // et il fallait définir la fonction stopEnter avant de l'intégrer à l'event keypress
    return btnModif;
};

/* création du bouton supprimer*/

function creationBtnSupp () {
    const btnSupp = document.createElement("button");
    btnSupp.className="supprimer";
    btnSupp.innerHTML=`<ion-icon name="trash-outline"></ion-icon>`;               // icone du bouton
    btnSupp.addEventListener("click", (e) => {
       if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {      // confirmation avant suppression
            e.target.closest(".box").remove();                                    // cette .box est <div> qui contient : checkbox + p + <div> des boutons
    }})
    return btnSupp;
};

/* suppression des messages d'erreurs pour champ vide*/

function removeSpanVide (champ) {
    champ.addEventListener("input", (e) => {
    e.preventDefault();
    let label = document.querySelector(`label[for="${champ.id}"]`);
    if (".erreur") {
        label.classList.remove("erreur");
        label.querySelector("span").remove();   
    }}
)};

       
//--------------------------------------------------------------------------------------
//----------------------------SCRIPT---------------------------------------------------
       
form.addEventListener("submit", (e) => {   
    e.preventDefault();

    let vides = document.querySelectorAll(".vide");                                     // on enlève les messages d'erreurs pour éviter une accumulation,
    vides.forEach(vide => vide.remove());                                               // avant de checker les champs vides

    let labels = document.querySelectorAll("label");
    labels.forEach(label => {
        if (".erreur") {
            label.classList.remove("erreur")
        }
});
  
    const resultatsVides = {};                                                        // l'objet dans lequel stocker les true/false de la fonction
                                                                                      // de vérification des champs vides
    for (i=0; i < champsObligatoires.length; i++) {
    spanChampsVides(champsObligatoires[i], resultatsVides);
    };

    const dateOk = verifDate(deadline);                                              // vérification de la date

    if (Object.values(resultatsVides).includes(false) || dateOk === false) {         // si un des champs est vide ou si la date n'est pas valide, pas de submit
        return;
    } else {                                                                        // sinon : exécution
       
    const classeBox = document.createElement("div");                                 // crééation de <div .box> qui contiendra tout
    classeBox.className="box";
    const btnBox = document.createElement("div");                                    // création du <div> qui contiendra les boutons

    const tacheBox = creationBoxTache(priorité.value, tâche.value, duree.value, domaine.value, deadline.value);   // création checkbox + tâche
    const modifBtn = creationBtnModif();                                             // création des boutons
    const suppBtn = creationBtnSupp();
    
    btnBox.appendChild(modifBtn);                                                    // ajout au DOM
    btnBox.appendChild(suppBtn);
    classeBox.appendChild(tacheBox);
    classeBox.appendChild(btnBox);
    liste.appendChild(classeBox);
    
    form.reset();                                                                   // réinitialiser le formulaire pour la noouvelle tâche
    
}});

//--------------------------------------------------------------------------------------------------
//------------------- APRES LE SUBMIT, SUIVI DE LA FRAPPE POUR EFFACER LES ERREURS ------------------

/* après un premier submit, dès que la frappe dans les champs est conforme, les messages d'errurs vides sont supprimés
mais ils ne réapparaissent pas si besoin, ils n'apparaissent qu'après un submit */

for (let i = 0 ; i < champsObligatoires.length ; i++) {
    removeSpanVide(champsObligatoires[i]);
};