const { Client } = require('pg');

exports.handler = async (event, context) => {
  // Apenas aceita requisições POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método não permitido' }),
    };
  }

  // Parse dos dados recebidos
  let data;
  try {
    // Tenta fazer parse se for JSON, ou converte se for FormData (multipart)
    // Para simplificar, vamos assumir que o frontend enviará JSON.
    data = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Erro ao processar dados (JSON inválido)' }),
    };
  }

  const { nome, email, interesse, demanda } = data;

  if (!nome || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Nome e Email são obrigatórios' }),
    };
  }

  // Conexão segura com o banco
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();

    const query = `
      INSERT INTO leads (nome, email, interesse, demanda)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;
    const values = [nome, email, interesse, demanda];

    const res = await client.query(query, values);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Sucesso!', id: res.rows[0].id }),
    };

  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno no servidor' }),
    };
  } finally {
    await client.end();
  }
};
