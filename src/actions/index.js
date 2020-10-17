import axios from 'axios'

const request = axios.create({
    baseURL: 'http://www.omdbapi.com',
    timeout: 10000,
});




export const setLocation = (location) => ({
    type: "SET_LOCATION",
    location
})

const loadMoviesSuccess = (movies, movie, page) => ({
    type: "LOAD_MOVIES_SUCCESS",
    movies,
    movie,
    page
})

const loadMoviesFailed = (error) => ({
    type: "LOAD_MOVIES_FAILED",
    error
})

export const toggleFavorite = (id) => ({
    type: "TOGGLE_FAVORITE",
    id

})

export const setLoading = () => ({
    type: "LOADING_TRUE"
})

export const searchMovies = (movie, page = 1) => {
    return dispatch => {
        dispatch(setLoading())
        return request.get(`?apikey=2c75b76e&s=${movie}&page=${page}`)
            .then(function (response) {
                console.log('searchMovie:', response.data)
                if (response.data.Error) {
                    return dispatch(loadMoviesFailed(response.data.Error))

                }
                dispatch(loadMoviesSuccess(response.data, movie, page))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(loadMoviesFailed("Something went wrong!"))
            })
    }
}

export const getFavoritesMovie = (page = 1) => {
    console.log("here insider get faritesMovie")
    return dispatch => {
        const limit = 10
        const offset = (page - 1) * limit
        const favoriteMoviesString = localStorage.getItem("favorite movie")
        const favoriteMovies = JSON.parse(favoriteMoviesString)
        const totalData = favoriteMovies.length
        const dataMovies = favoriteMoviesString ? { Search: favoriteMovies.splice(offset, limit), totalResults: totalData } : { Search: [], totalResults: 0 }
        dispatch(loadMoviesSuccess(dataMovies, "", page))
    }
}

const loadDetailMovieSuccess = (movie) => ({
    type: "LOAD_DETAIL_MOVIES_SUCCESS",
    movie
})


const loadDetailMovieFailed = () => ({
    type: "LOAD_DETAIL_MOVIES_FAILED",
})


export const setLoadingDetail = () => ({
    type: "LOADING_DETAIL_TRUE"
})

export const loadDetailMovie = (id) => {
    return dispatch => {
        dispatch(setLoadingDetail())
        return request.get(`?apikey=2c75b76e&i=${id}`)
            .then(function (response) {

                dispatch(loadDetailMovieSuccess(response.data))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(loadDetailMovieFailed())
            })
    }
}

export const toggleModal = () => ({
    type: "TOGGLE_MODAL",
})




// export const loadMovies = (movie, page) => {
//     return dispatch => {
//         return request.get(`?apikey=2c75b76e&s=${movie}&page=${page}`)
//             .then(function (response) {
//                 dispatch(loadMoviesSuccess(response.data, movie, page))
//             })
//             .catch(function (error) {
//                 console.log(error)
//                 dispatch(loadMoviesFailed())
//             })
//     }
// }
