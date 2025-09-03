const db = require("./database");
const prompt = require("prompt");
const schema = {
    properties: {
        modo: {
            message: "Qual Operação deseja realizar?",
            type: "number",
        },
    },
};
const ope = [
    "Escolha um Número:",
    "1 - Criar Registros",
    "2 - Lista Registros",
    "3 - Alterar Quantidade Registros",
    "4 - Deletar Registros",
];

const {
    createRecords,
    allPedidos,
    updatePedidos,
    deletePedidos,
} = require("./helper-pedidos");

const criaRegistros = async () => {
    const sql = `INSERT INTO pedidos (produto_id, quantidade, data_armazenada) VALUES (5, 4, '2025-09-03'), (6, 1, '2025-09-03')`;
    try {
        const registro = await createRecords(sql);
        console.log(registro);
    } catch (error) {
        console.log(error);
    }
};

const listaRegistros = async () => {
    const sql = `SELECT pedidos.pedido_id, pedidos.quantidade, pedidos.data_armazenada, produtos.nome FROM pedidos
INNER JOIN produtos ON produtos.produto_id = pedidos.produto_id; `;
    try {
        const listaRegistro = await allPedidos(sql);
        console.log(listaRegistro);
    } catch (error) {
        console.log(error);
    }
};

const alteraQtdRegistro = async () => {
    const sql = `UPDATE pedidos SET quantidade = ? WHERE pedido_id = ?;`;
    const params = [5, 2];
    try {
        const update = await updatePedidos(sql, params);
        console.log(update);
    } catch (error) {
        console.log(error);
    }
};

const deletaRegistro = async () => {
    const sql = `DELETE FROM pedidos WHERE pedido_id = ?`;
    const params = [1];
    try {
        const deleta = await deletePedidos(sql, params);
        console.log("Registro deletado com sucesso!");
        console.log(deleta);
    } catch (error) {
        console.log(error);
    }
};

const exibeMenuOperacoes = () => {
    console.clear();
    ope.forEach((item) => {
        console.log(item);
    });

    prompt.get(schema, (err, result) => {
        if (err) {
            return console.log("Opção inválida!", err);
        }
        if (result.modo === 1) {
            return criaRegistros();
        }
        if (result.modo === 2) {
            return listaRegistros();
        }
        if (result.modo === 3) {
            return alteraQtdRegistro();
        }
        if (result.modo === 4) {
            return deletaRegistro();
        }
    });
};

exibeMenuOperacoes();

//listaRegistros();
//criaRegistros();
//alteraQtdRegistro();
//deletaRegistro();

// Atividade 2

// Crie uma tabela chamada pedidos, que deve possuir um identificador único,
// um campo numérico referenciando o identificador do produto, um campo para a
// quantidade e uma data armazenada em formato de texto ISO, como por exemplo
// “2025-08-25”. Construa então um helper específico para pedidos, contendo funções
// que permitam criar registros, listar todos os pedidos existentes

// (realizando um JOIN com a tabela de produtos para exibir também o nome do produto associado),
// atualizar a quantidade de um pedido já cadastrado e excluir pedidos pelo identificador.
// Em seguida, crie um fluxo assíncrono que simule operações reais: insira dois pedidos,
// liste-os, altere a quantidade do primeiro pedido, liste novamente, exclua o segundo e
// finalize com uma nova listagem para confirmar a exclusão.
