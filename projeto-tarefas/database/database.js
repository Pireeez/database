const sqlite3 = require('sqlite3').verbose()

const DB_PATH = "../bancoTarefas.db";

const db = new sqlite3.Database(DB_PATH, (err) => {
    if(err){
        console.error("Erro ao conectar ao banco!", err.message)
    }else{

    }
});

module.exports = db;