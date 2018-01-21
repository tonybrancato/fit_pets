import React from 'react';
import './input.css';

export default class Input extends React.Component {
componentDidUpdate(prevProps) {
  if (!prevProps.meta.active && this.props.meta.active) {
    this.input.focus();
  }
}

render() {
  let error;
  if (this.props.meta.touched && this.props.meta.error) {
    error = <div className="form-error">{this.props.meta.error}</div>;
  }

  let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
      <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

  return (
  <div className="form-input">
    {error}
    {warning}
    <input
      placeholder={this.props.placeholder}
      {...this.props.input}
      name={this.props.name}
      id={this.props.id}
      type={this.props.type}
      ref={input => (this.input = input)}
    />
    <label htmlFor={this.props.id}>
      {this.props.label}
    </label>    
  </div>
  );
}}