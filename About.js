import React from 'react';
import './App.css';

import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Apr'],
    
    datasets: [
      {
        label: 'Scores',
        backgroundColor: 'lightcoral',
        lineTension: 0.3,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.1,
        data: [35, 25, 40, 60, 50, 55]
      },
      {
        label: 'Attendance',
        backgroundColor: 'lawngreen',
        lineTension: 0.3 ,
        borderWidth: 0.1,
        borderColor:'black ',
        data: [65, 59, 80, 81, 50, 5],
        
      }
  ]
}

export default class About extends React.Component {
  render() {
    return (
      <div style = {{marginLeft : "7cm", backgroundColor:"purpl"}}>

        <Line 
          width ="650px" 
          height = "400px"

          data={state}
          options={{
            responsive:true,
            title:{
              display:true,
              text:'Marks',
              fontSize:30,
              width:"20px"
            },
            legend:{
              display:true,
              position:'right',
              
            }
          }}
        />
      </div>
    );
  }
}
