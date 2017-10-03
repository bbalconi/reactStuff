import React, { Component } from 'react';
import './Barf.css';
import Days from "../ex1.js";


class BarfTwo extends React.Component {
  
  constructor(props){
    super(props)
  }

    render(){
      let url = "http://1.bp.blogspot.com/_3QhIEB0Udyk/S-Srz_4TcuI/AAAAAAAAAOI/lUF4P88svJU/s1600/frustrated.jpg"
      return (
        <div>
          <h1 id="b-style">IS THIS WORKING?????!!!!</h1>
          <Days img={url}/>
        </div>
      )
    }
  }

  export default BarfTwo;

//Create another react component the same way as you did before
//This time, we're going to use this component WITHIN your other 
//component - that's right, we can nest components. Call the component
// "Barf"

//export it in this file, then import it into your index.js file and put the tag
//inside the div's in your render method and viola! 
