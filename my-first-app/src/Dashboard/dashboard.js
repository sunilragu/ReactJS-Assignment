import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
//import {BrowserRouter,Route} from 'react-router';
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';

import { MuiThemeProvider} from '@material-ui/core/styles';

class Dashboard extends Component {
  constructor(props){

    super(props);
    var localloginComponent=[];

    localloginComponent.push(
        <MuiThemeProvider key={"theme"}>
        <div>
        <h1>Welcome!</h1>
       </div>
      </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      loginComponent:localloginComponent,
      signUpScreen:[] 

    }
  }
  
  loginClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("Login successfull");
    alert('Login successfull');
   
  }

  signUpClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("regi1 successfull");
    

    var signUpScreen=[];
   // signUpScreen.push(<SignUp appContext={self.props.appContext}/>);
    self.props.appContext.setState({loginPage:[],signUpScreen:signUpScreen})
    //setState({loginPage:[],signUpScreen:signUpScreen});

   // uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
   // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    console.log("regi443 successfull");
  }
  
  render() {
    return (
       
      <div>
          <MuiThemeProvider>
        <AppBar
             title="Dashboard"
           />
        </MuiThemeProvider>
          
        <MuiThemeProvider>
        <div>
        <p>Dashboard:</p>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

const center = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default Dashboard;