const db = require('./database.js');

const runQuery = (sql, params = [])=> {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if(err){
                console.error("Erro ao executar a query", err);
                reject(err)
            }else{
                resolve("Adicionado com sucesso",{sql:sql})
            }
        })
    })
}

const getQuery = (sql, params = []) => {
    return new Promise ((resolve,reject) => {
        db.get(sql, params, (err,row) => {
            if(err){
                console.log("Erro ao buscar!");
                reject(err)
            }else{
                resolve(row)
            }
        })
    })
}

const allQuery = (sql, params =[]) => {
    return new Promise ((resolve, reject) => {
        db.all(sql,params, (err, rows) => {
            if(err){
                console.log("Erro ao executar a query");
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })
}

module.exports = {runQuery, getQuery, allQuery};