import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Decision Helper',
      options: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
      this.setState({ options: this.state.options.concat(option) });
      e.target.elements.option.value = '';
    } else {
      console.log(this.state.options);
    }
  }

  onRemoveAll() {
    this.setState({ options: [] });
  }

  onMakeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

  }

  render() {
    return (
      (
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <ol>{this.state.options.map((option) => <li>{option}</li>)}</ol>
          <button disabled={this.state.options.length === 0} onClick={this.onMakeDecision}>What should I do?</button>
          <button onClick={this.onRemoveAll}>Remove All</button>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      )
    );
  }
}
