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
const element4 = document.querySelector('#primeiro')
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

//Pegando os elementos filhos
//childNodes, children, first e last child
//firstChild considera os espaços vazios, firstElementChild não
const el = document.querySelector('body')
console.log(el.firstElementChild)

//Criando e adicionando elementos
//createElement
const div = document.createElement('div')
div.innerText = 'Olá Dev'
//utilizando append prepend
const body = document.querySelector('body')
body.append(div)
//utilizando insertBefore
const script = body.querySelector('script')
body.insertBefore(div, script)


// --------- EVENTOS ----------- // 

const btn = document.querySelector("#btn")
btn.addEventListener("click", function() {
    this.style.color = "red"
    this.textContent = "clicou!"
})

var ev = document.querySelector("#event")
ev.style.width = "350px"
ev.addEventListener("dblclick", function(){
    this.textContent = "clicou!"
})

ev.addEventListener("mouseenter", function(){
    this.style.cursor = "pointer"
})

//Teclado
const inputEvent = document.querySelector('#eventTeclado')
inputEvent.onkeydown = function () {
    this.style.color = "#00f"
    console.log('rodei')
}