// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão.
const frutas1 = {
    nome: "maçã",
    preco: 2,
    disponibilidade: false
}
const frutas2 = {
    nome: "banana",
    preco: 3,
    disponibilidade: true
}
const frutas3 = {
    nome: "laranja",
    preco: 1,
    disponibilidade: true
}
//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutas1, frutas2, frutas3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.table(sacolao)