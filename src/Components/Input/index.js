import React from 'react'
import './styles.css'

export default function Input(props) {
    return (
        <input
            className='form-input'
            {...props}
        />
    )
}
