import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >What shoud I do?
        </button>
      </div>
    );
  }
}

class Options extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove ALL</button>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  }
}

class AddOption extends Component {

  handleAddOption(e) {
    e.preventDefault();
    if (e.target.option.value) {
    alert(e.target.option.value);
    }
  }

  render() {
	   return (
       <div>
         <form onSubmit={this.handleAddOption} >
           <input type="text" name="option" />
           <button>Add Option</button>
         </form>
      </div>
     );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] }
    });
  }

  handlePick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomIndex]);
  }

  render() {
    const title = 'Decision Helper';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
         />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}
