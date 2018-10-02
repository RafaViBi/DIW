var mySet = new Set();
var array = new Array();
var a = 500000;

//Añadir con add
var start = new Date().getTime();

for (var n = 0; n < a; n++) {
    mySet.add(n);
}
var end = new Date().getTime();

console.log("Set.add: " + (end - start) / 1000 + " segundos.");

//Añadir con push
var start = new Date().getTime();

for (var n = 0; n < a; n++) {
    array.push(n);
}
var end = new Date().getTime();

console.log("Array.push: " + (end - start) / 1000 + " segundos.");

//Eliminar con delete
var start = new Date().getTime();

mySet.delete(n);

var end = new Date().getTime();

console.log("Set.delete: " + (end - start) / 1000 + " segundos.");

//Eliminar con pop

var start = new Date().getTime();

array.splice(1, 1);

var end = new Date().getTime();

console.log("Array.splice: " + (end - start) / 1000 + " segundos.");

//IndexOf
var start = new Date().getTime();

mySet.has(n);

var end = new Date().getTime();

console.log("Set.has: " + (end - start) / 1000 + " segundos.");

//Has

var start = new Date().getTime();

array.indexOf(n);

var end = new Date().getTime();

console.log("Array.indexOf: " + (end - start) / 1000 + " segundos.");