/* function triplicarArray (arrayDeNumeros){
  const Array = []

  // for (let i = 0; i < arrayNumeros.length; i++)
  for (let i of arrayDeNumeros) {
    const multiplicarPorTres = i * 3
    Array.push(multiplicarPorTres)
  }
  return Array
}
console.log(triplicarArray([0, 25, 92, -2]))

///////////////////////////

function retornarPares(arrayDeNumeros) {
  const arrayNumero = []

  for (let i of arrayDeNumeros){
    if (i % 2 === 0){
      arrayNumero.push(i)
    }
  }
  return arrayNumero
}
console.log(retornarPares([20,12,15,88,99]))

//////////////////////////////////////////////////
function funcaoCallback (arrayDeNumeros, callback){
  const novaArray = callback(arrayDeNumeros)
  return  novaArray
}
console.log("Multiplicando por 3:", funcaoCallback([1,2,3,4,5,6,7,8,9], triplicarArray))
console.log("Somente par:", funcaoCallback([1,2,3,4,5,6,7,8,9], retornarPares))

//////////////////////////////////////////////////
const numero = [3,10,7,25,12,2,1,11,254]

const numerosTriplicados = numero.map((elemento, indice, arrayOriginal) =>{
return elemento * 3
})
console.log(numerosTriplicados)

const numeroPares = numero.filter((numeros) =>{
  return numeros % 2 === 0
})
console.log(numeroPares) */


///// PRATICA ////////////// 
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

function ArrayPokemons (poke){
  poke.vida = 100
}

const alterarVida  = pokemons.map((poke) => {
  ArrayPokemons(poke)
  return poke 
})
console.log(alterarVida)

const pokemonsVidaCheia = alterarVida

const nãoNomeada = pokemons.filter((fogo) =>{
  return fogo.tipo === 'fogo'
})
console.log(nãoNomeada)