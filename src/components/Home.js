import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header';
import MovieList from './MovieList';
import { setLocation } from '../actions'



export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLocation("home"))
    }, [dispatch])


    return (
        <>
            <Header />
            <MovieList />
        </>
    )
}
