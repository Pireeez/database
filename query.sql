-- CREATE TABLE produtos (
--   produto_id INTEGER PRIMARY KEY AUTOINCREMENT,
--   nome TEXT NOT NULL,
--   preco REAL UNIQUE NOT NULL
-- );

-- INSERT INTO produtos (nome, preco) VALUES ('Banana', 13.33);

SELECT produtos.nome, produtos.preco FROM produtos;

-- DELETE FROM produtos;

-- SELECT * FROM produtos
-- WHERE produto_id = 2;
