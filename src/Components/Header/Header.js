import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Header.scss'

const Header = () => {


    return (
        <>
            <header className='Header'>
                <div className='logoContainer'>
                    <img src={logo} alt='' />
                    <h1>داشبورد</h1>
                </div>
            </header>
        </>
    )
}

export default Header
