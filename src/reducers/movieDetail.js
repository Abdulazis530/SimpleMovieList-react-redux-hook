const movieDetail = (state = { movie: {}, show: false, loading: false }, action) => {

    switch (action.type) {
        case "LOAD_DETAIL_MOVIES_SUCCESS":
            return {
                movie: action.movie,
                show: !state.show,
                loading: !state.loading

            }
        case "TOGGLE_MODAL":
            return {
                ...state,
                show: !state.show
            }
        case "LOADING_DETAIL_TRUE":
            return {
                ...state,
                loading: !state.loading
            }
        case "LOAD_DETAIL_MOVIES_FAILED":
        default:
            return state
    }
}

export default movieDetail