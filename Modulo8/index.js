const db = require('./database');
const { allQuery, runQuery, getQuery }= require('./database-helper');

const adicionaProduto = async() => {
    const sql = `
    INSERT INTO produtos (nome,preco) VALUES ('mouse',80.00),('teclado',150.00);
    `;
    try {
        const addProduto = await runQuery(sql)
        console.log(addProduto);
    } catch (error) {
        console.log(error);
    }
}

const buscaProduto = async() => {
    const sql = `SELECT * FROM produtos WHERE produto_id = 1;`
    try {
        const produto = await getQuery(sql);
        console.log(produto);
    } catch (error) {
        console.log(error);
    }
}

const listaProdutos = async() => {
    const sql = `SELECT produtos.nome, produtos.preco FROM produtos;`;
    try {
        const produto = await allQuery(sql)

        produto.forEach(item => {
            console.log(`Produto: ${item.nome} - ${item.preco}`);
        });

    } catch (error) {
        console.log(error);
    }
}

//adicionaProduto();
// buscaProduto();
listaProdutos();

