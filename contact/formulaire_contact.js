//----------------- DECLARATION DES VARIABLES -----------------------------------

//inputNom.value fige la valeur intiiale, null

//champs d'input

const inputNom = document.getElementById("nom"); 
const inputPrenom = document.getElementById("prenom"); 
const inputEmail = document.getElementById("email");
const inputEntreprise = document.getElementById("entreprise");
const inputMessage = document.getElementById("message");

const champs = [inputNom, inputPrenom, inputEmail, inputEntreprise, inputMessage];
const form = document.querySelector("form");

// regex

/* regex nom :
majuscules uniquement. apostrophe, espace et tiret */

/*regex prenom :
majuscules/minuscules + caractères accentués, apostrophe, espace, tiret*/

/* regex email : 
1. commencer par minusucles/majuscules/chiffres (au moins 1)
2.   - _ ou . (0 ou 1)
     minusucles, majuscules, chiffres (au moins 1)
    ce bloc : au moins 1 fois --> ça autorise les mails qui n'ont aucun - _ ou . en première partie, et ceux qui en ont plusieurs (mais jamais plusieurs côte-à-côte)
3. @
4. blocs 1 et 2
5.finir par . minuscules/majuscules (au moins 2 caractères)
*/

/* regex entreprise et message autorisent tous les caractères :
en mettant les champs, regex et messages d'erreurs chacun dans un tableau, et avec la boucle for, j'avais besoin d'un regex par champ,
pour incrémenter i de regex qui doit correspodnre au i du champ (idem pour message d'erreur)  */


const regexNom = /^[A-Z\'\s\-]+$/;
const regexPrenom = /^[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\xff\'\s\-]+$/;
const regexEmail = /^[a-zA-Z0-9]+([\-\_\.]?[a-zA-Z0-9]+)+@[a-zA-Z0-9]+([\-\_\.]?[a-zA-Z0-9]+)+\.[a-zA-Z]{2,}$/;
const regexEntreprise = /.*/;    
const regexMessage = /.*/;

const regex = [regexNom, regexPrenom, regexEmail, regexEntreprise, regexMessage];


// messages d'erreurs

/* null pour entreprise et message, car il n'y aura pas d'erreur de regex, qui autorise tous les caractères
si les champs sont vides, c'est l'erreur du vide qui s'en charge avant la vérif du regex */

const erreurNom = "Le nom doit être écrit en majuscules. Les caractères spéciaux acceptés sont ( ), (-) et (')."
const erreurPrenom = "Les caractères accentués sont autorisés, ainsi que ( ), (-) et (')."
const erreurEmail = "L'email doit commencer par une lettre ou un chiffre et comporter un seul @. Plusieurs (-), (_) et (.) sont autorisés, mais ne peuvent pas se suivre. L'extension finale est composée de 2 lettres minimum."
const erreurEntreprise = "";
const erreurMessage = "";

const erreurs = [erreurNom, erreurPrenom, erreurEmail, erreurEntreprise, erreurMessage];

//--------------------------------------------------------------------------------
//------------------------- DEFINITION DES FONCTIONS ------------------------------

// verifier si les champs sont remplis.
//ajout d'un <span> à côté du label du champ et d'une classe de mise en forme erreur

function spanChampsVides (champ) {
  
    if (champ.value ==="") {
        let span = document.createElement("span");
        span.className ="vide";
        span.innerText = `Veuillez renseigner votre ${champ.id}`;
        let label = document.querySelector(`label[for="${champ.id}"]`);
        label.appendChild(span);
        label.classList.add("erreur");
    }
};

/* cela aurait pu se faire avec un attribut required dans les input,
la verif vide fait double emploi avec la verif des regex, car tous les champs sont soumis à regex
j'aurais pu faire seulement une verif regex, et si entreprise et message étaient vides
(ils ont un regex qui englobe tous les caractères), afficher "veuillez remplir ce champ"*/

// vérifier les regex
//ajout d'un <span> avec message adapté selon le regex, à côté du label du champ et d'une classe de mise en forme erreur

function spanChampsRegex (champ, regex, erreur) {
    let resultat = regex.test(champ.value);
    if (!resultat) {
        let span = document.createElement("span");
        span.className = "regex";
        span.innerText = erreur;

        let label = document.querySelector(`label[for="${champ.id}"]`);
        label.appendChild(span);
        label.classList.add("erreur");
    }
};

// supprimer les messages d'erreur vide/regex

function removeSpanVideRegex (champ, regex) {
    champ.addEventListener("input", (e) => {
           
    if (champ.value !== "") {
        let resultat = regex.test(champ.value);
        if (resultat) {   
            let label = document.querySelector(`label[for="${champ.id}"]`);
          if (label.classList.contains("erreur")) {                                                           // prévoit le ca soù il n' ya pas de span d'erreur  ni de .erreur
          label.classList.remove("erreur");
          label.querySelector("span").remove();             
          }}}
})};

//--------------------------------------------------------------------------------------------
//------------------------ VERIFICATIONS AU SUBMIT ------------------------------------------

form.addEventListener("submit", (e) => {
  
  let formulaireValide = true;

  // Supprime les anciens messages d'erreur
  document.querySelectorAll("span.vide, span.regex").forEach(span => span.remove());
  champs.forEach(champ => champ.parentNode.classList.remove("erreur"));

  // Vérification des champs 
  for (let i = 0; i < champs.length; i++) {
    if (champs[i].value.trim() === "") {
      spanChampsVides(champs[i]);
      formulaireValide = false;

    } else if (!regex[i].test(champs[i].value)) {
      spanChampsRegex(champs[i], regex[i], erreurs[i]);
      formulaireValide = false;
    }
  }

  // Si invalide, on empêche l’envoi
  if (!formulaireValide) {
    e.preventDefault();
  } // Sinon, Formspree s’en charge tout seul et redirige vers la page de validation Formspree
});

// j'aurais voulu mettre une redirection sur une page html de remerciement, 
// mais avec Fromspree, impossible de faire fonctionner la redirection (avec input hidden name=_redirect ou name=_next).
// sinon il faudrait utiliser fetch (d'après chatgpt), pour afficher un message sur la page contact.html,
// mais impossible en version Formspree gratuite

//--------------------------------------------------------------------------------------------------
//------------------- APRES LE SUBMIT, SUIVI DE LA FRAPPE POUR EFFACER LES ERREURS ------------------

/* après un premier submit, dès que la frappe dans les champs est conforme, les messages d'errurs vides/regex sont supprimés
mais ils ne réapparaissent pas si besoin, ils n'apparaissent qu'après un submit */

for (let i = 0; i < champs.length; i++) {
  removeSpanVideRegex(champs[i], regex[i]);
}








