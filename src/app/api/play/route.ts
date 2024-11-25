import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

  try {

    const { searchParams } = new URL(req.url);

    const mode = searchParams.get('mode');
    const topic = searchParams.get('topic');

    const strapiUrl = `${process.env.STRAPI_API_URL}/api/quetions?filters[topic][description][$eq]=${topic}&filters[mode][description][$eq]=${mode}&populate=topic&populate=mode&populate=answers`;

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
