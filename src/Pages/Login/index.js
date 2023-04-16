import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
import { auth } from '../../Services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault()

        if (email === '' || password === '') {
            toast.warning("Insira os dados para logar")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success("Logado com sucesso")
                navigate("/admin", { replace: true })
            })
            .catch(() => {
                toast.error("Algo deu errado ao logar!")
                console.log("ERRO AO LOGAR!")
            })
    }


    return (
        <div className='login-container'>
            <Logo />

            <form className='form' onSubmit={handleLogin}>
                <Input
                    type='email'
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type='password'
                    placeholder='*********'
                    autoComplete='on'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit'>Acessar</button>
            </form>
        </div>
    )
}

