import React, { useState } from 'react'
import './admin.css'
import Header from '../../Components/Header'
import Logo from '../../Components/Logo'
import Input from '../../Components/Input'

import { FiTrash2 } from 'react-icons/fi'

import { db } from '../../Services/firebaseConnection'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
    const [textColorInput, setTextColorInput] = useState("#121212");


    async function handleRegister(e) {
        e.preventDefault()


        if (nameInput === '' || urlInput === '') {
            toast.warning("Preencha todos os campos")
            return;
        }

        addDoc(collection(db, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date(),
        })
            .then(() => {
                setNameInput("")
                setUrlInput("")
                console.log("Link Registrado com sucesso!")
                toast.success("Link Registrado com sucesso")
            })
            .catch((error) => {
                console.log("ERRO AO REGISTRAR!" + error)
                toast.error("ERRO AO REGISTRAR!")
            })

    }


    return (
        <>
            <Header />

            <div className='admin-container'>
                <Logo />

                <form className='form' onSubmit={handleRegister}>
                    <label className='label'>Nome do link</label>
                    <Input
                        placeholder="Nome do link.."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />

                    <label className='label'>URL do link</label>
                    <Input
                        type="url"
                        placeholder="Digite a URL.."
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                    />

                    <section className='container-colors'>
                        <div>
                            <label className='label right'>Fundo do Link</label>
                            <input type='color' value={backgroundColorInput} onChange={(e) => setBackgroundColorInput(e.target.value)} />
                        </div>

                        <div>
                            <label className='label right'>Cor do Link</label>
                            <input type='color' value={textColorInput} onChange={(e) => setTextColorInput(e.target.value)} />
                        </div>
                    </section>

                    {nameInput !== '' && (
                        <div className='preview'>
                            <label className='label'>Veja como está ficando seu link!</label>
                            <article className="list" style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}>
                                <p style={{ color: textColorInput }}>{nameInput}</p>
                            </article>
                        </div>
                    )}

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
