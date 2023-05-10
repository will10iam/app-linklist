import { useState, useEffect } from 'react'

import './home.css'

import Social from '../../Components/Social'

import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { getDocs, collection, query, orderBy, doc, getDoc } from 'firebase/firestore'
import { db } from '../../Services/firebaseConnection'


export default function Home() {

    const [links, setLinks] = useState([]);
    const [socialMediaLinks, setSocialMediaLinks] = useState({})


    useEffect(() => {

        function loadLinks() {
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))

            getDocs(queryRef)
                .then((snapshot) => {
                    let lista = [];

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
        }
        loadLinks();
    }, []);

    useEffect(() => {
        function loadSocialMedia() {
            const docRef = doc(db, "socialmedia", "link")

            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setSocialMediaLinks({
                            facebook: snapshot.data().facebook,
                            whatsapp: snapshot.data().whatsapp,
                            instagram: snapshot.data().instagram
                        })
                    }
                })
        }

        loadSocialMedia();
    }, [])


    return (
        <div className='home-container'>


            <h1>Oi, bem vindo!</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>

                {links.map((item) => (
                    <section key={item.id} className='link-area' style={{ backgroundColor: item.bg }}>
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <p className='text-link' style={{ color: item.color }}>
                                {item.name}
                            </p>
                        </a>
                    </section>
                ))}
            </main>

            {links.length !== 0 && Object.keys(socialMediaLinks).length > 0 && (
                <footer>
                    <Social url={socialMediaLinks?.facebook}>
                        <FaFacebook size={35} color="#3b5998" />
                    </Social>

                    <Social url={socialMediaLinks?.whatsapp}>
                        <FaWhatsapp size={35} color='#55ec69' />
                    </Social>

                    <Social url={socialMediaLinks?.instagram}>
                        <FaInstagram size={35} color='#DD2A7B' />
                    </Social>
                </footer>
            )}

            <h3> Desenvolvido por William Berbet - Github: @will10iam</h3>

        </div>
    )
}
