import Header from '../../Components/Header'
import Input from '../../Components/Input'
import './network.css'

export default function Network() {
    return (
        <div className='admin-container'>
            <Header />

            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form'>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder="Digite a URL aqui.."
                />

                <label className='label'>Link do Youtube</label>
                <Input
                    placeholder="Digite a URL aqui.."
                />

                <label className='label'>Link do Instagram</label>
                <Input
                    placeholder="Digite a URL aqui.."
                />

                <button className='btn-register' type='submit'>
                    Salvar links
                </button>
            </form>



        </div>
    )
}
