var numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function (numero) {
  console.log('forEach', numero);
});

// map
var dobro = numeros.map(function (numero) {
  return numero * 2
});
console.log('map', dobro); // 2, 4, 6, 8, 10

// filter
var maioresQueTres = numeros.filter(function (numero) {
  return numero > 3
});
console.log('filter', maioresQueTres); // 4, 5

// find
var tres = numeros.find(function (numero) {
  return numero === 3; m
});
console.log('find', tres); // 3

// every
var todosMaiorQueZero = numeros.every(function (numero) {
  return numero > 0
});
console.log('every', todosMaiorQueZero); // true

// some
var algumMaiorQueQuatro = numeros.some(function (numero) {
  return numero > 4
});
console.log('some', algumMaiorQueQuatro); // true

// reduce
var soma = numeros.reduce(function (soma, numero) {
  return soma + numero;
}, 0)
console.log('reduce', soma); // 15