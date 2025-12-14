// let nombre = prompt("entrez un nombre");
// nombre = Number(nombre);

// function calculateFactorial(nb) {
//   if (isNaN(nb) || nb < 0 || !Number.isInteger(nb)) {
//     return "entrez un nombre positif";
//   }
//   let res = 1;
//   for (let i = 2; i <= nb; i++) {
//     res *= i;
//   }
//   return res;
// }
// let res = calculateFactorial(nombre);
// console.log(`The factorial of ${nombre} is ${res}.`);


//----------------------------------------------------------


// let nombre = prompt("entrez un nombre");
// nombre = Number(nombre);
// function isPrime(nb) {
//   if (isNaN(nb) || !Number.isInteger(nb) || nb <= 1) {
//     return false;
//   }
//   if (nb === 2 || nb === 3) {
//     return true;
//   }
//   if (nb % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(nb); i += 2) {
//     if (nb % i === 0){
//       return false;
//     }
//   }
//   return true;
// }
// if (isPrime(nombre)) {
//   console.log(`${nombre} is a prime number: true`);
//   }
//  else 
//   console.log(`${nombre} is a prime number: false`);


//-------------------------------------------------------


// const nbs = prompt("entrez une liste des nombres");
// const arr = nbs.split(' ').map(item=>Number(item.trim()));

// function sortAscending(arr) {
//   if (!Array.isArray(arr)) {
//     console.log("c'est pas d'un tableau");
//     return;
//   }
//   if (!arr.every(Number.isInteger)) {
//     console.log("le tableau doit contenir seulement des nombres entiers");
//     return;
//   }
//   return arr.sort((a, b) => a - b);
// }
// const tri = sortAscending(arr);
// console.log("Sorted array in ascending order:", tri);


//---------------------------------------------------------


const ele = prompt("Entrez des chiffres");
const tab = ele.split(' ').map(e => e.trim());
function removeDuplicates(tab) {
  if (!Array.isArray(tab)) {
    console.log("c'est pas d'un tableau!");
    return;
  }
  return [...new Set(tab)];
}
const ntab = removeDuplicates(tab);
console.log("Array with duplicates removed:", ntab);


//------------------------------------------------------------