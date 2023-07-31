"use client"

import React, { createContext } from 'react';

export const StoreContext = createContext<string | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <StoreContext.Provider value="dark">
            {children}
        </StoreContext.Provider>
    );
};
