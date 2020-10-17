import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovies } from '../actions'

export default function SearchBox() {
    const [searchedMovie, setSearchedMovie] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (searchedMovie) dispatch(searchMovies(searchedMovie))
    }

    return (
        <>
            <div className="wrapper">
                <input onChange={(event) => setSearchedMovie(event.target.value)} type="text" className="input" name="searchedMovie" value={searchedMovie} placeholder="What movie do you want to watch?" />
                <div className="searchbtn" onClick={handleSubmit}>
                    <i className="fas fa-search"></i>
                </div>
            </div>


        </>
    )
}
