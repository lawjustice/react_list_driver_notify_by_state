import React, { Component } from 'react';
import drivers from '../drivers.json';
import Driver from './Driver';

class Drivers extends Component {
  constructor(props){
    super(props);
    this.state = {
      drivers: []
    }
  }

  componentDidMount(){
    this.getDrivers();
  }

  getDrivers(){
    this.setState({ drivers: drivers.drivers});
  }

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
              this.state.drivers.map((driver, i) => {
                return <Driver driver={driver} key={i}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Drivers;
