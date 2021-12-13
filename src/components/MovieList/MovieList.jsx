import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useNavigate} from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={()=>{navigate(`/details/${movie.id}`)}} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
            <button onClick={()=>{navigate("/add")}}>Add a movie</button>
        </main>

    );
}

export default MovieList;