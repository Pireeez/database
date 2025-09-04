-- SQLite
-- CREATE TABLE pedidos (
-- pedido_id INTEGER PRIMARY KEY AUTOINCREMENT,
-- produto_id INTEGER NOT NULL,
-- quantidade INTEGER NOT NULL,
-- data_armazenada DATE,
-- FOREIGN KEY (produto_id) REFERENCES produtos (produto_id)
-- );

-- CREATE INDEX idx_pedidos
-- ON pedidos (pedido_id);

-- DROP INDEX idx_pedidos;

-- DROP INDEX IF EXISTS idx_pedidos;

-- DROP TABLE pedidos;

-- SELECT pedidos.pedido_id, pedidos.quantidade, pedidos.data_armazenada, produtos.nome FROM pedidos
-- INNER JOIN produtos ON produtos.produto_id = pedidos.produto_id;

-- UPDATE pedidos
-- SET quantidade = 3
-- WHERE pedido_id = 2;

DELETE FROM pedidos;

SELECT * FROM pedidos;