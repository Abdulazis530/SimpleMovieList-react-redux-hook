import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../actions'
import MovieList from './MovieList'
import Navbar from './Navbar'

export default function Favorites() {
    const dispatch = useDispatch()
    const { location, movies } = useSelector(state => state.movies)
    useEffect(() => {
        dispatch(setLocation("favorites"))
    }, [dispatch])

    return (
        <>
            <Navbar location={location} />
            <h1 className="text-center my-5">{movies.length ? "Your favorite movies!" : "You still dont have favorite movie"}</h1>
            <MovieList />
        </>
    )
}
