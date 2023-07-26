"use client"

import React, { createContext, ReactNode } from 'react';

export const StoreContext = createContext<string | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {

    return (
        <StoreContext.Provider value="dark">
            {children}
        </StoreContext.Provider>
    );
};
