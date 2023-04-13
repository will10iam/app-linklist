import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo'


import './erro.css';

export function Erro() {
    return (
        <div className='not-found'>
            <Logo />
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to="/" className='link-text'>VOLTAR PARA A HOME!</Link>
        </div>

    );
}

export default Erro;