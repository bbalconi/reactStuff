import React, { Component } from 'react';

// // //Let's do some review of yesterday. 

// // //this exercise will be like the table you built.
// // //[{
// // 	person: "Tom Cruise"
// // 	likesTacos: "no"
// // 	},
// // {

// // Construct an unordered list of react elements. 
// // Make a parent component and a child component. 
// // The parent component will make render an unordered list
// // of child components. 

// // Use this array 

// [
//   {
//     person:"Tom Cruise",
//     likesTacos:"no"
//   }, 
//   {
//     person:"Andrew Jackson",
//     likesTacos:"never knew what tacos were"
//   },
//   {
//     person:"Rand Paul",
//     likesTacos:"yes"
//   }
// ]

// to pass each element in the array to the child components and have them
// render {person}: {likesTacos}

// so the html page will show


// Tom Cruise: no
// Andrew Jackson: never knew what tacos were
// Rand Paul: yes

class Parent extends Component {
  
    constructor(){
      super();
      this.tacoObj = {tacoPerson:
      [{person:"Tom Cruise", likesTacos:"no"}, 
      {person:"Andrew Jackson", likesTacos:"never knew what tacos were"},
      {person:"Rand Paul", likesTacos:"yes"}]
      }
      this.target = this.tacoObj.tacoPerson;
    }
    
    render() {
      let tacoArray = [];
      console.log(this.target[1])
      this.target.forEach((elem,i)=>{
        var htmlEl = <li> { this.target[i].person }: { this.target[i].likesTacos } </li>
        tacoArray.push(htmlEl);
      })
  
      return (
        <div>
          <ul>
        {tacoArray}
          </ul>
       </div>
      )
    }
  }
class Child extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div>
        <Parent />
      </div>
    )
  }
}
export { Parent, Child };