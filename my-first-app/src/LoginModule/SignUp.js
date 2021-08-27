import React, { Component } from 'react';
import { TextField,Button } from '@material-ui/core';
import { MuiThemeProvider} from '@material-ui/core/styles';

import Login from './Login';
import ButtonAppBar from '../Dashboard/Home';


class SignUp extends Component {
  constructor(props){

    super(props);
    var localSignUpComponent=[];

    localSignUpComponent.push(
        <MuiThemeProvider key={"theme"}>
        <div>
        <TextField
           label="Enter your first name"
           floatingLabelText="Enter your first name"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
         <TextField
           label="Enter your last name"
           floatingLabelText="Enter your last name"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>

         <TextField
           label="Enter your email ID"
           floatingLabelText="Enter your email ID"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             label="Enter password"
             floatingLabelText="Enter password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type="password"
             label="Enter confirm password"
             floatingLabelText="Enter confirm password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <Button variant="contained" primary={true} color="primary" style={style} onClick={(event) => this.cancleClick(event)}>Cancle</Button>
           <Button variant="contained" color="primary" style={style} onClick={(event) => this.signUpClick(event)}>Sign Up</Button>
       </div>
      </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      signUpComponent:localSignUpComponent
    }
  }

  cancleClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("Cancle!");
    var loginPage=[];
    loginPage.push(<Login appContext={self.props.appContext} />)
    self.props.appContext.setState({signUpScreen:[] ,loginPage:loginPage})

  }

  signUpClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }

    console.log("Sign Up successfull");
    alert('Sign Up successfull');
    
    var HomePage=[];
    HomePage.push(<ButtonAppBar appContext={self.props.appContext}/>);
    self.props.appContext.setState({signUpScreen:[],HomePage:HomePage});
  }
  
  render() {
    return (
       
      <div style =  {center}>
        <MuiThemeProvider>
        <div>
        <p>SignUp:</p>
        </div>
        </MuiThemeProvider>
        {this.state.signUpComponent}
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

export default SignUp;