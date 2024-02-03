import React from 'react'
import Typewriter from 'typewriter-effect';
import './style.css'
import Layout from '../layout/Layout'
import anshu from '../../assets/anshu.jpeg'

const HeroBanner = () => {
    return (
        <div className='heroBanner'>
            <Layout >
                <div id='about' className="hero-section">
                    <div className="hero-section-left">
                        Hi, I am
                        <br />
                        Anshu Kumar
                        <br />

                        <span>
                            <Typewriter
                                className='typewriter'
                                options={{
                                    strings: ['I am a FullStack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>

                        <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                        <button className='hero-btn'>Check resume</button>
                    </div>
                    <div className="hero-section-right">
                        <div className='hero-img'>
                            <img src={anshu} alt="" />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default HeroBanner
