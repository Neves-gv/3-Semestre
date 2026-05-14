const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'Barber Shop API',
        description: 'API para gerenciamento de barbearia (Usuários, Serviços e Agendamentos)',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'Servidor local' },
    ],
    tags: [
        { name: 'Usuários', description: 'Gerenciamento de usuários e autenticação' },
        { name: 'Serviços', description: 'Gerenciamento de serviços da barbearia' },
        { name: 'Agendamentos', description: 'Gerenciamento de agendamentos' }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ['Usuários'],
                summary: 'Listar usuários',
                security: [
                    {
                        bearerAuth: []
                    }
                ],
                responses: { 200: { description: "Sucesso" } }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar usuário',
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/Usuario' } } }
                },
                responses: { 201: { description: "Criado" } }
            }
        },
        "/usuarios/{id_usuario}": {
            get: {
                tags: ['Usuários'],
                summary: 'Buscar usuário por ID',
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Sucesso" }, 404: { description: "Não encontrado" } }
            },
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar usuário',
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/UsuarioUpdate' } } }
                },
                responses: { 200: { description: "Atualizado com sucesso" }, 404: { description: "Não encontrado" } }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover usuário',
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Removido com sucesso" } }
            }
        },
        "/login": {
            post: {
                tags: ['Usuários'],
                summary: 'Realizar login',
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/Login' } } }
                },
                responses: {
                    200: { description: "Login realizado com sucesso" },
                    401: { description: "Credenciais inválidas" }
                }
            }
        },
        "/servicos": {
            get: {
                tags: ['Serviços'],
                summary: 'Listar serviços',
                responses: { 200: { description: "Sucesso" } }
            },
            post: {
                tags: ['Serviços'],
                summary: 'Cadastrar serviço',
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/Servico' } } }
                },
                responses: { 201: { description: "Criado" } }
            }
        },
        "/servicos/{id_servico}": {
            get: {
                tags: ['Serviços'],
                summary: 'Buscar serviço por ID',
                parameters: [{ name: 'id_servico', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Sucesso" }, 404: { description: "Não encontrado" } }
            },
            put: {
                tags: ['Serviços'],
                summary: 'Atualizar serviço',
                parameters: [{ name: 'id_servico', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/Servico' } } }
                },
                responses: { 200: { description: "Atualizado com sucesso" } }
            },
            delete: {
                tags: ['Serviços'],
                summary: 'Remover serviço',
                parameters: [{ name: 'id_servico', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Removido com sucesso" } }
            }
        },
        "/agendamentos": {
            get: {
                tags: ['Agendamentos'],
                summary: 'Listar agendamentos',
                responses: { 200: { description: "Sucesso" } }
            },
            post: {
                tags: ['Agendamentos'],
                summary: 'Criar agendamento',
                requestBody: {
                    required: true,
                    content: { "application/json": { schema: { $ref: '#/components/schemas/Agendamento' } } }
                },
                responses: { 201: { description: "Criado" } }
            }
        },
        "/agendamentos/{id_agendamento}": {
            get: {
                tags: ['Agendamentos'],
                summary: 'Buscar agendamento por ID',
                parameters: [{ name: 'id_agendamento', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Sucesso" }, 404: { description: "Não encontrado" } }
            },
            delete: {
                tags: ['Agendamentos'],
                summary: 'Remover agendamento',
                parameters: [{ name: 'id_agendamento', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { 200: { description: "Removido com sucesso" } }
            }
        }
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            Login: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    token: {
                        type: 'string',
                        description: 'Token JWT gerado',
                        example: 'eyJhbGciOiJIUzI1Ni...'
                    },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            nome: { type: "strin", example: 'Ricardo' },
                            email: { type: "string", example: "ricardo@email.com" }
                        }
                    }
                }
            },
            Usuario: {
                type: 'object',
                properties: {
                    nome: { type: 'string', example: 'Vitor' },
                    email: { type: 'string', example: 'vitor@email.com' },
                    senha: { type: 'string', example: '123456' },
                    tipo: { type: 'string', example: 'cliente' }
                }
            },
            UsuarioUpdate: {
                type: 'object',
                properties: {
                    nome: { type: 'string', example: 'Vitor' },
                    email: { type: 'string', example: 'vitor@email.com' },
                    tipo: { type: 'string', example: 'cliente' }
                }
            },
            Servico: {
                type: 'object',
                properties: {
                    nome: { type: 'string', example: 'Corte de Cabelo' },
                    preco: { type: 'integer', example: 50 },
                    descricao: { type: 'string', example: 'Corte social' }
                }
            },
            Agendamento: {
                type: 'object',
                properties: {
                    data_hora: { type: 'string', example: '2024-05-10' },
                    id_usuario: { type: 'integer', example: 1 },
                    id_servico: { type: 'integer', example: 1 }
                }
            }
        }
    }
};

export default documentacao;