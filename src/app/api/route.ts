// Manipulador de requisições para o endpoint de login
export async function GET() {
    return new Response(
        'Wellcome to server API!!!',
        { status: 200 }
    );
}
