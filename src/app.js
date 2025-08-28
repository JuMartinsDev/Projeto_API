const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//mongoose
const mongose = require('mongoose')
//configurar a conexão
mongose.connect("mongodb://rm98601:0305@localhost:27017/?authSource=admin")
.then(() => {
    console.log('Conectando')
})
.catch((error) =>{
    console.log(`Erro ao tentar conectar no mongo ${error}`)
})

//Habiltar o CORS
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Criar rotas
const index = require("./routes/index")

app.use("/", index)

module.exports = app;
