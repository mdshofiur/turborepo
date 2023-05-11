import React from 'react'
import { sql } from "@vercel/postgres";

export default async function Carts({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {

const { rows } = await sql`SELECT * FROM users`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id} className='container mx-auto p-20'>
           <h1 className='text-red-500 text-4xl'>{row.id} - {row.name} </h1>
           <p className='text-blue-500 text-3xl pt-5'>{row.owner}</p>
        </div>
      ))}
    </div>
  );
}