import './App.css';
import Formulario from './assets/Componentes/Formulario';
import SocialButton from './assets/Componentes/SocialButton';





function App() {
return (
<>
<h1>Crear una cuenta</h1>

<div className="social-buttons">
       
        <SocialButton icon="linkedin" href="https://www.linkedin.com/" />

        <SocialButton icon="github" href="https://github.com/" />

       
        <SocialButton icon="twitter" href="https://twitter.com/" />
      </div>

<Formulario />

</>
);
}
export default App;