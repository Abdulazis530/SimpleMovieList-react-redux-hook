import React from 'react';
import { useSelector } from 'react-redux'
import SearchBox from './SearchBox';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const { movies, location } = useSelector(state => state.movies)

    return (
        <header>
            <Navbar location={location} />
            <SearchBox />
            <h1 className="text-center mt-5 pt-5">
                {movies.length ? "Select your movie" : "Let's search movies"}
            </h1>
        </header>
    )
}
