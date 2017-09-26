import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Decision Helper</h1>
        <h3>Put your life in the hands of a computer</h3>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button>What shoud I do?</button>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class Option extends Component {
  render() {
    <div>Options component here</div>;
  }
}

class AddOption extends Component {

  render() {
	   return (
       <div>AddOption Component here</div>
     );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
