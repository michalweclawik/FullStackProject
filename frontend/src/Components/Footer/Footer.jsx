import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <h5 htmlFor="phone" className='form-label footer__phone'> +44 054144524</h5>
            <h5 htmlFor="Adress" className='form-label footer__address'> Adress Address</h5>
        </div>
    )
}

export default Footer