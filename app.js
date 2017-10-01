var app = require('./config/app_config');

app.get('/', function(req,res){
  pessoa = [{
    nome:'thalys',
    idade: 20
  }]
  res.json(pessoa);
});

//metodos rotas do produtos
app.get('/produtos', function(req,res){
  produtoController.list(function(resp){
    res.json(resp);
  })
});

app.post('/cadastro',function(req,res){
  var nome = req.body.nome;
  var descricao = req.body.descricao;
  var valor = req.body.valor;
  produtoController.save(nome, descricao, valor, function(resp){
    res.json(resp);
  })
})
