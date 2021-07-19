
import React from 'react';
import { Redirect } from 'react-router-dom';
import Welcome from './Home';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      error:''
    }
  }

  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onSubmit = (e) =>{
    let { history } = this.props
    let ele;
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.name.length > 0 && this.state.password.length > 0){
          if (arr.name == this.state.name && (arr.password == this.state.password)) {
            let user = this.state.name;
            alert(user)
            history.push({ pathname: "/profileUser", user: this.state.name });
          }else{
            this.setState({error:'Please check your user or password'})
          }
        }
      }
      )
  }
  
  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  render() {
    
    return (
      <form onSubmit={this.onSubmit}>
        <p className="error">
          {this.state.error}
        </p>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.name} onChange={this.onChangeName} required />
        </div>
        <label>  </label>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} required />
        </div>
        <button type="submit" className="btn btn-success" onClick={this.props.onLogin}>Login</button>
        </div>
      </form>
    )
  }
}

export { Contact};
