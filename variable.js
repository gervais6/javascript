let prenom="gervais";


let age=27;


console.log(typeof age);

console.log(`je suis ${prenom} et j'ai ${age}ans`);


let tab=[12,"gervais",['pomme',"red"]];
console.log(tab);
console.log(tab[2][0]);


//object


let personne={
    nom :"gervais",
    age:17,
    quartier:"zone de captage",
}

console.log(personne.quartier);



//condition if


let ages=prompt("saisir votre age");
 

if (ages<=14) {

    alert("vous etes un enfant ")
    
}


else if(ages<=25){

    alert("vous etes un adolescent ")

}

else if(ages<=64){

    alert("vous etes un Adulte ")

}

else{
    alert("vous un Anee")
}
