## Iniciando a aplicação com o node
#### 1º Usar npm init -y (-y ele retorna yes para tudo, pode usar sem) para iniciar o node com o package.json
#### 2º Criei toda a estrutura do HTML, utilizando bootstrap para estilizar 

## Criando o Servidor
#### 1º Criei o arquivo server.js e mudei o index para .ejs
#### 2º Criei toda a estrutura de rota do server.js, passando a porta 8080 para rodar
#### 3º o res.render() sempre está esperando que o arquivo index.ejs esteja em uma pasta chamada views, entao criei a pasta e joguei o arquivo index.ejs dentro dela
#### 4º no terminal rodei o node server para rodar a aplicação

## Separando o layout
#### 1º Criei um arquivo separado para o head, header, footer e colei as respectivas tags dentro de cada um
#### 2º No index.ejs, chamei com <%- include('nomeDaTag'); %> , então ele chama o arquivo que eu passei dentro do parênteses

## Criação da pagina Sobre
#### 1º Criei a pagina sobre, chamei os arquivos head, header, footer da mesma forma
#### 2º Adicionei os links de Home e Sobre, para quando clicar navegar entre as páginas

## Pages e Partials - Organização
#### 1º Criei 2 pastas dentro da Views, uma Pages e uma Partials
#### 2º Dentro da Pages coloquei o arquivo about e index (são paginas), e dentro da Partials coloquei o head, header, footer (são partes de uma página)
#### 3º Arrumei os include, utilizando ../partials/ para ele voltar uma pasta e entrar na pasta partials, para assim pegar os arquivos dentro

## ForEach 
#### 1º No server.js dentro do meu get do index, criei um array para armazenar alguns objetos de itens
#### 2º Alterei o res.render passando um objeto que irá pegar meu array 
```javascript
teste
    res.render("pages/index", {
        qualitys: items
    })
```
#### 3º Agora no index.ejs fiz a construção de uma ul da seguinte forma:
```javascript
<ul>
     <% qualitys.forEach(function(quality){ %>
        <li>
            <strong><%= quality.title %></strong> <%= quality.message%>
        </li>
    <% }) %>              
</ul>
``` 
#### Utilizei o forEach no qualitys, que seria meu objeto que passei no res.render para pegar os items, passando uma função com um parametro para eu poder buscar meu title e message do server





