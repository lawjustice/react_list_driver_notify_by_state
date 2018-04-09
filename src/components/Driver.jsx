import React, { Component } from 'react';

class Driver extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShown : false
    };
    this.notifyClicked = this.notifyClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
    this.cancelClicked = this.cancelClicked.bind(this);
  }

  notifyClicked(e){
    this.setState({isShown: true});
    console.log("notify");
  }
  sendClicked(e){
    this.setState({isShown: false});
    console.log("send");
  }
  cancelClicked(e){
    this.setState({isShown: false});
    console.log("cancel");
  }

  render() {
    return (
      <tr>
        <td>{this.props.driver.name}</td>
        <td>{this.props.driver.phone}</td>
        <td>{this.props.driver.suspended === 0 ? 'NO' : 'YES'}</td>
        <td>
        {
            this.props.driver.suspended === 0 ? 
            (<button id ="notify" onClick={this.notifyClicked}>Notify</button>) : (<button disabled>Notify</button>)
        }
        </td>
        <td>{
          this.state.isShown ? (<div className="modal">
          <textarea />
          <div>
            <button id="send" onClick={this.sendClicked}>Send</button>
            <button  onClick={this.cancelClicked}>Cancel</button>
          </div>
        </div>) : null
        }</td>
      </tr>)
  }
}

export default Driver;
