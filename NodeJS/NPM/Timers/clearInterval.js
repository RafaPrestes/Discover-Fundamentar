// clearInterval irá cancelar o setInterval
const timeOut = 1000

const checking = () => {
    console.log("checking!")
}

//guardando o setInterval
let interval = setInterval(checking, timeOut)

//Função que está cancelando o interval depois de 4 segundos
//(o 1º segundo é como preparação, se eu quiser que apareca 3 "checking" tenho q usar 4000 milissegundos)
setTimeout( () => clearInterval(interval), 4000)