import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function Nav(){
  
    return( 
      <div style = {{alignSelf : "baseline"}} >

          <Link to ="/Home">
            <h2 className = 'nav-link'>Home</h2>
          </Link>

          <Link to ='/about'>
          <h2 className = 'nav-link'>Graph</h2>
          </Link>

          <Link to ='/standards'>
          <h2 className = 'nav-link'>Table</h2>
          </Link>

          <Link to ='/contact'>
          <h2 className = 'nav-link'>Contact</h2>
          </Link>

      </div>
    );    
}