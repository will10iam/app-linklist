import './logo.css'
import { Link } from 'react-router-dom'

import React from 'react'

export default function ListLinks() {
    return (
        <Link to='/'>
            <h1 className='logo'>List<span className='logo-text'>Links</span></h1>
        </Link>
    )
}
