import React, { Component } from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >What shoud I do?
      </button>
    </div>
  );
};

export default Action;
