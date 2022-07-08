//Criando o evento
const { EventEmitter } = require('events')
const ev = new EventEmitter()

//Ouvir Evento, mesmo nome do emit, no caso saySomething (sempre passar alguma função fazendo algo)
ev.on('saySomething', (message) => {
    console.log('Eu ouvi voce: ', message)
})

//once ele é usado para ouvir apenas uma vez o evento, no caso o primeiro evento
ev.once('saySomething', (message) => {
    console.log('Eu ouvi voce: ', message)
})

//Emitir Evento
ev.emit('saySomething',"Rafael")
ev.emit('saySomething',"Thais")