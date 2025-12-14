function prints(){
    const first= "Hello";
    const last = "World";
    // console.log(first + ',' +' '+ last + '!');
    let res= first.concat(','+' '+ last+'!').toUpperCase();
    console.log(res);
}
prints();


// //-----------------------------------------------


// const nombre1 = parseFloat(prompt(" saisir le nombre1 : "));
// const nombre2 = parseFloat(prompt(" Saisir le nombre2 : "));
// function Somme(nb1, nb2) {
//   if (isNaN(nb1) || isNaN(nb2)) {
//     console.log (" Veuillez saisir des nombres ");
//     return;
//   }
//   const res = nb1 + nb2;
//   console.log(`The sum of ${nb1} and ${nb2} is ${res}.`);
// }
// Somme(nombre1, nombre2);


// //--------------------------------------------------------


// const nombre = parseInt(prompt("veuillez saisir un nombre"));
// function isEvenOrOdd(nb) {
//   if (isNaN(nb)) {
//     return "Attention ! entrez un nombre";
//   }
//   if (nb % 2 === 0) {
//     return `${nb} is even.`;
//     }
//    else {
//     return `${nb} is odd.`;
//    }
// }
// console.log(isEvenOrOdd(nombre));


// //------------------------------------------------------------


// let chaine = prompt("veuillez saisir une chaine de caractere");

// function reverseString(c) {
//   if (typeof c !== 'string') {
//     return "Attention! veuillez entrer une chaine de caracteres";
//   }
//   let res = c.split('').reverse().join('');
//   return `The reversed string of "${c}" is "${res}"`;
// }
// console.log(reverseString(chaine));


// //---------------------------------------------------------------