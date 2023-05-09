import React, { useEffect, useState } from 'react'
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

    const [links, setLinks] = useState([])

    useEffect(() => {
        const linksRef = collection(db, "links")
        const queryRef = query(linksRef, orderBy("created", "asc"))
        onSnapshot(queryRef, (snapshot) => {
            let lista = []

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(lista);
        })
    }, [])

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

    async function handleDeleteLink(id) {
        const docRef = doc(db, "links", id)
        await deleteDoc(docRef)
    }


    return (
        <>
            <Header name1="Links" name2="Redes Sociais" url1="/" url2="/admin/social" />

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

                {links.map((item, index) => (
                    <article
                        key={index}
                        className='list animate-pop'
                        style={{ backgroundColor: item.bg, color: item.color }}
                    >
                        <p>{item.name}</p>
                        <div>
                            <button className='btn-delete' onClick={() => handleDeleteLink(item.id)}>
                                <FiTrash2 size={18} color='#FFF' />
                            </button>
                        </div>
                    </article>
                ))}

            </div>
        </>
    )
}
