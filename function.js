/*creation d'une fonction avec parametre optionnel
const maFonction = function(texte){
    alert(texte);
}
;

maFonction();
maFonction('j\'aime la vie ');*/




/*creation d'une fonction flechee

const sommes = (a ,b)=>{
    alert('resultat : '+ (a+b));
}

sommes(20 ,5);*/



//Écrire un script qui demande à l’utilisateur 2 nombres, et d’afficher le résultat de la multiplication de ces 2 nombres au clic sur le bouton “voir résultat 

//exemple avec 4 et 5: "4 multiplié par 5 vaut 20"

const resultat=function(a,b){
    alert('resultat :' + (a*b));

}


resultat(prompt('enter un nombre 1'),prompt('enter un nombre 2'))


/*Écrire un script qui demande à l’utilisateur d’ajouter un nombre n. Calculer  le modulo de ce nombre par 4 
et afficher le résultat dans une phrase comme suit:"Si l'on divise 21 par 4 , le reste est de 1" */


const division=function(n,b=4){
    alert('le reste est :'+(n%b ) )
}


division(prompt('enter un nombre  n'))
