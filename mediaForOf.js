const notas = [10, 6.5, 8 ,7.5]

let somaNotas = 0;

for (let itens of notas) {
    somaNotas += itens
}

console.log(`A média das notas é ${somaNotas / notas.length}`)
