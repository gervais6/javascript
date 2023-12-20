9/*declaration de la variable
let age;

console.log(typeof age);

 age=12;
console.log(typeof age);

let prenom='gervais';
console.log(typeof prenom);

let vrai=null;
console.log(typeof vrai);

let tab=["tableau"];
console.log(typeof tab);


console.log('je suis'+' '+ prenom + ' ' +'j\'ai'+' '+age+'ans');
console.log(`je suis ${prenom} et j'ai ${age}ans`);


let infoGervais='je suis gervais '
infoGervais.length;
console.log(infoGervais.length);

let tab1=[1,'coco',12];

console.log(tab1);
console.log(tab1[1]);


let personne={

    taille:'gervais',
    age:20,
    salaire:500.000,
    quartier:'zone de captage',

}



console.log(personne.taille)*/

/* Faire une recherche sur les types conditions possibles en JavaScript. 

Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.  

 NB: 0   à   14 ans  => Enfants

  15   à   25 ans  => Adolescents

 25   à   64 ans  => Adultes

             65 ans et plus  => Aînés */




/*let age=prompt('veuillez entrez votre age svp')
    if(age<=14){
        alert('vous etes  encore un enfant');
    }else if(age<25){
        alert('vous etes  encore Adolescent');
    }else if(age<64){
        alert('vous etes  Adulte');
    }else{
        alert('vous etes Aînés ');
    }*/


     
  /*let mafontion=function(a,b){
      alert((a*b));
  }

  mafontion(prompt("entrer un nombre 1"),prompt("entrer un nombre 2"));*/



/*let i=0;
while(i<100){
    i++;
 document.write(i);

}*/

/*let i=0;
do{
    i++;
    document.write(i);
}
while(i<10)

*/


//let tab=[1,2,3,4];
 //document.write(tab.length);
 //document.write( tab[3]);
 //document.write(tab[3]='thales');

 //tab.pop();// enlever le dernier element d'un tableau
 //console.log(tab)
 //tab.push("coco")//ajouter un element dans un tableau
 //console.log(tab)
 //tab.shift();//enlever le premier element d'un tableau 
 //console.log(tab)

 //let tab=[1,2,3,4];
//let resultat =tab.map(num=>num*2);
//console.log(resultat);

  
/*const words=['gervais','sara','tha','andy','victoire','copine'];

const filters= words.filter((word) => word.length > 3);
console.log(filters);



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10





const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]




const array2 = ['a', 'b', 'c'];

array2.forEach((element) => console.log(element));*/


/*let ticket ={
    nomFilm:"avengers",
    prix :2000,
    numeroSalle:2,
}

let nom="nze";
document.write("Bonjour"+' '+ nom +' '+ "votre film" +' '+ ticket.nomFilm +' '+"et"+ ' ' +'votre ticket de salle est le n '+' '+ ticket.numeroSalle  )*/




/*let  totalLivres = 500 ;
let achatLivre=50;
let livreJeter=10;
let livreRacheter=5;

let total= totalLivres+achatLivre-livreJeter+livreRacheter;

console.log(total);


let affichageTotalLivres= 545;
console.log(affichageTotalLivres);*/


//Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés.

//Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.

/*let tabPlaylist=["Hello ","Halo","Lift Me Up",] ;
let totalMorceaux = ["ADESANYA","Under The Influence"," Water"];

tabPlaylist.push("Diamonds"," Allô");
console.log(tabPlaylist);
tabPlaylist.pop();
console.log(tabPlaylist)*/




/*const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}*/




/*Déclarez une variable listeMots qui est un tableau. 

Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”.

Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur. 

À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !

Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application. 

Si c’est le cas, on augmente la valeur de score de 1.

Vérifiez avec des console.log si le score final est correct.

Étape 2 : Testez le second mot
Demandez à l’utilisateur de rentrer le second mot. 

Faites une seconde structure conditionnelle pour vérifier si le second mot tapé par l’utilisateur correspond bien au second mot du tableau. 

Étape 3 : Testez le troisième mot
Recommencez une troisième fois pour la dernière case du tableau !*/


