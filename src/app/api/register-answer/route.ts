import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

  try {

    const { searchParams } = new URL(req.url);

    const userId = searchParams.get('userId');
    const answerId = searchParams.get('answerId');

    const body = {
      "data": {
        "answer": {
          "connect": [
            {
              "id": answerId
            }
          ]
        },
        "user": {
          "connect": [
            {
              "id": userId
            }
          ]
        }
      }
    }
    
    const strapiUrl = `${process.env.STRAPI_API_URL}/api/user-answers`;

    // Enviar credenciais para o Strapi usando o fetch nativo
    const response = await fetch(strapiUrl, {
      method: 'POST',
      headers: req.headers,
      body: JSON.stringify(body),
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
