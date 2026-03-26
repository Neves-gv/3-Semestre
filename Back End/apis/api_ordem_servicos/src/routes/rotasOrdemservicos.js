import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// LISTAR
router.get('/ordem_servicos', async (req, res) => {
    try {
        const query = `SELECT * FROM ordem_servicos ORDER BY id_ordem`;
        const resultado = await BD.query(query);

        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao listar ordens de serviço:', error.message);
        res.status(500).json({ erro: 'Erro ao listar ordens de serviço' });
    }
});

// CRIAR
router.post('/ordem_servicos', async (req, res) => {
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    if (!numero_ordem || !titulo || !id_usuario || !id_departamento) {
        return res.status(400).json({ erro: 'Campos obrigatórios ausentes' });
    }

    try {
        const comando = `
            INSERT INTO ordem_servicos 
            (numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento];
        
        await BD.query(comando, valores);
        res.status(201).json({ mensagem: 'Ordem de serviço cadastrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar ordem de serviço:', error.message);
        res.status(500).json({ erro: 'Erro interno ao cadastrar ordem de serviço' });
    }
});

// ATUALIZAR COMPLETO (PUT)
router.put('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    try {
        const verificar = await BD.query(
            `SELECT id_ordem FROM ordem_servicos WHERE id_ordem = $1`,
            [id_ordem]
        );
        
        if (verificar.rowCount === 0) {
            return res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
        }

        const comando = `
            UPDATE ordem_servicos 
            SET numero_ordem = $1, titulo = $2, descricao = $3, prioridade = $4, 
                status = $5, data = $6, id_usuario = $7, id_departamento = $8 
            WHERE id_ordem = $9
        `;
        const valores = [numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento, id_ordem];
        
        await BD.query(comando, valores);
        return res.status(200).json({ mensagem: 'Ordem de serviço atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar ordem de serviço:', error.message);
        return res.status(500).json({ erro: 'Erro interno ao atualizar ordem de serviço' });
    }
});

// ATUALIZAÇÃO PARCIAL (PATCH)
router.patch('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;
    const { numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento } = req.body;

    try {
        const campos = [];
        const valores = [];
        let i = 1;

        if (numero_ordem !== undefined) {
            campos.push(`numero_ordem = $${i++}`);
            valores.push(numero_ordem);
        }
        if (titulo !== undefined) {
            campos.push(`titulo = $${i++}`);
            valores.push(titulo);
        }
        if (descricao !== undefined) {
            campos.push(`descricao = $${i++}`);
            valores.push(descricao);
        }
        if (prioridade !== undefined) {
            campos.push(`prioridade = $${i++}`);
            valores.push(prioridade);
        }
        if (status !== undefined) {
            campos.push(`status = $${i++}`);
            valores.push(status);
        }
        if (data !== undefined) {
            campos.push(`data = $${i++}`);
            valores.push(data);
        }
        if (id_usuario !== undefined) {
            campos.push(`id_usuario = $${i++}`);
            valores.push(id_usuario);
        }
        if (id_departamento !== undefined) {
            campos.push(`id_departamento = $${i++}`);
            valores.push(id_departamento);
        }

        if (campos.length === 0) {
            return res.status(400).json({ erro: 'Nenhum campo enviado' });
        }

        valores.push(id_ordem);

        await BD.query(
            `UPDATE ordem_servicos SET ${campos.join(', ')} WHERE id_ordem = $${i}`,
            valores
        );

        res.status(200).json({ mensagem: 'Ordem atualizada parcialmente' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar ordem' });
    }
});

// DELETAR
router.delete('/ordem_servicos/:id_ordem', async (req, res) => {
    const { id_ordem } = req.params;

    try {
        const existe = await BD.query(
            'SELECT * FROM ordem_servicos WHERE id_ordem = $1',
            [id_ordem]
        );

        if (existe.rowCount === 0) {
            return res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
        }

        await BD.query(
            'DELETE FROM ordem_servicos WHERE id_ordem = $1',
            [id_ordem]
        );

        res.status(200).json({ mensagem: 'Ordem de serviço removida' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar ordem de serviço' });
    }
});

export default router;