
export async function POST(req: Request) {
  const { email, password, username } = await req.json(); // Obtém o corpo da requisição em JSON

  // Validação simples dos campos
  if (!email || !password || !username) {
    return new Response(
      JSON.stringify({ error: 'Os campos: Email, Username e Password são obrigatórios!' }),
      { status: 400 }
    );
  }

  const strapiUrl = `${process.env.STRAPI_API_URL}/api/auth/local/register`;

  // Enviar credenciais para o Strapi usando o fetch nativo
  const res = await fetch(strapiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      username
    }),
  })

  const data = await res?.json();

  if (data.error)
    return new Response(JSON.stringify(data), { status: 401 });

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: {
        'Authorization': `Bearer ${data.jwt}`, // Colocando o token JWT no header
      },
    }
  );
}
