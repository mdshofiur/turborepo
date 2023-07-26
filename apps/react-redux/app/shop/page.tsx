import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const Page = async () => {

    const albums = await getData();

    return (
        <div className='container mx-auto py-12'>
            <div className='grid grid-cols-5 gap-3 items-center'>
                {
                    albums.map((item: {title:string}, index: number) => {
                        return (
                            <div key={index} className='bg-gray-200 p-3 rounded-md'>
                                <p className='text-center'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Page;