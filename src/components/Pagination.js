import React from 'react'
import { useDispatch } from 'react-redux'
import { searchMovies, getFavoritesMovie } from '../actions'

export default function Pagination({ page, totalPage, movie, location }) {

    const dispatch = useDispatch()

    const handleFirstPage = () => {

        location === "home" ? dispatch(searchMovies(movie, 1)) : dispatch(getFavoritesMovie(1))
    }
    const handlePrevious = () => {
        location === "home" ? dispatch(searchMovies(movie, page - 1)) : dispatch(getFavoritesMovie(page - 1))
    }

    const handleNext = () => {
        location === "home" ? dispatch(searchMovies(movie, page + 1)) : dispatch(getFavoritesMovie(page + 1))
    }

    const handleLastPage = () => {

        location === "home" ? dispatch(searchMovies(movie, totalPage)) : dispatch(getFavoritesMovie(totalPage))
    }

    return (
        <nav aria-label="..." className="my-5">
            <ul className="pagination justify-content-center">

                <li className={`page-item ${page === 1 ? "disabled" : ""}`} >
                    <button
                        onClick={handleFirstPage}
                        className="page-link"
                        aria-label="Previous"
                        aria-hidden="true"
                    >&laquo;</button>
                </li>

                <li className={`page-item ${page === 1 ? "disabled" : ""}`} >
                    <button className="page-link" onClick={handlePrevious}>Previous</button>
                </li>

                <li className="page-item disabled">
                    <span
                        className="page-link inner-pagination-content"
                    >{page} of {totalPage} </span>
                </li>

                <li className={`page-item ${page === totalPage ? "disabled" : ""}`} >
                    <button type="button" className="page-link" onClick={handleNext}>Next</button>
                </li>

                <li className={`page-item ${page === totalPage ? "disabled" : ""}`} >
                    <button className="page-link"
                        aria-label="Next"
                        aria-hidden="true"
                        onClick={handleLastPage}
                    >&raquo;</button>
                </li>
            </ul>
        </nav>
    )
}
