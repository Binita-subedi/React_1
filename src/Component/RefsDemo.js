import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    )
  }
}

export default RefsDemo
