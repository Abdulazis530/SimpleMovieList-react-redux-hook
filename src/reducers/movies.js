const movies = (state = { movies: [], searchedMovie: "", currentPage: 1, totalMovies: 0, error: "", loading: false, location: "home" }, action) => {
    const dataStorage = localStorage.getItem("favorite movie") ? JSON.parse(localStorage.getItem("favorite movie")) : []
    switch (action.type) {
        case "LOAD_MOVIES_SUCCESS":
            console.log('toaldata', action)
            return {
                ...state,
                movies: action.movies.Search.map(movie => {
                    movie.favorite = false

                    if (dataStorage.length) {
                        dataStorage.forEach(item => {
                            if (movie.imdbID === item.imdbID) {
                                movie.favorite = true
                            }
                        })
                    }
                    return movie
                }),
                searchedMovie: action.movie,
                currentPage: action.page,
                totalMovies: Math.ceil(action.movies.totalResults / 10),
                error: "",
                loading: false
            }
        case "TOGGLE_FAVORITE":
            let favoriteMovie = []
            if (state.location === "home") {
                favoriteMovie = state.movies.map(movie => {
                    if (movie.imdbID === action.id) {
                        movie.favorite = !movie.favorite

                        const indexChecking = dataStorage.findIndex(item => item.imdbID === movie.imdbID)
                        if (movie.favorite) {
                            dataStorage.push(movie)
                        } else {
                            if (indexChecking !== -1) dataStorage.splice(indexChecking, 1)

                        }
                    }
                    return movie
                })
            } else {

                if (state.movies.length === 1 && state.currentPage > 1) {
                    console.log("WKWKWK", state)
                    const limit = 10
                    const offset = (state.currentPage - 2) * limit

                    const index = dataStorage.findIndex(item => item.imdbID === state.movies[0].imdbID)
                    dataStorage.splice(index, 1)
                    localStorage.setItem("favorite movie", JSON.stringify(dataStorage))

                    const totalData = Math.ceil(dataStorage.length / 10)
                    favoriteMovie = dataStorage.splice(offset, limit)

                    return {
                        ...state,
                        movies: favoriteMovie,
                        totalMovies: totalData,
                        currentPage: state.currentPage - 1
                    }


                } else {
                    favoriteMovie = state.movies.filter(movie => {
                        if (movie.imdbID === action.id) {
                            movie.favorite = !movie.favorite
                        }
                        const indexChecking = dataStorage.findIndex(item => item.imdbID === movie.imdbID)
                        if (!movie.favorite) {
                            if (indexChecking !== -1) dataStorage.splice(indexChecking, 1)
                        }

                        return movie.favorite
                    })
                }
            }
            localStorage.setItem("favorite movie", JSON.stringify(dataStorage))
            return {
                ...state,
                movies: favoriteMovie,

            }
        case "LOADING_TRUE":
            return {
                ...state,
                movies: [],
                loading: true
            }

        case "LOAD_MOVIES_FAILED":
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case "SET_LOCATION":
            return {
                movies: [],
                searchedMovie: "",
                currentPage: 1,
                totalMovies: 0,
                error: "",
                loading: false,
                location: action.location
            }
        default:
            return state
    }
}

export default movies