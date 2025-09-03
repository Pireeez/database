-- CREATE TABLE produtos (
--   produto_id INTEGER PRIMARY KEY AUTOINCREMENT,
--   nome TEXT NOT NULL,
--   preco REAL UNIQUE NOT NULL
-- );

-- INSERT INTO produtos (nome, preco) VALUES ('Banana', 13.33);

-- SELECT produtos.nome, produtos.preco FROM produtos;

-- DELETE FROM produtos;

-- SELECT * FROM produtos
-- WHERE produto_id = 2;



-- Atividade 2
-- Crie uma tabela chamada pedidos, que deve possuir um identificador único, 
-- um campo numérico referenciando o identificador do produto, um campo para a 
-- quantidade e uma data armazenada em formato de texto ISO, como por exemplo 
-- “2025-08-25”. Construa então um helper específico para pedidos, contendo 
-- funções que permitam criar registros, listar todos os pedidos existentes 
-- (realizando um JOIN com a tabela de produtos para exibir também o nome do produto associado), 
-- atualizar a quantidade de um pedido já cadastrado e excluir pedidos pelo identificador. 
-- Em seguida, crie um fluxo assíncrono que simule operações reais: insira dois pedidos, 
-- liste-os, altere a quantidade do primeiro pedido, liste novamente, exclua o segundo e 
-- finalize com uma nova listagem para confirmar a exclusão.

