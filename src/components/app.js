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
  handlePick() {

  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What shoud I do?</button>
      </div>
    );
  }
}

class Options extends Component {
  handleRemoveAll() {
    alert("removeALl");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove ALL</button>
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
  }

  render() {
    const title = 'Decision Helper';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
