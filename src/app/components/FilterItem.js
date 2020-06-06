import React, { Component } from 'react';

export default class FilterItem extends Component {
  render() {
    return (
        <li className={this.props.item.id===this.props.selectedItem?"active":""} onClick={()=>{this.props.onItemClick(this.props.item.id)}}> <img src={"assets/images/"+this.props.item.icon} alt=""/> <span>{this.props.item.name}</span> </li>
    );
  }
}
