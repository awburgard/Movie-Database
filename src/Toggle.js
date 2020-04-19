import React from 'react';
import { connect } from 'react-redux' // connect is what connects react and redux

const Toggle = ({ messageVisibility }) => (
    <div>
        {messageVisibility && <p>You will see this if Redux works</p>}
        <button>Toggle</button>
    </div>
)


// This allows us to pick which parts of our state tree we want to access
const mapStateToProps = state => ({
    messageVisibility: state.message.messageVisibility,
});


export default connect(mapStateToProps)(Toggle); // this is how we connect our component to connect