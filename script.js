const prompt = require("prompt-sync")()

let lista = []

function maior(){
    for(let i = 1; i <= 7; i++){
        let num = Number(prompt(`Digite um numero para adicionar na lista (${i}/7): `))
        lista.push(num)
        console.log(lista)
    }
    let max = Math.max(...lista)
    console.log(max)
}

maior()