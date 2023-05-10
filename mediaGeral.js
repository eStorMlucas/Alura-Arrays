const nomeSala = ['JavaScript', 'Java', 'Python']
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
const salas = [salaJS, salaJava, salaPython]

function calculaMedia(sala) {
    const somaDasNotas = sala.reduce((acc, notas) => acc + notas, 0) 

    return somaDasNotas / sala.length
}

for (let i = 0; i < salas.length; i++) {
    console.log(`A média da sala de ${nomeSala[i]} é ${calculaMedia(salas[i])}`)
}

