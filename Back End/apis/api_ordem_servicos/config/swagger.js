const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API ordem de serviços',
        version: '1.0.0'
    },

    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],

    paths: {

        // =========================
        // USUÁRIOS
        // =========================

        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Listar usuários',
                responses: {
                    200: { description: 'Sucesso' }
                }
            },

            post: {
                tags: ['Usuários'],
                summary: 'Criar usuário',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Usuarios'
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Criado com sucesso' }
                }
            }
        },

        '/usuarios/{id}': {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar usuário',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Usuarios'
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Atualizado' },
                    404: { description: 'Não encontrado' }
                }
            },

            patch: {
                tags: ['Usuários'],
                summary: 'Atualizar parcialmente',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Atualizacao_Parcial_Usuario'
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Atualizado' }
                }
            },

            delete: {
                tags: ['Usuários'],
                summary: 'Deletar usuário',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    200: { description: 'Removido' },
                    404: { description: 'Não encontrado' }
                }
            }
        },

        // =========================
        // DEPARTAMENTOS (NOVO 🔥)
        // =========================

        '/departamentos': {
            get: {
                tags: ['Departamentos'],
                summary: 'Listar departamentos',
                responses: {
                    200: { description: 'Sucesso' }
                }
            },

            post: {
                tags: ['Departamentos'],
                summary: 'Criar departamento',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Departamento'
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Criado com sucesso' },
                    400: { description: 'Nome é obrigatório' }
                }
            }
        },

        '/departamentos/{id}': {
            put: {
                tags: ['Departamentos'],
                summary: 'Atualizar departamento',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Departamento'
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Atualizado' },
                    404: { description: 'Departamento não encontrado' }
                }
            },

            delete: {
                tags: ['Departamentos'],
                summary: 'Deletar departamento',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    200: { description: 'Removido' },
                    404: { description: 'Departamento não encontrado' }
                }
            }
        },

        // =========================
        // ORDEM DE SERVIÇOS
        // =========================

        '/ordem_servicos': {
            get: {
                tags: ['Ordem de Serviços'],
                summary: 'Listar ordens de serviço',
                responses: {
                    200: { description: 'Sucesso' }
                }
            },

            post: {
                tags: ['Ordem de Serviços'],
                summary: 'Criar ordem de serviço',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Ordem_Servico'
                            }
                        }
                    }
                },
                responses: {
                    201: { description: 'Criado com sucesso' }
                }
            }
        },

        '/ordem_servicos/{id_ordem}': {
            put: {
                tags: ['Ordem de Serviços'],
                summary: 'Atualizar ordem de serviço',
                parameters: [
                    {
                        name: 'id_ordem',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Ordem_Servico'
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Atualizado' },
                    404: { description: 'Não encontrado' }
                }
            },

            patch: {
                tags: ['Ordem de Serviços'],
                summary: 'Atualizar parcialmente ordem',
                parameters: [
                    {
                        name: 'id_ordem',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Atualizacao_Parcial_Ordem'
                            }
                        }
                    }
                },
                responses: {
                    200: { description: 'Atualizado' }
                }
            },

            delete: {
                tags: ['Ordem de Serviços'],
                summary: 'Deletar ordem de serviço',
                parameters: [
                    {
                        name: 'id_ordem',
                        in: 'path',
                        required: true,
                        schema: { type: 'integer' }
                    }
                ],
                responses: {
                    200: { description: 'Removido' },
                    404: { description: 'Não encontrado' }
                }
            }
        }
    },

    components: {
        schemas: {

            Cadastro_Usuarios: {
                type: 'object',
                required: ['nome', 'email', 'senha'],
                properties: {
                    nome: { type: 'string' },
                    email: { type: 'string' },
                    senha: { type: 'string' }
                }
            },

            Atualizacao_Parcial_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    email: { type: 'string' },
                    senha: { type: 'string' }
                }
            },

            // 🔥 NOVO
            Departamento: {
                type: 'object',
                required: ['nome'],
                properties: {
                    nome: { type: 'string' },
                    descricao: { type: 'string' }
                }
            },

            Ordem_Servico: {
                type: 'object',
                required: [
                    'numero_ordem',
                    'titulo',
                    'descricao',
                    'prioridade',
                    'status',
                    'data',
                    'id_usuario',
                    'id_departamento'
                ],
                properties: {
                    numero_ordem: { type: 'integer' },
                    titulo: { type: 'string' },
                    descricao: { type: 'string' },
                    prioridade: { type: 'string' },
                    status: { type: 'string' },
                    data: { type: 'string', format: 'date' },
                    id_usuario: { type: 'integer' },
                    id_departamento: { type: 'integer' }
                }
            },

            Atualizacao_Parcial_Ordem: {
                type: 'object',
                properties: {
                    numero_ordem: { type: 'integer' },
                    titulo: { type: 'string' },
                    descricao: { type: 'string' },
                    prioridade: { type: 'string' },
                    status: { type: 'string' },
                    data: { type: 'string', format: 'date' },
                    id_usuario: { type: 'integer' },
                    id_departamento: { type: 'integer' }
                }
            }
        }
    }
};

export default documentacao;