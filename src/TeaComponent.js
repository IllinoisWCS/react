import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';
import './App.css';

class TeaComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bobas: ["yogurt grapefruit half sugar no ice with mango jelly"]
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addBoba = () => {
    let bobaArr = this.state.bobas
    bobaArr.push(this.state.boba)
    this.setState({
      bobas: bobaArr
    })
  }

  render() {
    return (
      <>
        <h1 align="center">WCS Tech Team Boba Menu</h1>
        <div align="center">
          <br />
          {this.state.bobas.map(boba => (
            <p>{boba}</p>
          ))}
        </div>
        <Form className="form" inline>
          <Input name="boba" onChange={this.handleChange}/>
          <Button className="button" onClick={this.addBoba}>Submit</Button>
        </Form>
      </>
    )
  }
}

export default TeaComponent;
