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
    const [youtube, setYoutube] = useState("")

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "socialmedia", "link")

            getDoc(docRef)
                .then((snapshot) => {

                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data().facebook)
                        setYoutube(snapshot.data().youtube)
                        setInstagram(snapshot.data().instagram)
                    }
                })
        }
        loadLinks();
    }, [])

    function handleSave(e) {
        e.preventDefault();

        if (facebook === '' || youtube === '' || instagram === '') {
            toast.warning("Preencha os campos antes de salvar")
            return;
        }

        setDoc(doc(db, "socialmedia", "link"), {
            facebook: facebook,
            youtube: youtube,
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

            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder="Digite a URL aqui.."
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />

                <label className='label'>Link do Youtube</label>
                <Input
                    placeholder="Digite a URL aqui.."
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />

                <label className='label'>Link do Instagram</label>
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
