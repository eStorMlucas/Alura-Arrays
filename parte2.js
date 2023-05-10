const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)
console.log(sala1, sala2)

const problema2 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

problema2.splice(1, 2, 'Rodrigo')
console.log(problema2)

const salaJS = ['Evaldo', 'Camis', 'Mari']
const salaPy = ['Ju', 'Leo', 'Raquel']

const salasUnidas = salaJS.concat(salaPy)

console.log(salasUnidas)

const alns = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]
const listaAlunosEMedias = [alns, medias]

console.log(`A aluna da posição 1 da lista de alunos é: ${listaAlunosEMedias[0][1]} e a sua média é: ${listaAlunosEMedias[1][1]}`)