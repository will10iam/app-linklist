import { useState, useEffect } from 'react'

import Header from '../../Components/Header'
import Input from '../../Components/Input'
import './network.css'
import { toast } from 'react-toastify'
import { db } from '../../Services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'

export default function Network() {
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [github, setGithub] = useState("")

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "socialmedia", "link")

            getDoc(docRef)
                .then((snapshot) => {

                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data().facebook)
                        setGithub(snapshot.data().github)
                        setInstagram(snapshot.data().instagram)
                    }
                })
        }
        loadLinks();
    }, [])

    function handleSave(e) {
        e.preventDefault();

        if (facebook === '' || github === '' || instagram === '') {
            toast.warning("Preencha os campos antes de salvar")
            return;
        }

        setDoc(doc(db, "socialmedia", "link"), {
            facebook: facebook,
            github: github,
            instagram: instagram
        }).then(() => {
            toast.success("Links salvos com sucesso")
        }).catch((error) => {
            console.log("Erro ao registrar" + error)
            toast.success("Erro ao registrar!")
        })

    }

    return (
        <div className='admin-container'>
            <Header />

            <h1 className='title-social'>Redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Facebook</label>
                <Input
                    placeholder="Digite a URL aqui.."
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />

                <label className='label'>Github</label>
                <Input
                    placeholder="Digite a URL aqui.."
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />

                <label className='label'>Instagram</label>
                <Input
                    placeholder="Digite a URL aqui.."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />

                <button className='btn-register' type='submit'>
                    Salvar links
                </button>
            </form>



        </div>
    )
}
