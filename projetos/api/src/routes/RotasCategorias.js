import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//  LISTAR CATEGORIAS
router.get('/categoria', async (req, res) => {
    try {
        const comando = `SELECT * FROM CATEGORIAS WHERE ativo = true`;
        const categorias = await BD.query(comando);

        return res.status(200).json(categorias.rows);
    } catch (error) {
        console.error('Erro ao listar categorias', error.message);
        return res.status(500).json({ error: 'Erro ao listar categorias' });
    }
});

//  ATUALIZAR CATEGORIA
router.put('/categoria/:id_categoria', async (req, res) => {

    const { id_categoria } = req.params;

    // Campos corretos da tabela CATEGORIAS
    const { nome, descricao, cor, icone, tipo } = req.body;

    try {
        // Verifica se categoria existe
        const verificar = await BD.query(
            `SELECT * FROM CATEGORIAS WHERE id_categoria = $1 AND ativo = true`,
            [id_categoria]
        );

        if (verificar.rows.length === 0) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }

        // Atualiza categoria
        const comando = `
            UPDATE CATEGORIAS 
            SET nome = $1, descricao = $2, cor = $3, icone = $4, tipo = $5
            WHERE id_categoria = $6
        `;

        const valores = [nome, descricao, cor, icone, tipo, id_categoria];

        await BD.query(comando, valores);

        return res.status(200).json({ message: 'Categoria atualizada com sucesso!' });

    } catch (error) {
        console.error('Erro ao atualizar categoria', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
});

//  DELETAR 
router.delete('/categoria/:id_categoria', async (req, res) => {

    const { id_categoria } = req.params;

    try {
        const comando = `
            UPDATE CATEGORIAS 
            SET ativo = false 
            WHERE id_categoria = $1
        `;

        await BD.query(comando, [id_categoria]);

        return res.status(200).json({ message: "Categoria removida com sucesso" });

    } catch (error) {
        console.error('Erro ao remover categoria', error.message);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
});

export default router;