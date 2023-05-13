import React from 'react'
import "./Consider.css"

import consider from "../../Assets/Img/consider.png"
import protect from "../../Assets/Img/protect.svg"
import starImg from "../../Assets/Img/star.svg"

 const Consider = () => {
  return (
    <section className='consider-section'>
        <div className="container">
            <div className="consider__top">
                <div className="consider__top-info">
                    <h2 className="consider__info-title">How the scenes fit together</h2>
                    <p className="consider__info-text">Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
                </div>
                <img src={consider} alt="consider" width="400"/>
            </div>

            <div className="consider__bottom">
                <h2 className="consider__bottom-title">Consider everyone's best interest</h2>
                <p className="consider__bottom-text">HR is for everyone. Clerksy can help you.</p>

                <ul className="consider__list">
                    <li className="consider__list-item">
                        <img src={protect} alt="" width="60"/>
                        <h3 className='consider__item-title'>Protect Your Company</h3>
                        <p className="consider__item-text">Compliance Audits & Training</p>
                        <p className="consider__item-text">Employee Data Storage</p>
                        <p className="consider__item-text">Policy Drafting</p>
                    </li>
                    <li className="consider__list-item">
                        <img src={starImg} alt="" width="60"/>
                        <h3 className='consider__item-title'>Set Your Employees Up For Success</h3>
                        <p className="consider__item-text">Learning & Development</p>
                        <p className="consider__item-text">Employee Relations</p>
                        <p className="consider__item-text">Benefit Management</p>
                        <p className="consider__item-text">Employee Performance</p>
                    </li>
                    <li className="consider__list-item">
                        <img src={starImg} alt="" width="60"/>
                        <h3 className='consider__item-title'>Know Your Industry's Legal Landscape</h3>
                        <p className="consider__item-text">Work Place Investigations</p>
                        <p className="consider__item-text">Employee Mediations</p>
                        <p className="consider__item-text">Performance Tracking</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Consider;