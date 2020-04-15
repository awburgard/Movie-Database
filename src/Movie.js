import React from 'react';
import PropTypes from 'prop-types'

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <h3> {this.props.movie.title} </h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}


Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    })
}

Movie.defaultProps = {
    desc: 'Description not avaliable'
}