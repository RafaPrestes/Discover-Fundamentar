const { inherits } = require('util') 
const { EventEmitter } = require ('events')

// criar o construtor do character
// herdar com inherits
// instanciar o character
// ouvir o emit
// console log
// emit

function Character(name) {
    this.name = name
}

//Herdar para o Character, todos os EventEmitter
inherits(Character, EventEmitter)

//instanciando o chapolin
const chapolin = new Character('Chapolin');

//Ouvindo o evento 'help' e executando uma função
chapolin.on('help', () => {
    console.log(`Eu! o ${chapolin.name} colorado!`)
})

console.log('Oh! E agora, quem poderá nos defender?')
//emitindo o evento 'help'
chapolin.emit('help')

