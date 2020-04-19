import React from 'react';
import { connect } from 'react-redux' // connect is what connects react and redux
import { toggleMessage, getMovies } from './actions';
import { bindActionCreators } from 'redux';

const Toggle = ({ messageVisibility, toggleMessage, getMovies}) => (
    <div>
        {messageVisibility && <p>You will see this if Redux works</p>}
        <button onClick={toggleMessage}>Toggle</button>
        <button onClick={getMovies}>Load Movies</button>
    </div>
)


// This allows us to pick which parts of our state tree we want to access
const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});

// binds our action creatores to dispatch
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        toggleMessage,
        getMovies,
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Toggle); // this is how we connect our component to connect