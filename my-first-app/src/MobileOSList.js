import logo from './logo.svg';
import './App.css';
import React from 'react';

class MobileOSList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Mobile OS - for {this.props.name}</h1>
        <ul>
          <li>Android</li>
          <li>iOS</li>
      
        </ul>
      </div>
    );
  }
}

export default MobileOSList;
