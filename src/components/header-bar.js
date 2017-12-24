/*eslint-disable*/

import React from 'react';
import {connect} from 'react-redux';


export class HeaderBar extends React.Component {

    render() {
        // Only render the log out button if we are logged in

        return (
            <div className="header-bar">
                <h1>Pet Fit</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
