import React from 'react'
import "./styles/Multimedia.css"

const Multimedia = () => {
  return (
    <div className='multimedia'>
        <div className='multimedia__progressbar'>
            <h2>PROGRESO DE PELICULAS PRODUCIDAS</h2>
            <div className="carga"></div>
        </div>
        <div className='multimedia__video'>
            <iframe className='video' src="https://www.youtube.com/embed/VPzBhDHmcm8?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='multimedia__img'>
            <div className='img'></div>
        </div>
    </div>
  )
}

export default Multimedia