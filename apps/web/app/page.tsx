import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "ui";

async function getArtist() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  return res.json();
}

const Web = async () => {

  const artistData = await getArtist();

    return (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '10px',
            margin: '0 50px',
          }}>
            {artistData.map((item: any) => (
              <div key={item.id}></div>
                <p style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#333',
                }}>{item.title}</p>
              </div>
            ))}
          </div>
            <h1> Web Hello Remote Cache!</h1>
            <h1><Link href="/hello">Hello</Link></h1>
            <h1><Link href="/test-2">Test 2</Link></h1>
            <Button />
        </div>
    );
};

export default Web;
