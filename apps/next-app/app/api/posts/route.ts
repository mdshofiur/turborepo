import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request)
 {
  const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE users (Id serial PRIMARY KEY, Name varchar(255), Owner varchar(255) );`;
    const names = [1,'Md.Shofiur', 'Expertchamber'];
    await client.sql`INSERT INTO users (Id, Name, Owner) VALUES (${names[0]}, ${names[1]},${names[2]});`;
  } catch (error) {
    return NextResponse.json({error: error});
  }
  const posts = await client.sql`SELECT * FROM users;`;
  return NextResponse.json({
    name: "vercel postgresql test",
    data: posts
  });
}