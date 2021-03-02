import React, { Component } from 'react'
import FragmentDemo from './Component/FragmentDemo'
import Table from './Component/Table'
import PureComp from './Component/PureComp'
import ParentComp from './Component/ParentComp'
import RefsDemo from './Component/RefsDemo'

class App extends Component {
  render() {
    return (
      <div classname="App">
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <ParentComp /> */}
        <RefsDemo />
      </div>
    )
  }
}

export default App

