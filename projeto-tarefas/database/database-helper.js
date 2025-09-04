const db = require("./database");

const runQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if (err) {
                console.error("Erro ao executar a query", err);
                reject(err);
            } else {
                resolve("Adicionado com sucesso");
            }
        });
    });
};

const allQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) {
                console.log("Erro ao buscar!");
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

const getQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, rows) => {
            if (err) {
                console.log("Erro ao buscar!");
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const updateQuery= (sql, params) => {
    return new Promise((res, rej) => {
        db.run(sql, params, (err) => {
            if (err) {
                rej(err);
            } else {
                res("Alterado com sucesso!");
            }
        });
    });
};

const deleteQuery = (sql, params) => {
    return new Promise((res, rej) => {
        db.run(sql, params, (err) => {
            if (err) {
                rej(err);
            } else {
                res("Tarefa Excluída com sucesso!");
            }
        });
    });
};

exports.module = { runQuery, getQuery, allQuery, updateQuery, deleteQuery }