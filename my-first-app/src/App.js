
import { Component } from 'react';
import Login from './LoginModule/Login';
import logo from './logo.svg';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      loginPage:[],
      signUpScreen:[],
      dashboardScreen:[],
      HomePage:[] 
    }
  }


  render(){
    return(
      <div>

        {this.state.loginPage}
        {this.state.signUpScreen}
        {this.state.dashboardScreen}
        {this.state.HomePage}
      </div>
    );
  }

  componentDidMount(){
    var loginPage =[];
      loginPage.push(<Login appContext = {this}/>);
      this.setState({loginPage:loginPage})

  }

}

export default App;
