// Context.js
import React, { createContext, useState, useContext } from 'react';

const ValueContext = createContext("");


export const ValueProvider = ({ children }) => {
    const [value, setValue] = useState("a");
    return (
        <ValueContext.Provider value={{ value, setValue }}>
            {children}
        </ValueContext.Provider>
    );
};
export const useValue = () => useContext(ValueContext);
