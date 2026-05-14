import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// LISTAR AGENDAMENTOS
router.get('/agendamentos', async (req, res) => {
    try {
        const comando = `
            SELECT 
                a.id_agendamento, 
                a.data_hora, 
                u.nome as usuario, 
                s.nome as servico
            FROM AGENDAMENTOS a
            INNER JOIN USUARIOS u ON a.id_usuario = u.id_usuario
            INNER JOIN SERVICOS s ON a.id_servico = s.id_servico
            WHERE 1=1
            ORDER BY a.data_hora DESC
        `;
        const agendamentos = await BD.query(comando);
        return res.status(200).json(agendamentos.rows);
    } catch (error) {
        console.error('Erro ao listar agendamentos', error.message);
        return res.status(500).json({ error: 'Erro ao listar agendamentos' });
    }
});

// BUSCAR AGENDAMENTO POR ID
router.get('/agendamentos/:id_agendamento', async (req, res) => {
    const { id_agendamento } = req.params;
    try {
        const comando = `
            SELECT 
                a.id_agendamento, 
                a.data_hora, 
                u.nome as usuario, 
                s.nome as servico
            FROM AGENDAMENTOS a
            INNER JOIN USUARIOS u ON a.id_usuario = u.id_usuario
            INNER JOIN SERVICOS s ON a.id_servico = s.id_servico
            WHERE a.id_agendamento = $1
        `;
        const resultado = await BD.query(comando, [id_agendamento]);
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        return res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao buscar agendamento' });
    }
});

// CADASTRAR AGENDAMENTO
router.post('/agendamentos', async (req, res) => {
    const { data_hora, id_usuario, id_servico } = req.body;
    try {
        const comando = `
            INSERT INTO AGENDAMENTOS (data_hora, id_usuario, id_servico) 
            VALUES ($1, $2, $3) RETURNING *
        `;
        const valores = [data_hora, id_usuario, id_servico];
        const resultado = await BD.query(comando, valores);
        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar agendamento' });
    }
});

// DELETAR AGENDAMENTO
router.delete('/agendamentos/:id_agendamento', async (req, res) => {
    const { id_agendamento } = req.params;
    try {
        const comando = `DELETE FROM AGENDAMENTOS WHERE id_agendamento = $1`;
        const resultado = await BD.query(comando, [id_agendamento]);
        
        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: 'Agendamento não encontrado' });
        }
        
        return res.status(200).json({ message: "Agendamento removido com sucesso" });
    } catch (error) {
        console.error('Erro ao remover agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao remover agendamento' });
    }
});

export default router;
