const express = require('express');
//instanciar o express
const app = express();

//"falando" pro express que a ferramenta (view engine) que iremos utilizar pra renderizar o html é o EJS
app.set("view engine" , "ejs");

//get está pegando a rota ( esta dentro do "/")
app.get("/", function(req,res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "studando EJS"
        },
        {
            title: "M",
            message: "ais aprendizado"
        },
        {
            title: "A",
            message: "prendizado é a chave para o sucesso"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "abedoria liberta"
        },
    ]
    res.render("pages/index", {
        qualitys: items
    })
})

app.get("/sobre", function(req,res) {
    res.render("pages/about")
})

//falando para o servidor que está rodando na maquina na porta 8080
app.listen(8080)
console.log("Rodando")