//TextContent
const element = document.querySelector('.textContent')
//+= atribuição, poderia usar o = que apareceria só Olá Devs
element.textContent += ' Olá Devs'

//InnerText
const element2 = document.querySelector('#innerText')
element2.innerText = 'Olá Devs'

//InnerHTML - pode usar as tags html
const element3 = document.querySelector('.innerHTML')
element3.innerHTML = "Olá Devs <small>!!!</small>"

//Value
const element4 = document.querySelector('input')
console.log('----- Pegando o valor do próprio HTML -----')
console.log(element4.value) //pegando o valor do próprio html antes de atribuir o novo valor
element4.value = "estou no elemento"
console.log('')

//Style
console.log('----- Pegando o valor do estilo -----')
const estilo = document.querySelector('body')
estilo.style.backgroundColor = "#f9f3D2"
console.log(estilo.style.backgroundColor)
console.log('')

//Navegando pelos elementos
//parentNode parentElement (pegando o elemento pai)
console.log('----- Pegando o elemento pai -----')
const h1 = document.querySelector('h1')
console.log(h1.parentElement)
console.log('')

