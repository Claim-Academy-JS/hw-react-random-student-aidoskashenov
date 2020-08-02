import React from 'react'
import {Form} from './Form'

import {getRandomIntInclusive} from 'utils'

export class RandomStudentSelector extends React.Component {

  state = {
    selectedStudent: "",
    studentList:[]
  }

handleClick = () => {
  this.setState({selectedStudent:this.state.studentList[getRandomIntInclusive(0, this.state.studentList.length-1)]})
}

handleForm = ({target}) => {
  this.setState(prevSate => {
    return({
studentList: prevSate.studentList.concat(target.elements[0].value)
    })
  })
}
render() {
  return <main>
<Form formHandler={this.handleForm}/>

<button onClick={this.handleClick}>Selected Student</button>

<p>{this.state.selectedStudent}</p>
  </main>
}
}
