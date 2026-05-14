import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// LISTAR SERVIÇOS
router.get('/servicos', async (req, res) => {
    try {
        const comando = `SELECT * FROM SERVICOS ORDER BY nome`;
        const servicos = await BD.query(comando);
        return res.status(200).json(servicos.rows);
    } catch (error) {
        console.error('Erro ao listar serviços', error.message);
        return res.status(500).json({ error: 'Erro ao listar serviços' });
    }
});

// BUSCAR SERVIÇO POR ID
router.get('/servicos/:id_servico', async (req, res) => {
    const { id_servico } = req.params;
    try {
        const comando = `SELECT * FROM SERVICOS WHERE id_servico = $1`;
        const resultado = await BD.query(comando, [id_servico]);
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'Serviço não encontrado' });
        }
        return res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar serviço', error.message);
        return res.status(500).json({ error: 'Erro ao buscar serviço' });
    }
});

// CADASTRAR SERVIÇO
router.post('/servicos', async (req, res) => {
    const { nome, preco, descricao } = req.body;
    try {
        const comando = `
            INSERT INTO SERVICOS (nome, preco, descricao) 
            VALUES ($1, $2, $3) RETURNING *
        `;
        const valores = [nome, preco, descricao];
        const resultado = await BD.query(comando, valores);
        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar serviço', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar serviço' });
    }
});

// ATUALIZAR SERVIÇO
router.put('/servicos/:id_servico', async (req, res) => {
    const { id_servico } = req.params;
    const { nome, preco, descricao } = req.body;

    try {
        const verificar = await BD.query(
            `SELECT * FROM SERVICOS WHERE id_servico = $1`,
            [id_servico]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ message: 'Serviço não encontrado' });
        }

        const comando = `
            UPDATE SERVICOS 
            SET nome = $1, preco = $2, descricao = $3
            WHERE id_servico = $4
        `;
        const valores = [nome, preco, descricao, id_servico];
        await BD.query(comando, valores);

        return res.status(200).json({ message: 'Serviço atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar serviço', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar serviço' });
    }
});

// DELETAR SERVIÇO
router.delete('/servicos/:id_servico', async (req, res) => {
    const { id_servico } = req.params;
    try {
        const comando = `DELETE FROM SERVICOS WHERE id_servico = $1`;
        const resultado = await BD.query(comando, [id_servico]);
        
        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: 'Serviço não encontrado' });
        }
        
        return res.status(200).json({ message: "Serviço removido com sucesso" });
    } catch (error) {
        console.error('Erro ao remover serviço', error.message);
        return res.status(500).json({ error: 'Erro ao remover serviço' });
    }
});

export default router;
