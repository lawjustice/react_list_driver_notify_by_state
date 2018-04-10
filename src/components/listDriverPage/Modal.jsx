import React, { Component } from 'react';
import './css/Modal.css';

class Modal extends Component {
  render() {
    return (
        <div>
            <div className="overlay"></div>
            <div className="modal-container">
                <div className="modal-content">
                    <h3 className="modalTitle"> Message {this.props.selectedDriver.name} </h3>
                    <textarea />
                    <div>
                        <button  onClick={this.props.sendClicked}>Send</button>
                        <button  onClick={this.props.cancelClicked}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

export default Modal;
