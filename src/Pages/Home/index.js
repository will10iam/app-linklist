import React from 'react'
import './home.css'

import Social from '../../Components/Social'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'



export default function Home() {
    return (
        <div className='home-container'>
            <h1>William Berbet</h1>
            <span>Veja meus links</span>

            <main className='links'>
                <section className='link-area'>
                    <a href='#'>
                        <p className='text-link'>
                            Canal no Youtube
                        </p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='text-link'>
                            Nosso WhatsApp
                        </p>
                    </a>
                </section>

                <section className='link-area'>
                    <a href='#'>
                        <p className='text-link'>
                            Baixe meu Ebook!
                        </p>
                    </a>
                </section>
            </main>

            <footer>
                <Social url="https://www.facebook.com/berbetswill">
                    <FaFacebook size={35} color="#3b5998" />
                </Social>

                <Social url="https://github.com/will10iam">
                    <FaGithub size={35} color='#F1F1F1' />
                </Social>

                <Social url="https://www.instagram.com/willnasredes/">
                    <FaInstagram size={35} color='#DD2A7B' />
                </Social>

            </footer>

        </div>
    )
}
