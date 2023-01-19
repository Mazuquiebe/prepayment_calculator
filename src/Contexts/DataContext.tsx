import React, { createContext, ReactNode } from 'react';


export const DataProvider = createContext({});


interface IChildrenProps{
    children: ReactNode;
};

const DataContext = ({children}:IChildrenProps) =>{

    return(
        <DataProvider.Provider value={''}>
            {children}
        </DataProvider.Provider>
    );
};

export default DataContext;