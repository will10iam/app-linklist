import React from 'react'
import './admin.css'
import Header from '../../Components/Header'
import Logo from '../../Components/Logo'
import Input from '../../Components/Input'

import { FiTrash2 } from 'react-icons/fi'

export default function Admin() {
    return (
        <>
            <Header />

            <div className='admin-container'>
                <Logo />

                <form className='form'>
                    <label className='label'>Nome do link</label>
                    <Input
                        placeholder="Nome do link.."
                    />

                    <label className='label'>URL do link</label>
                    <Input
                        type="url"
                        placeholder="Digite a URL.."
                    />

                    <section className='container-colors'>
                        <div>
                            <label className='label right'>Fundo do Link</label>
                            <input type='color' />
                        </div>

                        <div>
                            <label className='label right'>Cor do Link</label>
                            <input type='color' />
                        </div>
                    </section>

                    <button className='btn-registrar' type='submit'>
                        Cadastrar
                    </button>
                </form>

                <h2 className='title'>
                    Meus Links
                </h2>

                <article
                    className='list animate-pop'
                    style={{ backgroundColor: "#000", color: "#FFF" }}
                >
                    <p>Nosso canal do Youtube</p>
                    <div>
                        <button className='btn-delete'>
                            <FiTrash2 size={18} color='#FFF' />
                        </button>
                    </div>
                </article>

            </div>
        </>
    )
}
