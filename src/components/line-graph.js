/*eslint-disable*/
import React from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

export default class LineExpample extends React.Component {
  // displayName: 'LineExample',

  render() {
    defaults.global.animation = false;
    return (
      // <div>
        <Line 
          data={this.props.data}
          // width={375}
          height={250}
          options={{
            maintainAspectRatio: false
          }} 
        />
      /* </div> */
    );
  } 
};
