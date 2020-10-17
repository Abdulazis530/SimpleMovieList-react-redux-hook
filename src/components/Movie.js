import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { toggleFavorite, loadDetailMovie } from '../actions'



export default function Movie({ imdbID, year, favorite, title, location }) {
    const dispatch = useDispatch()

    const handletoggle = () => {
        if (location === "favorites") {
            Swal.fire({
                icon: 'warning',
                title: "Are you sure remove this from favorite?",
                text: "You can't revert this action",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes Delete it!",
                cancelButtonText: "No, Keep it!",
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then(result => {
                if (result.value) {
                    dispatch(toggleFavorite(imdbID))
                }
            })
        } else {
            dispatch(toggleFavorite(imdbID))

        }
    }


    return (
        <tr>
            <th scope="row"><div className="btn btn-outline-dark" onClick={() => dispatch(loadDetailMovie(imdbID))}>{title}
            </div></th>
            <td>{year}</td>
            <td>{imdbID}</td>
            <td> <button className="btn btn-outline-light" onClick={handletoggle}><i className={`fas fa-star ${favorite ? "favorite" : ""}`}></i></button></td>
        </tr>
    )
}
