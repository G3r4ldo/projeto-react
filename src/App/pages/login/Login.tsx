import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

            <label>
                <span>Email</span>
                <input value={email} 
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus(): undefined}
                />
               
            </label>
            <label>
                <span>Senha</span>
                <input 
                //armazenando a input na referencia
                ref={inputPasswordRef}
                
                type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
        </form>
       </div>
);
    }