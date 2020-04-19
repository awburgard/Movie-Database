import React from 'react';
import { connect } from 'react-redux' // connect is what connects react and redux
import { toggleMessage } from './actions';
import { bindActionCreators } from 'redux';

const Toggle = ({ messageVisibility, toggleMessage }) => (
    <div>
        {messageVisibility && <p>You will see this if Redux works</p>}
        <button onClick={toggleMessage}>Toggle</button>
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
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Toggle); // this is how we connect our component to connect