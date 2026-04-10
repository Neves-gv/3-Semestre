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
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria WHERE t.tipo = $1`;
        const transacoes = await BD.query(comando, [tipo]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
router.get('/transacao/categoria/:id_categoria', async (req, res) => {
    try {
        const { id_categoria } = req.params;
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria WHERE c.id_categoria = $1`;
        const transacoes = await BD.query(comando, [id_categoria]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
router.get('/transacao/subcategoria/:id_subcategoria', async (req, res) => {
    try {
        const { id_subcategoria } = req.params;
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria WHERE s.id_subcategoria = $1`;
        const transacoes = await BD.query(comando, [id_subcategoria]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/transacao', async (req, res) => {
    try {
        const { id_categoria, id_subcategoria, valor, data, descricao } = req.body;

        const comando = `
            INSERT INTO TRANSACOES 
            (id_categoria, id_subcategoria, valor, data_registro, descricao) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`;

        const resultado = await BD.query(comando, [id_categoria, id_subcategoria, valor, data, descricao]);

        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao criar transação', error.message);
        return res.status(500).json({ error: 'Erro ao criar transação' });
    }
});

router.put('/transacao/:id_transacao', async (req, res) => {
    try {
        const { id_transacao } = req.params;
        const { id_categoria, id_subcategoria, valor, data, descricao } = req.body;

        const comando = `
            UPDATE TRANSACOES 
            SET id_categoria = $1, 
                id_subcategoria = $2, 
                valor = $3, 
                data_registro = $4, 
                descricao = $5 
            WHERE id_transacao = $6 
            RETURNING *`;

        const resultado = await BD.query(comando, [
            id_categoria, id_subcategoria, valor, data, descricao, id_transacao
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
// listar transações por periodo
router.get('/transacao/periodo', async(req, res) => {
    const { data_inicio, data_fim } = req.query;
    if(!data_inicio || !data_fim){
        return res.status(400).json({ error: 'Data de início e data de fim são obrigatórias' });
    }
    try {
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
        TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
        TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
        t.tipo,
        c.nome AS categoria,
        s.nome AS subcategoria
        FROM TRANSACOES t
        LEFT JOIN CATEGORIAS c ON t.id_categoria = c.id_categoria
        LEFT JOIN SUBCATEGORIAS s ON t.id_subcategoria = s.id_subcategoria WHERE t.data_registro BETWEEN $1 AND $2 ORDER BY t.data_registro DESC`;
        const transacoes = await BD.query(comando, [data_inicio, data_fim]);

        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transações', error.message);
        return res.status(500).json({ error: 'Erro ao listar transações' })
    }
});

export default router;