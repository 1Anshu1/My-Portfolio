import React from 'react'
import './style.css'
import Layout from '../layout/Layout'

const Header = () => {
    return (
        <div className='navbar'>
            <Layout >
                <div className="navbar-section">
                    <div className="nav-logo">Portfolio</div>
                    <ul className='navlinks'>
                        <li className="navlink">
                            <a href='#about'>About</a>
                        </li>
                        <li className="navlink">
                            <a href='#skills'>Skills</a>
                        </li>
                        <li className="navlink">
                            <a href='#experience'>Experience</a>
                        </li>
                        <li className="navlink">
                            <a href='#project'>Project</a>
                        </li>
                    </ul>
                    <div className="">
                        <button className='nav-btn'>Github</button>
                        <button className='nav-btn'>Linkedin</button>
                        <button className='nav-btn'>X</button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Header
