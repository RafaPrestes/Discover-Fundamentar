//Arrow Function
console.log('-------- Arrow Function --------')
const ArrowName = (name) => {
    console.log(name)
}
ArrowName('Arrow Rafa')

console.log('')
console.log('-------- Try Catch --------')

/* ------------------------------------ */
//try catch
function sayMyName(name = '') {
    if(name === ''){
        throw new Error("Nome é obrigatório")
        }
    console.log(name)    
}

try {
    sayMyName('Try Catch Rafa')
} catch (error) {
    console.log(error)
}

console.log('depois do try catch')
console.log('')


/*transformar notas escolares 

Criar um algoritmo que transforme as notas numéricas para sistema de notas em caracteres tipo A B C

* de 90 pra cima - A
* de 80 a 89 - B
* de 70 a 79 - C
* de 60 a 69 - D
* de 50 a 59 - E
*/

console.log('-------- Sistema de notas escolares --------')

let score = 90

function getScore(score){
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreE = score >= 50 && score <= 59
let scoreFinal

if (scoreA) {
    scoreFinal = 'A'
} else if(scoreB){
    scoreFinal = 'B'
} else if (scoreC) {
    scoreFinal = 'C'
} else if (scoreD) {
    scoreFinal = 'D'
}else if (scoreE){
    scoreFinal = 'E'
}
else {
    scoreFinal = 'Nota Inválida'
}
    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-12))
console.log(getScore(55))
console.log(getScore(65))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))

/*Sistema de gastos familiar

Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas : []
    * despesas : []

Agora, criar uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está
com saldo positivo ou negativo, seguido do valor do saldo
*/
console.log('')
console.log('-------- Sistema de gastos familiar --------')

let family = {
    receitas: [2800 , 1600],
    despesas: [766, 800, 120, 120, 120, 600, 250, 363, 150, 320] 
}

function sum (array) {
    let total = 0

    for(let value of array){
        total += value
    }
    
    return total
}


function balance(){
    const calcularReceitas = sum(family.receitas)
    const calcularDespesas = sum(family.despesas)

    const total = calcularReceitas - calcularDespesas

    const saldoOk = total >= 0

    let textoSaldo = "negativo"

    if (saldoOk) {
        textoSaldo = "positivo"
    }

    console.log(`Seu saldo é: ${textoSaldo}, R$ ${total.toFixed(2)}`)

}

balance()