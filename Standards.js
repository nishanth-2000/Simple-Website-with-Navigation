import  React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

export default class Table extends Component{
render(){
   
   const data = [{
     name: 'nithin ',
     age: 20,
     friend: {
       name: 'nikhil ',
       age: 23,
     }
   },
   {
      name: 'nishanth',
      age: 16,
      friend: {
        name: 'nivetha',
        age: 13,
      }
    },
    {
      name: 'nivedita',
      age: 27,
      friend: {
        name: 'nasser',
        age: 22,
      }
    },
    {
      name: 'Chandan',
      age: 26,
      friend: {
        name: ' Maurer',
        age: 33,
      }
    },
    {
      name: 'Charu',
      age: 29,
      friend: {
        name: ' sher',
        age: 23,
      }
    },
    {
      name: 'ravi',
      age: 26,
      friend: {
        name: ' ram',
        age: 33,
      }
    },
    {
      name: 'soma',
      age: 36,
      friend: {
        name: ' rama',
        age: 23,
      }
    },
    {
      name: 'seetha',
      age: 26,
      friend: {
        name: ' matha',
        age:3,
      }
    }
]
  
   const columns = [{
     Header: 'Name',
     accessor: 'name' // String-based value accessors!
   },
    {
     Header: 'Age',
     accessor: 'age',
     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
   },
    {
     id: 'friendName', // Required because our accessor is not a string
     Header: 'Friend Name',
     accessor: d => d.friend.name // Custom value accessors!
   },
    {
     Header: props => <span>Friend Age</span>, // Custom header components!
     accessor: 'friend.age'
   }]
  
   return( 
      <div className = 'students' style = {{width : "25cm"}}>
      <ReactTable style = {{marginLeft:"4cm",marginTop:"60px"}}
     data={data}
     columns={columns}
     defaultPageSize={5}
     
   />
   </div>
   );
 }
}







































// import React, { Component } from 'react';
// import './App.css';
// import ReactTable from 'react-table-6'

// class Table extends Component {
//    constructor(props) {
//       super(props) 
//       this.state = { 
//          students: [
//             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//          ]
//       }
//    }
//    renderTableData() {
//     return this.state.students.map((student, index) => {
//        const { id, name, age, email } = student //destructuring
//        return (
//           <tr key={id}>
//              <td>{id}</td>
//              <td>{name}</td>
//              <td>{age}</td>
//              <td>{email}</td>
//           </tr>
//        )
//     })
//  }

//  renderTableHeader() {
//     let header = Object.keys(this.state.students[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }

//  render() {
//     return (
//        <div className = 'nav-l'>
//           <h1 id='title'>React Static Table</h1>
//           <table id='students'>
//              <tbody>
//              <tr>{this.renderTableHeader()}</tr>
//                   {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }
// //    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
// //       return (
// //          <div>
// //             <h1>React Dynamic Table</h1>
// //          </div>
// //       )
// //    }
// }

// export default Table;