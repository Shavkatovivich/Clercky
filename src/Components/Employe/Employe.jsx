import React from 'react'
import "./Employe.css"

import employed from "../../Assets/Img/employes.png"

 const Employe = () => {
  return (
    <section className='employe-section'>
        <div className="container">
            <h2 className="employe__title">Employees come in all shapes and sizes. Find the right fit.</h2>
            <p className="employe__text">Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.</p>
            <img src={employed} alt="" width="900"/>
        </div>
    </section>
  )
}

export default Employe;