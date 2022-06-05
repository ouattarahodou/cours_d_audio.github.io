
// déclaration de variable de stockage
console.log("clique 1 fois");
console.log("je t'aime mon amour à moi seul");

var age;
age=25

var name= "chérie"
console.log(name);

var firstname= "boumouboum"
console.log(firstname);

// LES STRUCTURES CONDITIONNELLES
var age= 50; // prompt() a la place de chiffre 
if (age> 18) {
    console.log("vous etes majeur");
    
}else{
    console.log("vous etes mineur");
}

// LES BOULES FOR 
var index =0;
while (index < 5){
    console.log("Tour de boucle while n° "+index);
    index++;
}

// do while
var index =0;
do{
    console.log("Tour de boucle dowhile n° "+index);
    index++;
} while (index <4);

// TABLE DE MULTIPLICATION AVCE FOR
for (let index = 0; index <= 12; index++) {
    console.log("2 x "+index+" = "+index*2);
    
}

// TABLE DE MULTIPLICATION AVEC WHILE
var index=0
while (index< 13) {
    console.log("4 x "+index+" = "+index*4);
    index++ 
    
}

// TABLE DE MULTIPLICATION DO WHILE
var index =0 
do {
    console.log("8 x "+index+" = "+index*8);
    index++
} while (index < 13);

// TABLEAUX 
var fruits=["orange","pomme","ananas","poire"];
var names=["kofi","mimo","papi","mami"]
//  push("")= pour ajouter un élément
//  pop("")= retier le dernier element
//  shift("")= retier le premier element 
//  unshift("") rajouter un element au debut 
//  splice(2,1,"raisin")= modification de tableaux
//  join('-')= pour mettre des separation ou des point entre les mots

// LES FONCTIONS EN JS
var dit_salut = () => {
    console.log('merci');
    console.log('merci');
    
}








