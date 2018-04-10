import React, { Component } from 'react';
import './css/TableComponent.css';

class Driver extends Component {
  constructor(props){
    super(props);
    this.notifyClicked = this.notifyClicked.bind(this);
  }

  notifyClicked(e){
    console.log("notify state");
    this.props.notifyClicked (this.props.driver)
  }

  render() {
    return (
      <tr className="table-body">
        <td>{this.props.driver.name}</td>
        <td>{this.props.driver.phone}</td>
        <td>{this.props.driver.suspended === 0 ? 'NO' : 'YES'}</td>
        <td>
        {
            this.props.driver.suspended === 0 ? 
            (<button onClick={this.notifyClicked}>Notify</button>) : 
            (<button disabled>Notify</button>)
        }
        </td>
      </tr>)
  }
}

export default Driver;