/*let  listeMots =["Cachalot", "Pétunia", "Serviette"];
 let scrore = 0;

 motutilisateur=prompt("veuillez rentrer un le " +  listeMots[0] );
 
 if(motutilisateur === listeMots[0]){
    scrore++;

    console.log(scrore);
 }else{
      
      console.log(scrore);
 }


 motutilisateur=prompt("veuillez rentrer un le " +  listeMots[1] );
 
 if(motutilisateur === listeMots[1]){
    scrore++;

    console.log(scrore);
 }else{
      
      console.log(scrore);
 }


 motutilisateur=prompt("veuillez rentrer un le " +  listeMots[2] );
 
 if(motutilisateur === listeMots[2]){
    scrore++;

    console.log(scrore);
 }else{
      
      console.log(scrore);
 }*/


 /*1. soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
Écrire un programme permettant de recopier dans tab3 tous les éléments positifs de tab1, 
et remplacer les éléments de tab2  par des zéros sans utiliser une boucle, et afficher les resultats dans le DOM*/

/*let tab1=[];

while(true){
let saisisUtilisateur=prompt("veuillez tapez un nombre positive");
if(saisisUtilisateur>0 ){
    tab1.push(saisisUtilisateur);
    break;
}

}

console.log(tab1);






let tab2=[];


while(true){
 saisisUtilisateur=prompt("veuillez tapez un nombre negative");
if(saisisUtilisateur<0){
    tab2.push(saisisUtilisateur);
    break;
   
}
}
console.log(tab2);
    


let tab3;
tab1.push(...tab2);
document.write(tab3=tab1);

let tab 3= tab1.concat(tab2);

 */



/*//selectionner un identifiant 
let demo=document.getElementById('demo');

//modifier le contenue dans un document html
demo.innerHTML="<h1>Gervais</h1>";
console.log(demo);
demo=document.querySelector('#demo').style.color="black";

//selectionner une class
let citation =document.getElementsByClassName('citation');
console.log(citation);

//selectionner une balise

let paragraphe=document.getElementsByTagName('p');
paragraphe[0].innerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(paragraphe[1]);


let background= document.querySelector('body').style.background="red";
paragraphe=document.querySelector("p").style.fontSize="30px";
*/




/*Manipulation des tableaux
1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2*/
 


/*let tab1 =[1,2,3,4,5];
let tab2 =[1,3,-3,-4];


let tab3=tab1.slice(2,5);
console.log(tab3);


let tab4=tab2.slice(0,2);
console.log(tab4);*/




/*2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
Sans utiliser les methodes javascript :
1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min */



//tache  08

/*let tab1=[0,1,3,5,-5,-7,-10];
let tab2 = "-1,3,-6,10,-23";

let tab3=tab1.filter((nbr)=> nbr>0);
document.write(tab3);


let tab4=tab2.replace("-1,3,-6,10,-23",'0,0,0,0,0')
document.write("<br><br>" +tab4)*/


//tache 09 
/* 1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2*/ 

/*let tab1=[2,3,-4,-7,-5]; //element tb1 qui ne se trouve pas  tb2= 2 ,3 ,-7 


let tab2=[-4,-5,1,10,0];//element tb1 qui se trouve tb2 =-4,-5


let tab11=tab1.slice(0,2);
console.log(tab11)

let tab12=tab1.slice(3,4);
console.log(tab12)


let tab3 = tab11.concat(tab12);
console.log(tab3);//element tb1 qui ne se trouve pas  tb2= 2 ,3 ,-7 
document.write("element tab1 qui ne se trouve pas dans la tab 2 <br><br>"  + tab3 +'<br>');


//element tb1 qui se trouve tb2 =-4,-5

let tab13=tab1.slice(2,3);
console.log( tab13)

let tab14=tab1.slice(4,5);
console.log( tab14)

let tab4=tab13.concat(tab14);
console.log(tab4);

document.write("<br> element tab1 qui se trouve dans la tab 2 <br><br>" +"  "+ tab4 + "<br>");*/


