import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//  LISTAR SUBCATEGORIAS
router.get('/subcategoria', async (req, res) => {
    try {
        const comando = `SELECT * FROM SUBCATEGORIAS WHERE ativo = true`;
        const subcategorias = await BD.query(comando);

        return res.status(200).json(subcategorias.rows);
    } catch (error) {
        console.error('Erro ao listar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar subcategorias' });
    }
});

// CADASTRAR SUBCATEGORIA
router.post('/subcategoria', async (req, res) => {
    const { nome, id_categoria } = req.body;
    try {
        const comando = `
            INSERT INTO SUBCATEGORIAS (nome, id_categoria) 
            VALUES ($1, $2) RETURNING *
        `;
        const valores = [nome, id_categoria];
        const resultado = await BD.query(comando, valores);
        return res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar subcategoria', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar subcategoria' });
    }
});

//  ATUALIZAR SUBCATEGORIA
router.put('/subcategoria/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    const { nome, id_categoria } = req.body;

    try {
        // Verifica se subcategoria existe
        const verificar = await BD.query(
            `SELECT * FROM SUBCATEGORIAS WHERE id_subcategoria = $1 AND ativo = true`,
            [id_subcategoria]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ message: 'Subcategoria não encontrada' });
        }

        // Atualiza subcategoria
        const comando = `
            UPDATE SUBCATEGORIAS 
            SET nome = $1, id_categoria = $2
            WHERE id_subcategoria = $3
        `;
        const valores = [nome, id_categoria, id_subcategoria];

        await BD.query(comando, valores);

        return res.status(200).json({ message: 'Subcategoria atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar subcategoria', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar subcategoria' });
    }
});

//  DELETAR SUBCATEGORIA
router.delete('/subcategoria/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;

    try {
        const comando = `
            UPDATE SUBCATEGORIAS 
            SET ativo = false 
            WHERE id_subcategoria = $1
        `;
        await BD.query(comando, [id_subcategoria]);

        return res.status(200).json({ message: "Subcategoria removida com sucesso" });
    } catch (error) {
        console.error('Erro ao remover subcategoria', error.message);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
});

export default router;