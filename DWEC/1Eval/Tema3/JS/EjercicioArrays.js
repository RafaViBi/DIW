var frutas = ['Manzana', 'Banana'];
var mySet = new Set();

console.time('loop');

mySet.add(1);
mySet.add(5);
mySet.add('paloma');

console.log("Tiempo de ejecucion del set.add: " );
console.timeEnd('loop');

console.time('loop');

frutas = frutas.push('Naranja');

console.log("Tiempo de ejecucion del array.push: " );
console.timeEnd('loop');

console.time('loop');

mySet.delete(1);

console.log("Tiempo de ejecucion del set.delete: " );
console.timeEnd('loop');

console.time('loop');

var ultimo = frutas.pop;

console.log("Tiempo de ejecucion del array.shift: " );
console.timeEnd('loop');

console.time('loop');

mySet.has(1);

console.log("Tiempo de ejecucion del set.has: " );
console.timeEnd('loop');

console.time('loop');

frutas.indexOf;

console.log("Tiempo de ejecucion del array.indexOf: " );
console.timeEnd('loop');