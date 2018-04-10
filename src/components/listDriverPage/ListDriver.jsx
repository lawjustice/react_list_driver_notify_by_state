import React, { Component } from 'react';
import Driver from './Driver';

class ListDriver extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Suspended</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.drivers.map((driver, i) => {
                return <Driver driver={driver} key={i} notifyClicked={this.props.notifyClicked}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListDriver;
