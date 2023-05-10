const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]
const listaAlunosEMedias = [alunos, medias]

function verificaPresenca(nomeAluno) {
    if (listaAlunosEMedias[0].includes(nomeAluno)) {
        const [alunos, medias] = listaAlunosEMedias
        const posiMedia = alunos.indexOf(nomeAluno)
        
        return console.log(`O aluno ${nomeAluno} está presente e sua média é : ${medias[posiMedia]}`)
    } else {
        return console.log(`O aluno não está presente`)
    }
}

verificaPresenca(alunos[2])

const valores = [100, 200, 300, 400, 500, 600]

for (let indice = 0; indice < valores.length; indice++) {
    console.log(valores[indice])
}

let das = 0;

while (das === 0) {
    console.log(`O valor de ${das} foi impresso`)
    das = 1
}