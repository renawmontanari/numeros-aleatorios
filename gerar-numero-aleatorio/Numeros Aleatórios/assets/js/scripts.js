
'use strict'

// Gerando números aleatórios.
function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

// Numeros aleatórios no intervalo proposto.
console.log(randomNumberInterval(0, 30))
console.log(randomNumberInterval(515, 101))
console.log(randomNumberInterval(70, 500))