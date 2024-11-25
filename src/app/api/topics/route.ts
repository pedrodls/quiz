import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

  try {

    const strapiUrl = `${process.env.STRAPI_API_URL}/api/topics`;

    // Enviar credenciais para o Strapi usando o fetch nativo
    const response = await fetch(strapiUrl, {
      method: 'GET',
      headers: req.headers
    });

    const data = await response.json();

    return new Response(
      JSON.stringify(data),
      {
        status: 200
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro no servidor!' }),
      { status: 401 }
    );
  }
}
