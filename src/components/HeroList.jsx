import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import "./styles/HeroList.css"
import Pagination1 from './Pagination1'

const HeroList = () => {

    const [heros, setHeros] = useState()

    const totalHeros = heros?.data.results.length;
    const [herosPerPage, setHerosPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)


    const lastIndex = currentPage * herosPerPage
    const firstIndex =  lastIndex - herosPerPage
    

    useEffect(() => {
        const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3e57dc46ffb88c335802d19fd41f1415&hash=366b16c139c5f593e1b6ab28d5b1461a"
        axios.get(URL)
            .then((res) => setHeros(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
    
        <>
            <Pagination1 herosPerPage={herosPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalHeros={totalHeros}/> 
            <div className="container-heros">
                {heros?.data.results.map(hero => (
                    <div className="card-hero" key={hero?.id}>
                        <div className='titulo'>
                            <img className='img-izq' src="/formanivel.png" alt="" />
                            <h3>{hero?.name}</h3>
                            <img className='img-der' src="/formanivel1.png" alt="" />
                        </div>
                        
                        <figure className="container-img">
                            <img className='circulo' src="/circulolineas.png" alt="" />
                            <img className='container-img-img' src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} alt="" />
                            <img className='diamantes' src="/diamantes.png" alt="" />
                        </figure>
                        <div className="info__pelis">
                            <div className='hero__comics'>
                                <h2 className='comic__title'>Comics:</h2>
                                <h2 className='comic__value'>{hero?.comics.available}</h2>
                            </div>
                            <div className='hero__peliculas'>
                                <h2 className='movie__title' >Peliculas:</h2>
                                <h2 className='movie__value'>{hero?.series.available}</h2>
                            </div>
                        </div>
                        
                    </div>
                )).slice(firstIndex,lastIndex)}
            </div>
            <Pagination herosPerPage={herosPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalHeros={totalHeros}/>       
        </>

    )
}

export default HeroList