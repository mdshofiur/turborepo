"use client"

import { StoreContext } from '@/context/store-context';
import React from 'react';
import {  useContext } from 'react';


const Page = () => {

    const store = useContext(StoreContext)
    
    console.log("🚀 store:", store)

    return (
        <div>
            Theme: {store}
        </div>
    );
};

export default Page;