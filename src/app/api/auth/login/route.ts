
export async function POST(req: Request) {
  const { email, password } = await req.json(); // Obtém o corpo da requisição em JSON

  // Validação simples dos campos
  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: 'Email e Password são obrigatórios!' }),
      { status: 400 }
    );
  }

  try {

    const strapiUrl = `${process.env.STRAPI_API_URL}/api/auth/local`;

    // Enviar credenciais para o Strapi usando o fetch nativo
    const response = await fetch(strapiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    const data = await response.json();

    // Se a resposta for bem-sucedida (status 2xx)
    if (!(data.jwt))
      throw new Error('Credenciais inválidas!');

    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          'Authorization': `Bearer ${data.jwt}`, // Colocando o token JWT no header
        },
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({ error: 'Erro no servidor!' }),
      { status: 401 }
    );
  }
}
