import React from "react";


interface IButtonLoginProps {

type?: "button" | "reset" | "submit";

onClick: ()=> void;

children: React.ReactNode


}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type,onClick, children}) =>{

return (
<button type={type} onClick={onClick}>
{children}
</button>

)

}