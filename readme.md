##EXPLICANDO O GET
-O .get é o metodo HTTP (função) de pegar algo, ou seja é a resposta q vou dar para o usuário, depois da função get tem uma função de callback, q é uma função sendo executada 'atrás' de outra.
app.get('/', function (req, res){}

ROTA
   Method HTTP - CRUD (CREAT, READ, UPDATE, DELETE)
     GET - Pega uma info
     POST - Cria uma info
     PUT - Altera toda a info
     PATCH - Altera parte da info
     DELETE - Apaga uma info

   Name - Um identificador da rota (no momento é o "/")
     
   Function (callback) - Responsavel por executar algum comando, ou seja vai receber uma requisição e vai retornar uma resposta,
   por exemplo: function (req, res), essa requisição nem sempre vai ter um VALOR.

   res.send() - é a nossa resposta, é como se fosse o nosso 'print()'.

STATUS
400 - bed request 
201 - created sucess

res.status(400).send({message :"Submit all fields for regsitration"})