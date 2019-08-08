import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';
import '../App.css';

class MenuComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div align="center">
          <br />
          {this.props.drinks.map(drink => (
            <p>{drink}</p>
          ))}
        </div>
        <Form className="form" inline>
          <Input name={this.props.inputName} onChange={this.props.onChange}/>
          <Button className="button" onClick={this.props.addToMenu}>Submit</Button>
        </Form>
      </>
    )
  }
}

export default MenuComponent
