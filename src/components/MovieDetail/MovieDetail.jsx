import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const MovieDetail = () => {

    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movies)
    const genreList = useSelector(state => state.genres)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({
            type: "FETCH_MOVIE_GENRE",
            payload:id
        })
    }, [])

    const {id} = useParams()
    return (
        <div>
            <h2>{movieList[id - 1].title}</h2>
            <img src={`../${movieList[id - 1].poster}`} alt={movieList[id - 1].title} />
            <p>{movieList[id - 1].description}</p>
            <h3>Genre</h3>
            {genreList.map((element, index)=>
                <p key={index}>{element.name}</p>
            )}
            <button onClick={()=>navigate("/")}>Back To List</button>
        </div>
    )
}

export default MovieDetail;
