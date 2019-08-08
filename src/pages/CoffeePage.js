import React, { Component } from 'react'
import MenuComponent from '../components/MenuComponent'

class CoffeePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffees: ["iced matcha latte"]
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addCoffee = () => {
    let coffeeArr = this.state.coffees
    coffeeArr.push(this.state.coffee)
    this.setState({
      coffees: coffeeArr
    })
  }

  render() {
    return (
        <>
        <h1 align="center">WCS Coffee Menu</h1>
        <br />
        <MenuComponent
          drinks={this.state.coffees}
          inputName="coffee"
          onChange={this.handleChange}
          addToMenu={this.addCoffee}
        />
      </>  
    )
  }
}

export default CoffeePage
