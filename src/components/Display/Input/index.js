
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'



export const Input = ({ disabled, htmlFor, label, placeholder, type, value, handler }) => {

  return (
    <Fragment>
      <label
        className="screen-reader-text"
        htmlFor={htmlFor}
      >
        Student
      </label>
      <input
        disabled={disabled}
        id={htmlFor}
        onChange={handler}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Fragment>
  )
}

Input.defaultProps = {
  disabled: false,
  type: "text"
}

Input.propTypes = {
  disabled: PropTypes.bool,
  handler: PropTypes.func,
  htmlFor: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}
