const documentacaoAPI = {
    openapi: '3.0.3',
    info: {
        title: 'API Ordem de Serviços e Produtos',
        version: '1.0.0'
    },

    servers: [
        { url: 'http://localhost:3000' },
        { url: 'https://api-produtos-ten-ruby.vercel.app/' }
    ],

    paths: {
        // =========================
        // USUÁRIOS
        // =========================
        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Listar todos os usuários',
                responses: { 200: { description: 'Sucesso' } }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Criar usuário',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Cadastro_Usuarios' }
                        }
                    }
                },
                responses: {
                    201: { description: 'Usuário criado' },
                    400: { description: 'Campos obrigatórios não preenchidos' }
                }
            }
        },

        '/usuarios/{id_usuario}': {
            get: {
                tags: ['Usuários'],
                summary: 'Buscar usuário pelo ID',
                parameters: [
                    { name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                responses: {
                    200: { description: 'Usuário encontrado' },
                    404: { description: 'Usuário não encontrado' }
                }
            },
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar usuário',
                parameters: [
                    { name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Cadastro_Usuarios' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Usuário atualizado' },
                    404: { description: 'Usuário não encontrado' }
                }
            },
            patch: {
                tags: ['Usuários'],
                summary: 'Atualizar parcialmente usuário',
                parameters: [
                    { name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Atualizacao_Parcial_Usuario' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Usuário atualizado parcialmente' }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Deletar usuário',
                parameters: [
                    { name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                responses: {
                    200: { description: 'Usuário removido' },
                    404: { description: 'Usuário não encontrado' }
                }
            }
        },

        // =========================
        // LOGIN
        // =========================
        '/login': {
            post: {
                tags: ['Usuários'],
                summary: 'Realizar login',
                description: 'Autenticar um usuário e retornar seus dados',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Login_Usuarios' }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'Login realizado com sucesso',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Resposta_Login' }
                            }
                        }
                    },
                    400: { description: 'Campos obrigatórios não preenchidos' }
                }
            }
        },

        // =========================
        // PRODUTOS
        // =========================
        '/produtos': {
            get: {
                tags: ['Produtos'],
                summary: 'Listar todos os produtos',
                responses: { 200: { description: 'Sucesso' } }
            },
            post: {
                tags: ['Produtos'],
                summary: 'Criar produto',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Produto' }
                        }
                    }
                },
                responses: {
                    201: { description: 'Produto criado' },
                    400: { description: 'Campos obrigatórios não preenchidos' }
                }
            }
        },

        '/produtos/{id_produto}': {
            put: {
                tags: ['Produtos'],
                summary: 'Atualizar produto',
                parameters: [
                    { name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Produto' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Produto atualizado' },
                    404: { description: 'Produto não encontrado' }
                }
            },
            patch: {
                tags: ['Produtos'],
                summary: 'Atualizar parcialmente produto',
                parameters: [
                    { name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Atualizacao_Parcial_Produto' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Produto atualizado parcialmente' }
                }
            },
            delete: {
                tags: ['Produtos'],
                summary: 'Deletar produto',
                parameters: [
                    { name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }
                ],
                responses: {
                    200: { description: 'Produto removido' },
                    404: { description: 'Produto não encontrado' }
                }
            }
        }
    },

    components: {
        schemas: {
            Cadastro_Usuarios: {
                type: 'object',
                required: ['nome', 'gmail', 'senha'],
                properties: {
                    nome: { type: 'string' },
                    gmail: { type: 'string' },
                    senha: { type: 'string' }
                }
            },
            Atualizacao_Parcial_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    gmail: { type: 'string' },
                    senha: { type: 'string' }
                }
            },

            Produto: {
                type: 'object',
                required: ['nome', 'preco'],
                properties: {
                    nome: { type: 'string' },
                    preco: { type: 'number', format: 'float' },
                    link_imagem: { type: 'string' },
                    url_imagem: { type: 'string' },
                    categorias: { type: 'string' }
                }
            },
            Atualizacao_Parcial_Produto: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    preco: { type: 'number', format: 'float' },
                    link_imagem: { type: 'string' },
                    url_imagem: { type: 'string' },
                    categorias: { type: 'string' }
                }
            },

            Login_Usuarios: {
                type: 'object',
                required: ['gmail', 'senha'],
                properties: {
                    gmail: { type: 'string' },
                    senha: { type: 'string' }
                }
            },
            Resposta_Login: {
                type: 'object',
                properties: {
                    id_usuario: {
                        type: "integer", example: 1,                        
                    },
                    gmail: {
                        type: "integer", example: "neves@gmail.com",                        
                    },
                    senha: {
                        type: "integer", example: "Senha123",                        
                    }

                }
            }
        }
    }
};

export default documentacaoAPI;