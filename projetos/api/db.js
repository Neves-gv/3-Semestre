import { Pool } from 'pg';

const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'bd_finan_control_3b',
    port: 5432,
});

// const BD = new Pool({
//     connectionString: "postgres://postgres.dyvxgfhcmxhideocgwoa:Nzn5iQKGwIEIC03l@aws-1-sa-east-1.pooler.supabase.com:6543/postgres",
//     ssl: {
//         rejectUnauthorized: false // O Supabase requer SSL
//     }
// });

const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log('Conexão com PostgreSQL realizada com sucesso ✅');
        cliente.release();
    } catch (error) {
        console.error('Erro ao conectar ao banco:', error.message);
    }
};

export { BD, testarConexao };