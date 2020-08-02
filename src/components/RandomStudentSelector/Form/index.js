import React, {useEffect} from 'react'
import PropTypes from 'prop-types'


export const Form = ({formHandler}) => {

  useEffect(() => { document.querySelector('form').reset()})

const handleSubmit = (event) => {
  event.preventDefault()
formHandler(event)
}

return(
  <form onSubmit={handleSubmit}>
    <input type="text"/>
<button>Add Student</button>
  </form>
)
}

Form.defaultProps = {
  value:"",
}

Form.propTypes = {
  formHandler:PropTypes.func,
  value:PropTypes.string,
}
