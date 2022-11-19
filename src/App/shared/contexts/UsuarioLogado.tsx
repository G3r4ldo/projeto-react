import React, { createContext, useCallback, useEffect, useState } from "react";


interface IUsuarioLogadoContextData {
nomeDoUsuario: string;
logout:() => void;
}

 export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

 interface IUsuarioLogadoProviderProps{
    children: React.ReactNode;
   
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children})=> {

   const [nome, setNome] = useState('');

    useEffect (() => {
        setTimeout (() => {
         setNome('Lucas')
        }, 2000);

    }, []);



const handletLogout = useCallback(() => {
console.log('Logout executou')
},[]);

    return (

        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nome, logout: handletLogout }}>

{children}
        </UsuarioLogadoContext.Provider>

    );

}