const express = require('express') //aqui ele esta chamando todos os pacotes do node_modules
const app = express() //essa é a nossa variavel principal

//o .get é o metodo (função) de pegar algo, ou seja é a resposta q vou dar para o usuário, depois da função get tem uma função de callback, q é uma função sendo executada 'atrás' de outra.
app.get('/', function (req, res) {
  res.send('Hello World') //aqui é a nossa resposta q o get está dando
})

app.listen(3000)