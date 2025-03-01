const pokemonOriginal = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemonCopia = {...pokemonOriginal,
	nome: "Squirtle",
	tipo: "Água",
}

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
pokemonOriginal.ataques = []
pokemonOriginal.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemonCopia.ataques = [...pokemonOriginal.ataques]

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemonOriginal.ataques.push({
        nome: "Folha Navalha",
        dano: 45,
        tipo: "Grama",
        precisao: 100
    })

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemonCopia.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

//f) Imprima os dois objetos no console.
console.log(pokemonCopia, pokemonOriginal)