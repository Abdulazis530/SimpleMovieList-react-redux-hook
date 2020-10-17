import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Spinner, Row, Col, Container } from 'react-bootstrap'
import { toggleModal } from '../actions'

export default function DetailMovieModal() {
    const { movie, show, loading } = useSelector(state => state.movieDetail)
    const dispatch = useDispatch()

    console.log(movie)
    if (loading) {
        return (
            <>
                <div className="overlay" />
                <div className="loader">
                    <Spinner animation="border" variant="success" />
                </div>
            </>
        )
    }
    return (
        <>
            <Modal show={show} size="lg" onHide={() => dispatch(toggleModal())}>
                <Modal.Header closeButton>
                    <div className="container-fluid text-center">
                        <h1>Detail Movie</h1>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <img src={movie.Poster} alt={movie.Title} />
                            </Col>
                            <Col md={4}>
                                <Row><h3> {movie.Title}</h3></Row>
                                <Row><p>imdbRating : {movie.imdbRating} </p></Row>
                                <Row><p>imdbVotes : {movie.imdbVotes} </p></Row>
                                <Row><p>Metascore : {movie.Metascore} </p></Row>
                                <Row><p>Release Year : {movie.Released} </p></Row>
                                <Row><p>Runtime : {movie.Runtime} </p></Row>
                                <Row><p>Director : {movie.Director} </p></Row>
                                <Row><p>Language : {movie.Language} </p></Row>
                                <Row><p>Country : {movie.Country} </p></Row>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col md={12}>
                                <p>Plot : {movie.Plot} </p>
                            </Col>
                            <Col md={12}>
                                <p>Writer : {movie.Writer} </p>
                            </Col>
                            <Col md={12}>
                                <p>Actors : {movie.Actors} </p>
                            </Col>
                            <Col md={12}>
                                <p>Director : {movie.Director} </p>
                            </Col>
                            <Col md={12}>
                                <p>Awards : {movie.Awards} </p>
                            </Col>
                        </Row>
                    </Container>


                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}



