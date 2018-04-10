import React, { Component } from 'react';
import listDriverJson from '../drivers.json';
import ListDriver from '../components/listDriverPage/ListDriver';
import Modal from '../components/listDriverPage/Modal'

class ListDriverPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      drivers: [],
      selectedDriver : {},
      isShown : false
    }
    this.notifyClicked = this.notifyClicked.bind(this);
    this.sendClicked = this.sendClicked.bind(this);
    this.cancelClicked = this.cancelClicked.bind(this);
  }

  notifyClicked(e){
    console.log("notify container clicked");
    this.setState({
        isShown : true,
        selectedDriver : e
    })
  }
  sendClicked(e){
    console.log("send container clicked");
    // submit api here, if success then make isShown false
    this.setState({
        isShown : false
    })
    alert("Message = " + e.message);
  }

  cancelClicked(e){
    console.log("cancel container clicked");
    this.setState({
        isShown : false
    })
  }

  componentDidMount(){
    this.getDrivers();
  }

  getDrivers(){
    this.setState({ drivers: listDriverJson.drivers});
  }

  render() {
    return (
      <div>
        {
            <ListDriver drivers={this.state.drivers} notifyClicked ={this.notifyClicked}/>
        }
        {
            this.state.isShown ? <Modal selectedDriver = {this.state.selectedDriver} 
            sendClicked={this.sendClicked} cancelClicked={this.sendClicked}/> : null
        }
      </div>
    );
  }
}

export default ListDriverPage;
