import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


const Page = async () => {

    const albumsData = await getData();

    const todosData = await getTodos();

    const [todos, albums ] = await Promise.all([albumsData, todosData])

    return (
        <div className='container mx-auto py-12'>
            {/* Albums List  */}
            <h1 className='text-blue-500 font-bold text-3xl'>Albums List:-</h1>
            <div className='grid grid-cols-5 gap-3 items-center'>
                {
                    albums.map((item: {title:string}, index: number) => {
                        return (
                            <div key={index} className='bg-gray-200 p-3 rounded-md'>
                                <p className='text-center'>Title: {item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* Todos List  */}
            <h1 className='text-blue-500 font-bold text-3xl pt-20 pb-10'>Todos List:-</h1>
            <div className='grid grid-cols-5 gap-3 items-center'>
                {
                    todos.map((item: {title:string}, index: number) => {
                        return (
                            <div key={index} className='bg-gray-200 p-3 rounded-md'>
                                <p className='text-center'>Title: {item.title}</p>
                                <p className='text-center py-2'>Status: {item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Page;