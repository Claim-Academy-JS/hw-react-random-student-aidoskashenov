
import React from 'react'
import PropTypes from 'prop-types'



export const Button = ({ buttonText, className, handler }) => {
  return (
    <button className={className} onClick={handler}>{buttonText}</button>
  )
}

Button.propTypes = {
  button: PropTypes.object,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  handler: PropTypes.func
}
