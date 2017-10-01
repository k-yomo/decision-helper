import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <div>
      <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        >
        <h2>Selected Option</h2>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okey</button>
      </Modal>
  </div>
);

export default OptionModal;
