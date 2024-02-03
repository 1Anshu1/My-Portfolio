import React from 'react'
import './style.css'
import Layout from '../layout/Layout'
import { skills } from '../../data/constants'

const Skill = () => {
    return (
        <div id='skills' className='skill'>
            <Layout>
                <div className="skill-title">Skills & Tools</div>
                <div className="skill-section">
                    <div className="field">
                        <div className="field-name">Frontend</div>
                        <div className="skill-box">
                            {skills[0].skills.map((item, id) => (
                                <div key={id} className="skill-name">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-name">Backend</div>
                        <div className="skill-box">
                            {skills[1].skills.map((item, id) => (
                                <div key={id} className="skill-name">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-name">Others</div>
                        <div className="skill-box">
                            {skills[2].skills.map((item, id) => (
                                <div key={id} className="skill-name">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Skill
