import React from 'react';
import { connect } from 'react-redux' // connect is what connects react and redux
import { toggleMessage } from './actions'

const Toggle = ({ messageVisibility, dispatch }) => (
    <div>
        {messageVisibility && <p>You will see this if Redux works</p>}
        <button onClick={() => dispatch(toggleMessage())}>Toggle</button>
    </div>
)


// This allows us to pick which parts of our state tree we want to access
const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});


export default connect(mapStateToProps)(Toggle); // this is how we connect our component to connect