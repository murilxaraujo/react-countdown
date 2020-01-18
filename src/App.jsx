import React, { Component } from "react";
import "./app.scss";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: "December 25, 2020",
      newDeadline: ""
    };
  }

  changeDeadLine() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  handlechange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render = () => (
    <div className="App">
      <div className="title">Contdown to {this.state.deadline}</div>
      <div className="clock">
        <Clock deadline={this.state.deadline} />
      </div>
      <div className="form">
        <Form inline>
          <FormControl
            type="text"
            name="newDeadline"
            className="deadlineInput"
            value={this.state.newDeadline}
            placeholder="new date"
            onChange={event => this.handlechange(event)}
          />
          <Button onClick={this.changeDeadLine.bind(this)}>Update</Button>
        </Form>
      </div>
    </div>
  );
}
