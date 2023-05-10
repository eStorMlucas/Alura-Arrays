const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']
// const nomesSet = new Set(nomes);
// const nomesAtualizados = [...nomesSet]
const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)
