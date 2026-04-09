import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/transacao', async (req, res) => {
    try {
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria`;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
// atividades
router.get('/transacao/tipo/:tipo', async (req, res) => {
    try {
        const { tipo } = req.params;
        const comando = `SELECT t.tipo, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria where t.tipo = true`;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
router.get('/transacao/categoria/:id_categoria', async (req, res) => {
    try {
        const { id_categoria } = req.params;
        const comando = `SELECT c.id_cadastro, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria where where c.id_categoria = c.id_categoria`;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
router.get('/transacao/subcategoria/:id_subcategoria', async (req, res) => {
    try {
        const { id_subcategoria } = req.params;
        const comando = `SELECT s.id_subcategoria, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria where s.id_subcategoria = s.id_subcategoria`;
        const transacoes = await BD.query(comando);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/transacao', async (req, res) => {
    try {
        const { id_usuario, id_categoria, id_subcategoria, valor, data, descricao } = req.body;

        const comando = `
            INSERT INTO TRANSACOES 
            (id_usuario, id_categoria, id_subcategoria, valor, data, descricao) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`;

        const resultado = await BD.query(comando, [id_usuario, id_categoria, id_subcategoria, valor, data, descricao]);

        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao criar transação', error.message);
        return res.status(500).json({ error: 'Erro ao criar transação' });
    }
});

router.put('/transacao/:id_transacao', async (req, res) => {
    try {
        const { id_transacao } = req.params;
        const { id_usuario, id_categoria, id_subcategoria, valor, data, descricao } = req.body;

        const comando = `
            UPDATE TRANSACOES 
            SET id_usuario = $1, 
                id_categoria = $2, 
                id_subcategoria = $3, 
                valor = $4, 
                data = $5, 
                descricao = $6 
            WHERE id_transacao = $7 
            RETURNING *`;

        const resultado = await BD.query(comando, [
            id_usuario, id_categoria, id_subcategoria, valor, data, descricao, id_transacao
        ]);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ error: 'Transação não encontrada' });
        }

        return res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar transação', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar transação' });
    }
});

router.delete('/transacao/:id_transacao', async (req, res) => {
    try {
        const { id_transacao } = req.params;

        const comando = `DELETE FROM TRANSACOES WHERE id_transacao = $1 RETURNING *`;

        const resultado = await BD.query(comando, [id_transacao]);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ error: 'Transação não encontrada' });
        }

        return res.status(200).json({
            message: 'Transação excluída com sucesso',
            dadosExcluidos: resultado.rows[0]
        });

    } catch (error) {
        console.error('Erro ao deletar transação:', error.message);
        return res.status(500).json({ error: 'Erro ao deletar transação' });
    }
});

export default router;