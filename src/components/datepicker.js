/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker';
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

class renderDatePicker extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: ''
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.props.input.onChange(moment(date).format("MM-DD-YYYY"))
  }

  render () {
    const {
      input, placeholder,
      meta: {touched, error}
    } = this.props
    return (
      <div>
        {touched && error && <div className="form-error">{error}</div>}
        <DatePicker
          {...input}
          placeholder={placeholder}
          dateFormat="MM-DD-YYYY"
          showYearDropdown
          showMonthDropdown
          selected={input.value ? moment(input.value, "MM-DD-YYYY") : null}
          onChange={this.handleChange}
        />
        
      </div>
    )
  }
}

export default renderDatePicker