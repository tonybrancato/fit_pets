/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';

import AddDataForm from './add-data-form';

class AddDataBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._onButtonClick}>ADD NEW WEIGHT</button>
        {this.state.showComponent ?
           <AddDataForm /> :
           null
        }
      </div>
    );
  }
}

export default AddDataBtn
// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(AddDataBtn);