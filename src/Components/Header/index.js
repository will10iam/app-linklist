import './header.css'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { auth } from '../../Services/firebaseConnection'
import { signOut } from "firebase/auth"

import React from 'react'

export default function Header(props) {
    const toggleMenu = () =>
        document.body.classList.toggle("open");


    async function handleLogout() {
        await signOut(auth);
    }


    return (
        <div className='container'>
            <button className='burger' onClick={toggleMenu}>
                <div className='background'></div>
                <div className='menu'>
                    <nav>
                        <a href={props.url1}>{props.name1}</a>
                        <a href={props.url2}>{props.name2}</a>
                        <a href={handleLogout} onClick={handleLogout}><AiOutlinePoweroff /></a>
                    </nav>
                </div>
            </button>


        </div>
    )
}
