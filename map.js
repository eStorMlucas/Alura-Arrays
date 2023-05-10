const notas = [10, 9.5, 8, 7, 6]

const notasNovas = notas.map(notas => {
    return notas + 1 > 10 ? 10 : notas + 1
})

console.log(notasNovas)

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesCorrigidos = nomes.map(nomes => nomes.toLocaleUpperCase()) 

console.log(nomesCorrigidos)
