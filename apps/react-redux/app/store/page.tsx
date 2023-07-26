"use client"

import { StoreContext } from '@/context/store-context';
import React, { useRef } from 'react';
import {  useContext } from 'react';


const Page = () => {

    const store = useContext(StoreContext)
    
    const ref = useRef<HTMLInputElement>(null)

    const [inputList, setInputList] = React.useState<string[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => { 
        e.preventDefault();
        if(!ref.current?.value) return;
        setInputList([...inputList, ref.current!.value])
        ref.current!.value = ''
    };

    console.log(inputList)

    return (
        <section className='container mx-auto py-12 bg-slate-400 min-h-screen px-5'>
            <p>Theme: {store}</p>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={ref} className='p-3 rounded-md focus:outline-none my-3' />  <br />
                <button type="submit" className='bg-blue-500 p-2 rounded-md'>Submit</button>
                <div className='flex flex-wrap items-center gap-2 mt-3'>Input List: {
                    inputList?.map((item, index) => {
                        return <p key={index} className='bg-blue-500 p-2 rounded-md mx-2 w-fit '>{item}</p>
                    })
                }</div>
            </form>
        </section>
    );
};

export default Page;