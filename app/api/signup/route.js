import db from '../../lib/db';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Missing email or password' }), {
        status: 400,
      });
    }

    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    const [result] = await db.execute(sql, [email, password]);

    return new Response(JSON.stringify({ message: 'User created', id: result.insertId }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
