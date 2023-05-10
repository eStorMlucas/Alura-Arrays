const notas = [10, 6.5, 8, 7.5]

notas.push(7)
notas.pop()

function calculaMedia(lista) {
    let calc = 0; 

    for (let i = 0; i < lista.length; i++) {
        calc += lista[i];
    }
    return calc / lista.length
}

console.log(`A média é: ${calculaMedia(notas)}`)
