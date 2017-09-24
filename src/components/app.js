import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      this.setState({options: this.state.options.concat(option)});
      e.target.elements.option.value = '';
    } else {
      console.log(this.state.options);
    }
  }

  render() {
    return (
      (
        <div>
          <div>{this.state.options.map((option) => <p>{option}</p>)}</div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      )
    );
  }
}