//tache 09 
/* 1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2*/ 

//let tab1=[];

/*while(true){
let utilisateur=prompt("veuillez votre nom ");
if(utilisateur !=="" || utilisateur ){
    tab1.push(utilisateur);
    break;
}
}

document.write(tab1);*/


/*let tab1 = [];
for ( let i = 0; i<5; i++){
    tab1[i] = prompt("Ajouter les elements du premier tableau (tab1)")
}

document.write("<p>-les elements de tab1</p>")
for ( let i = 0; i<5; i++){
    document.write("[",tab1[i],"]")
}


let tab2 = [];
for ( let i = 0; i<5; i++){
    tab2[i] = prompt("Ajouter les elements e deuxieme tableau (tab2)")
}


document.write("<p>-les elements de tab2</p>")
for ( let i = 0; i<5; i++){
    document.write("[",tab2[i],"]")
}

let diff1 = tab1.filter(val => !tab2.includes(val))
let diff2 = tab2.filter(val => !tab1.includes(val))

let tab3 = diff1.concat(diff2)
document.write("<p>-les elements different de tab1 et de tab2</p>")
document.write("tab3=","[",tab3,"]")

let tab4 = tab1.filter(val => tab2.includes(val))
document.write("<p>-les elements identique de tab1 et de tab2</p>")
document.write("tab4=","[",tab4,"]<br>")*/


//2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
//Sans utiliser les methodes javascript :
//1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  

/*function merge(left, right){
  
    var tab = [], l = 0, r = 0;

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            tab.push(left[l++]);
        } else {
            tab.push(right[r++]);
        }
    }
    return tab.concat(left.slice(l)).concat(right.slice(r));
}

function sort(tab){

    if (tab.length < 2) {
        return tab;
    }

    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, tab.length);
    tab.splice.apply(tab, p);
    return tab;
}

var tab = [5,3,87,1,-4,-99,0];
sort(tab);
document.write("Tab1 va donner: ","[",tab,"]<br>");*/



//1. soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
//Écrire un programme permettant de recopier dans tab3 tous les éléments positifs de tab1,
 //et remplacer les éléments de tab2  par des zéros sans utiliser une boucle, et afficher les resultats dans le DOM



 let tab1 =[1,2,3,4,5,-4,-7,10];
 document.write("les elements de la table <br>  <br>"+' '+tab1);


 tab3=tab1.filter((nbr)=>nbr>0);

 document.write("<br><br>les elements de table 3 <br><br>"+''+tab3);
 

 let tab2 ="-1,-6,7,-10,10";
 
 document.write("<br><br>les elements de la table 2 <br>  <br>"+' '+tab2);


 tab4=tab2.replace("-1,-6,7,-10,10" ,'0,0,0,0,0');

 document.write("<br><br> remplacer les elements de la table 2 par des zeros  <br><br>"+' '+tab4);

 /*Manipulation des tableaux
1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2*/

tab5=[];
let utilisateur;
for(i=0;i<5;i++){
 utilisateur=prompt("veuillez  remplir le premier 1");
 tab5.push(utilisateur);
}

document.write("<br><br>nombre entrez par l'utilisateur dans la tableau 5<br><br>"+tab5);

tab6=[];
let utilisateur1;
for(i=0;i<5;i++){
 utilisateur1=prompt("veuillez remplir le un nombre 2 ");
 tab6.push(utilisateur1);
}

document.write("<br><br>nombre entrez par l'utilisateur l'utilisateur dans la tableau 6<br><br>"+tab6);


document.write('<br><br>element du tableau 5 qui ne se trouve pas dans la tab6<br><br>')

tab7=tab6.filter((nbr)=>!tab5);


//let diff2 = tab2.filter(val => !tab1.includes(val))

document.write(tab7);


 /*2. Soit un tableau tab1=[5,3,87,1,-4,-99,0]
Sans utiliser les methodes javascript :
1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min*/