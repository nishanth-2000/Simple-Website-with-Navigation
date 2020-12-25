import { Component } from 'react';
import React from 'react';
import './App.css';
import About from './About';
import Standards from './Standards';
import Nav from './Nav';
import Contact from './Contact';
import {GiArrowWings} from 'react-icons/gi';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <div className = 'Nav-l'>
        <GiArrowWings size = "100px" />
        <Link to=''>
        <h1 > WEBPAGE</h1>
         </Link>

         <Link to='/ad'>
        <h1 > Advertisement</h1>
         </Link>

        </div>
        <div className = "App">
          <Nav/>
          <Switch >
          <Route path = "/" component = {add} exact/> 
          <Route path = "/ad" component = {Advertisement} exact/>
          <Route path = "/home" component = {home} exact/>
          <Route path ="/about" component = {About} exact/>
          <Route path ="/contact" component = {Contact} exact/>
          <Route path ="/standards" component = {Standards} exact/>
          </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
 }
}

const home = () => (
  <h1 style = {{marginLeft : "350px",marginTop:"20px"}}>Welcome</h1>
)
const add = () => (
  <h1 style = {{marginLeft : "350px"}}>Its empty</h1>
)
const Advertisement = () => (
  <h1 className = 'App'></h1>
)


export default App;

