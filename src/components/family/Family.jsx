import React from 'react'
import './family.css'

const Family = () => {
  return (
    <section className='family'>
      <h2 className='family-category'>
        Plant Families in Nigeria
      </h2>
      <div className="family-container">
        <div className="family-card">
            <div className="family-image">
                <img src='images/acanthaceae/Acanthus_montanus.jpg' className='family-thumb' alt='Acanthus montanus'  />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Family
