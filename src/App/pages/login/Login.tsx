import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { InputLogin } from "./componentes/InputLogin";

export const Login = () => {

    //use ref pode ser usado para armazenar um caminho html, como por exemplo uma input
    const  inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        console.log('Executou')
    return email.length*1000;
    },[email.length]);

    //useCallback é usado pra memorizar funções

    useEffect(() => {
    console.log(email)
    },[email]);

    useEffect(() => {
        console.log(password)  
        },[password]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
if (inputPasswordRef.current !== null){
    inputPasswordRef.current.focus()
}

    },[email,password])

    return (
       <div>
        <form>
<p>Quantidade de caracteres no email: {emailLength}</p>

            <InputLogin
            label="Email"
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin
          
             label="Senha"
             value={password}
             type = "password"
             onChange={newValue => setPassword(newValue)}
            />


            {/*<label>
                <span>Senha</span>
                <input 
                //armazenando a input na referencia
                ref={inputPasswordRef}
                
                type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>*/}

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
        </form>
       </div>
);
    }