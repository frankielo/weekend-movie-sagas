import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {

    const dispatch = useDispatch("")

    const [title, settitle] = useState("")
    const [poster, setposter] = useState("")
    const [description, setdescription] = useState("")
    const [genre_id, setgenre_id] = useState("")

    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_GENRES'
        })
    }, [])

    const onSaveHandler = () => {
        const myObj = {
            title,poster,description,genre_id
        }
        dispatch({
            type: 'ADD_MOVIE',
            payload:myObj
        })
        navigate('/')
    }

    const genreList = useSelector(state => state.genreList)

    const navigate = useNavigate()

    return (
        <div>
            <input type="" placeholder="Enter title" onChange={(e)=>{settitle(e.target.value)}}/>
            <br/>
            <input type="" placeholder="Enter movie poster URL" onChange={(e)=>{setposter(e.target.value)}}/>
            <br/>
            <textarea onChange={(e)=>{setdescription(e.target.value)}}></textarea>
            <br/>
            <select name="genre" onChange={(e)=>{setgenre_id(e.target.value)}}>
                {genreList.map(genre=>
                    <option key={genre.id} value={genre.id}>{genre.name}</option>)}
            </select>
            <br/>
            <button onClick={()=>{navigate('/')}}>Cancel</button>
            <button onClick={onSaveHandler}>Save</button>
        </div>
    )
}

export default AddMovie
