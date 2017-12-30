/*eslint-disable*/
import React from 'react';
import { Line } from 'react-chartjs-2';
// export class NavBar extends React.Component
export default class LineExpample extends React.Component {
  // displayName: 'LineExample',

  render() {
    return (
      // <div>
        <Line 
          data={this.props.data}
          width={375}
          height={250}
          options={{
            maintainAspectRatio: false
          }} 
        />
      /* </div> */
    );
  } 
};
