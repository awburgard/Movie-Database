import React from 'react';
import Movie from './Movie';
import styled from 'styled-components';
import { connect } from 'react-redux' // connect is what connects react and redux
import { bindActionCreators } from 'redux';
import { getMovies } from './actions'

class MoviesList extends React.Component {
    componentDidMount() {
        const { getMovies, isLoaded } = this.props;
        if (!isLoaded) {
            getMovies();
        }
    }

    render() {
        const { movies, isLoaded } = this.props;
        if (!isLoaded) return <h1>Loading</h1>
        return (
            <MovieGrid>
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>
        );
    }

}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    isLoaded: state.movies.moviesLoaded
});

// binds our action creatores to dispatch
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getMovies,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);


const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;