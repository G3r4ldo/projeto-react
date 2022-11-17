import { Routes } from "./routers"
import { UsuarioLogadoProvider } from "./shared/contexts";



export const App = () => {
  return (

    <UsuarioLogadoProvider>

      <Routes/>
    </UsuarioLogadoProvider>
  );
}
