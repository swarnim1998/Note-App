import React, { Component } from 'react';

export class  Navigation extends Component
 {
  constructor(){
    super();
    this.state={
      search: []
    }
 }
  
 
  render()
  {
    return (
      <div className="header">  
      <h2>My Notes</h2>
      <div className="search">
        <input  placeholder="Search" onChange={this.props.search}>
        </input>         
      </div>
     </div>
    );  
  }
}