import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Board from './Board'
import './assets/lfg.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div >
      <Route path="/" exact strict render={
        ()=>{
        return (
          <div>
          <h1>Welcome Home</h1>
          <Board />
          </div>
        );
      }
      }/>

      <Route path="/signup" exact strict render={
        ()=>{
        return (
          <div>
            <h1>Sign Up Biiitch</h1>
              <div className='signup'>
                <legend>New to LFG? Sign up!</legend>
                <form accept-charset="UTF-8" action="" method="post">
                    <input class="signupbox" name="name" placeholder="Full Name" type="text"/>
                      <br/>
                    <input class="signupbox" name="username" placeholder="Username" type="text"/>
                      <br/>
                    <input class="signupbox" name="password" placeholder="Password" type="password"/>
                      <br/>
                    <button class="btn btn-warning" type="submit">Sign up for LFG</button>
                </form>
              </div>
          </div>
        );
      }
      }/>

      <Route path="/profile" exact strict render={
        ()=>{
        return ( <h1>Your Profile</h1>);
      }
      }/>

      </div>
      </Router>
    );
  }
}

export default App;
