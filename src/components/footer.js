import React from 'react';
import github from './imgs/github.svg';
import './footer.css';


export default class Footer extends React.Component {


render() {
  return (
    <footer>
      Created by Tony Brancato 
      <a href='https://github.com/tonybrancato' target='_blank'>
      <img className='github' src={github} alt="Tony's Github Profile" width='30'></img></a>
    </footer>
  )
}}