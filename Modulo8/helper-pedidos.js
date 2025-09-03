const db = require("./database");

const createRecords = (sql, params = []) => {
    return new Promise((res, rej) => {
        db.run(sql, params, (err) => {
            if (err) {
                console.log("Erro ao criar um registro:", err.message);
                rej(err);
            } else {
                res("Registro Criado!");
            }
        });
    });
};

const allPedidos = (sql, params = []) => {
    return new Promise((res, rej) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                rej(err);
            } else {
                res(rows);
            }
        });
    });
};

const updatePedidos = (sql, params) => {
    return new Promise((res, rej) => {
        db.run(sql, params, (err) => {
            if (err) {
                rej(err);
            } else {
                res("Quantidade Alterada com sucesso!");
            }
        });
    });
};

const deletePedidos = (sql, params) => {
    return new Promise((res, rej) => {
        db.run(sql, params, (err) => {
            if (err) {
                rej(err);
            } else {
                res("Pedido Excluído com sucesso!");
            }
        });
    });
};

module.exports = { createRecords, allPedidos, updatePedidos, deletePedidos };
