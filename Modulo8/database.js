const sqlite3 = require('sqlite3').verbose()

const DB_PATH = './meu_banco.db'

const db = new sqlite3.Database(DB_PATH, (err) => {
    if(err){
        console.error('Erro ao conectar ao banco de dados: ', err.message)
    }else{
        console.log('Conectado ao Banco de dados!')
    }
})

module.exports = db;