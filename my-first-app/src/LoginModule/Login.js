import React, { Component } from 'react';

import { TextField,Button } from '@material-ui/core';
import { MuiThemeProvider} from '@material-ui/core/styles';
import SignUp from './SignUp';
import MenuAppBar from '../Dashboard/Home';
//import {BrowserRouter,Route} from 'react-router';
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import ButtonAppBar from '../Dashboard/Home';


class Login extends Component {
  constructor(props){

    super(props);
    var localloginComponent=[];

    localloginComponent.push(
        <MuiThemeProvider>
        <div>
         <TextField
          
           label="Enter your email ID"
           floatingLabelText="Email Id"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
           
             type="password"
             label="Enter your password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <Button variant="contained" color="primary" style={style} onClick={(event) => this.loginClick(event)}>Login</Button>
           <Button variant="contained"  color="primary" style={style} onClick={(event) => this.signUpClick(event)}>Sign Up</Button>
       </div>
      </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      loginComponent:localloginComponent,
      signUpScreen:[],
      dashboardScreen:[],
      HomePage:[]  

    }
  }
  
  loginClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("Dashboard successfull");
   
    var HomePage=[];
    HomePage.push(<ButtonAppBar appContext={self.props.appContext}/>);
    self.props.appContext.setState({loginPage:[],HomePage:HomePage});
     
  }

  signUpClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("regi1 successfull");
    

    var signUpScreen=[];
    signUpScreen.push(<SignUp appContext={self.props.appContext}/>);
    self.props.appContext.setState({loginPage:[],signUpScreen:signUpScreen})
    
    console.log("regi443 successfull");
  }
  
  render() {
    return (
       
      <div style =  {center}>
        <MuiThemeProvider>
        <div>
        <p>Login:</p>
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

export default Login;