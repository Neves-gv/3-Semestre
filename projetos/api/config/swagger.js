const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Produtos',
        description: 'Documentação da API de gerenciamento financeiro - FinanControl',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'Servidor local (localhost)' },
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'categoria', description: 'Operações relacionadas às categorias' },
        { name: 'subcategoria', description: 'Operações relacionadas às subcategorias' }
    ],

    paths: {
        // ================= USUÁRIOS =================
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário cadastrado com sucesso!" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar usuário',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        schema: { type: 'integer', example: 1 }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" }
                        }
                    }
                },
                responses: {
                    200: { description: "Usuário atualizado com sucesso!" },
                    404: { description: "Usuário não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            },

            delete: {
                tags: ['Usuários'],
                summary: 'Remover usuário',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        schema: { type: 'integer', example: 1 }
                    }
                ],
                responses: {
                    200: { description: "Usuário removido com sucesso!" },
                    404: { description: "Usuário não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        // ================= LOGIN =================
        "/login": {
            post: {
                tags: ['Autenticação'],
                summary: 'Realizar Login',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Login_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: { $ref: "#/components/schemas/Resposta_Login" }
                            }
                        }
                    },
                    400: { description: "Email e senha obrigatórios" },
                    401: { description: "Credenciais inválidas" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        // ================= CATEGORIAS =================
        "/categoria": {
            get: {
                tags: ["categoria"],
                summary: "Listar categorias",
                responses: {
                    200: {
                        description: "Categorias listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Categoria' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            post: {
                tags: ["categoria"],
                summary: "Criar categoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Criar_Categoria" }
                        }
                    }
                },
                responses: {
                    201: { description: "Categoria criada com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        "/categoria/{id_categoria}": {
            put: {
                tags: ["categoria"],
                summary: "Atualizar categoria",
                parameters: [
                    { name: "id_categoria", in: "path", required: true, schema: { type: "integer", example: 1 } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": { schema: { $ref: "#/components/schemas/Atualizar_Categoria" } }
                    }
                },
                responses: {
                    200: { description: "Categoria atualizada com sucesso" },
                    404: { description: "Categoria não encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            },

            delete: {
                tags: ["categoria"],
                summary: "Remover categoria",
                parameters: [
                    { name: "id_categoria", in: "path", required: true, schema: { type: "integer", example: 1 } }
                ],
                responses: {
                    200: { description: "Categoria removida com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        // ================= SUBCATEGORIAS =================
        "/subcategoria": {
            get: {
                tags: ["subcategoria"],
                summary: "Listar subcategorias",
                responses: {
                    200: {
                        description: "Subcategorias listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Subcategoria' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            post: {
                tags: ["subcategoria"],
                summary: "Criar subcategoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": { schema: { $ref: "#/components/schemas/Criar_Subcategoria" } }
                    }
                },
                responses: {
                    201: { description: "Subcategoria criada com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        "/subcategoria/{id_subcategoria}": {
            put: {
                tags: ["subcategoria"],
                summary: "Atualizar subcategoria",
                parameters: [
                    { name: "id_subcategoria", in: "path", required: true, schema: { type: "integer", example: 1 } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": { schema: { $ref: "#/components/schemas/Atualizar_Subcategoria" } }
                    }
                },
                responses: {
                    200: { description: "Subcategoria atualizada com sucesso" },
                    404: { description: "Subcategoria não encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ["subcategoria"],
                summary: "Remover subcategoria",
                parameters: [
                    { name: "id_subcategoria", in: "path", required: true, schema: { type: "integer", example: 1 } }
                ],
                responses: {
                    200: { description: "Subcategoria removida com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        // ================= TRANSAÇÕES =================
        "/transacao": {
            get: {
                tags: ["transacao"],
                summary: "Listar todas as transações ativas",
                responses: {
                    200: {
                        description: "Transações listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Transacao' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            post: {
                tags: ["transacao"],
                summary: "Criar nova transação",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Criar_Transacao" }
                        }
                    }
                },
                responses: {
                    201: { description: "Transação criada com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/transacao/tipo/{tipo}": {
            get: {
                tags: ["transacao"],
                summary: "Listar transações por categoria",
                parameters: [
                    {
                        name: "id_categoria",
                        in: "query",
                        required: true,
                        descricao: "Tipo de transação (E - Entrada, S - Saída)",
                        schema: { type: "string", enum: ["E", "S"], example: "S" }
                    },
                ],
                responses: {
                    200: {
                        description: "Transações listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Transacao' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/transacao/categoria/{id_categoria}": {
            get: {
                tags: ["transacao"],
                summary: "Listar transações por categoria",
                parameters: [
                    {
                        name: "id_categoria",
                        in: "query",
                        required: true,
                        descricao: "ID da categoria",
                        schema: { type: "integer", example: 1 }
                    },
                ],
                responses: {
                    200: {
                        description: "Transações listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Transacao' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/transacao/subcategoria/{id_subcategoria}": {
            get: {
                tags: ["transacao"],
                summary: "Listar transações por subcategoria",
                responses: {
                    200: {
                        description: "Transações listadas com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "array", items: { $ref: '#/components/schemas/Listar_Transacao' } }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/transacao/{id_transacao}": {
            put: {
                tags: ["transacao"],
                summary: "Atualizar transação",
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Transacao" }
                        }
                    }
                },
                responses: {
                    200: { description: "Transação atualizada com sucesso" },
                    404: { description: "Transação não encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ["transacao"],
                summary: "Remover transação (soft delete)",
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        schema: { type: "integer", example: 1 }
                    }
                ],
                responses: {
                    200: { description: "Transação removida com sucesso" },
                    404: { description: "Transação não encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
    },

    components: {
        schemas: {
            // ===== USUÁRIOS =====
            Listar_Usuarios: {
                type: 'object',
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" }
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "123456" }
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Nina" },
                    email: { type: "string", example: "nina@email.com" },
                    senha: { type: "string", example: "123456" }
                }
            },
            Login_Usuario: {
                type: 'object',
                properties: {
                    email: { type: "string", example: "email@email.com" },
                    senha: { type: "string", example: "123456" }
                }
            },
            Resposta_Login: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            nome: { type: "string", example: "Ricardo" }
                        }
                    }
                }
            },

            // ===== CATEGORIAS =====
            Listar_Categoria: {
                type: "object",
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Alimentação" },
                    descricao: { type: "string", example: "Gastos com comida" },
                    cor: { type: "string", example: "#FF5733" },
                    icone: { type: "string", example: "food" },
                    tipo: { type: "string", example: "D" },
                    ativo: { type: "boolean", example: true }
                }
            },
            Criar_Categoria: {
                type: "object",
                required: ["nome", "cor", "icone"],
                properties: {
                    nome: { type: "string", example: "Transporte" },
                    descricao: { type: "string", example: "Gastos com transporte" },
                    cor: { type: "string", example: "#0000FF" },
                    icone: { type: "string", example: "car" },
                    tipo: { type: "string", example: "D" }
                }
            },
            Atualizar_Categoria: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Lazer" },
                    descricao: { type: "string", example: "Cinema e viagens" },
                    cor: { type: "string", example: "#00FF00" },
                    icone: { type: "string", example: "gamepad" },
                    tipo: { type: "string", example: "D" }
                }
            },

            // ===== SUBCATEGORIAS =====
            Listar_Subcategoria: {
                type: "object",
                properties: {
                    id_subcategoria: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Frutas" },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Criar_Subcategoria: {
                type: "object",
                required: ["nome", "id_categoria"],
                properties: {
                    nome: { type: "string", example: "Verduras" },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Atualizar_Subcategoria: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Doces" },
                    id_categoria: { type: "integer", example: 1 }
                }
            },

            // ===== TRANSAÇÕES =====
            Listar_Transacao: {
                type: "object",
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    id_usuario: { type: "integer", example: 1 },
                    id_categoria: { type: "integer", example: 1 },
                    id_subcategoria: { type: "integer", example: 1 },
                    tipo: { type: "string", enum: ["E", "D"], example: "E" },
                    valor: { type: "number", format: "decimal", example: 150.75 },
                    data: { type: "string", format: "date", example: "2026-04-09" },
                    descricao: { type: "string", example: "Compra no supermercado" },
                }
            },
            Criar_Transacao: {
                type: "object",
                required: ["id_categoria", "id_subcategoria", "valor", "data", "descricao"],
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    valor: { type: "number", format: "decimal", example: 150.75 },
                    descricao: { type: "string", example: "Compra no supermercado" },
                    data_registro: { type: "string", format: "date", example: "2026-04-09" },
                    data_vencimento: { type: "string", format: "date", example: "2026-04-09" },
                    data_pagamento: { type: "string", format: "date", example: "2026-04-09" },
                    tipo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 },
                    id_subcategoria: { type: "integer", example: 1 }
                }
            },
            Atualizar_Transacao: {
                type: "object",
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    id_categoria: { type: "integer", example: 1 },
                    id_subcategoria: { type: "integer", example: 1 },
                    valor: { type: "number", format: "decimal", example: 150.75 },
                    data: { type: "string", format: "date", example: "2026-04-09" },
                    descricao: { type: "string", example: "Compra no supermercado" }
                }
            },
            Deletar_Transacao: {
                type: "object",
                properties: {
                    id_transacao: { type: "integer", example: 1 }
                }
            }
        }
    }
};
export default documentacao;