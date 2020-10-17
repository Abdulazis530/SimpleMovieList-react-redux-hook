import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movie from './Movie'
import Pagination from './Pagination'
import { Spinner } from 'react-bootstrap';
import { getFavoritesMovie } from '../actions';
import DetailMovieModal from './DetailMovieModal';

export default function MovieList() {
    const { movies, searchedMovie, totalMovies, currentPage, error, loading, location } = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        if (location === "favorites") {
            dispatch(getFavoritesMovie())
        }
    }, [location])

    return (
        <>
            <div class="container mt-5 card text-center">
                <div class="card-body">

                    {!error && !loading && movies.length > 0 && <table class="table table-striped table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Year</th>
                                <th scope="col">imdB iD</th>
                                <th scope="col">Favorite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map((movie) => (
                                    <Movie
                                        key={movie.imdbID}
                                        title={movie.Title}
                                        year={movie.Year}
                                        imdbID={movie.imdbID}
                                        favorite={movie.favorite}
                                        location={location}
                                    />
                                ))

                            }
                        </tbody>
                    </table>

                    }
                    {!error && loading && <>
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                    </>}
                    {error && !loading && <h1>{error}</h1>}

                </div>
            </div>
            {movies.length && !error ? <Pagination page={currentPage} movie={searchedMovie} totalPage={totalMovies} location={location} /> : <></>}
            <DetailMovieModal />
        </>





    )
}
