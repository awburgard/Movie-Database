import React from 'react';
import PropTypes from 'prop-types'

export default function Movie(props) {
    return (
        <div>
            <h3> {props.movie.title} </h3>
        </div >
    )
}


Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    })
}