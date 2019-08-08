import React, { Component } from 'react';
import MenuComponent from '../components/MenuComponent'

class TeaPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teas: ["medium yogurt grapefruit half sugar no ice with mango jelly"]
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTea = () => {
    let teaArr = this.state.teas
    teaArr.push(this.state.tea)
    this.setState({
      teas: teaArr
    })
  }

  render() {
    return (
      <>
        <h1 align="center">WCS Tea Menu</h1>
        <br />
        <MenuComponent
          drinks={this.state.teas}
          inputName="tea"
          onChange={this.handleChange}
          addToMenu={this.addTea}
        />
      </>
    )
  }
}

export default TeaPage
