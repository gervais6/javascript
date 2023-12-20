let mois=['janvier','fevrier','mars','avril','mai','juin','juillet'];
mois.pop();

document.write(['janvier','fevrier','mars','avril','mai','juin','juillet'] +'<br><br>');
mois.push('aout');


console.log(mois)

mois[1]='ferie';
console.log(mois)


//




document.write(mois +'<br><br>');

mois.length;
document.write(mois.length +'<br><br>');


document.write(mois['3'])


/*let tableau=[];
while(true){
let mois=prompt('veuillez enter un mois');
if(mois != ''){
   tableau.push(mois);
} else{
    break;
}
}


document.write(tableau);*/