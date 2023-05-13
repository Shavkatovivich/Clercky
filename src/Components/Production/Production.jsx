import React from 'react'
import "./Production.css"

//Imports images

import message from "../../Assets/Img/message.png"
import caseImg from "../../Assets/Img/case.png"
import documents from "../../Assets/Img/documents.png"
import hrgirl from "../../Assets/Img/girlWork.png"



const Production = () => {
  return (
    <section className='production-section'> 
        <div className="container">
            <h2 className="production__title">HR Production of the Highest Quality</h2>

            <ul className="production__list">
                <li className="production__list-item">
                    <img src={message} alt="" width="90" height="108"/>
                    <p className="production__item-text">Educates & Informs <br /> Employee Expectations</p>
                </li>
                <li className="production__list-item">
                    <img src={caseImg} alt="" width="90" height="108"/>
                    <p className="production__item-text">Protects Your Business <br /> Just in Case</p>
                </li>
                <li className="production__list-item">
                    <img src={documents} alt="" width="90" height="108"/>
                    <p className="production__item-text">Manages & Stores <br /> Important Documents</p>
                </li>
                <li className="production__list-item">
                    <img src={hrgirl} alt="" width="90" height="108"/>
                    <p className="production__item-text">Create a Healthy <br /> Work Environment</p>
                </li>
            </ul>
        </div>    
    </section>
  )
}


export  default Production;