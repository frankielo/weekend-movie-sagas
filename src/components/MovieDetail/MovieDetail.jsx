import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const MovieDetail = () => {

    const movieList = useSelector(state => state.movies)

    const {id} = useParams()
    return (
        <div>
            <h2>{movieList[id - 1].title}</h2>
            <img src={`../${movieList[id - 1].poster}`} alt={movieList[id - 1].title} />
            <p>{movieList[id - 1].description}</p>
        </div>
    )
}

export default MovieDetail;
