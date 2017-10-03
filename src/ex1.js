//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.
//2)using the object:

//go through each menuitem and display the "value" in your react html

//using the reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html

import React, { Component } from 'react';

export default class Days extends React.Component{
  constructor(){
    super();

    var daysLeft = (today)=>{
      var today = new Date();
      const lastDay = new Date("12/8/2017");
      var daysTil = Math.abs(lastDay.getTime() - today.getTime());
      var daysFinal = Math.floor(daysTil/ (24 * 60 * 60 * 1000));
      return daysFinal;
    }
    this.days = daysLeft()
    var array = [1, 2, 9];
    this.newArr = array.reduce(function(a,b){ 
      return a * b;
    })
    this.menuObj = {"menu": {
      "id": "file",
      "value": "File",
      "popup": {
        "menuitem": [
          {"value": "New", "onclick": "CreateNewDoc()"},
          {"value": "Open", "onclick": "OpenDoc()"},
          {"value": "Close", "onclick": "CloseDoc()"}
        ]
      }

    }}
    this.menuitem = this.menuObj.menu.popup.menuitem
  }

    render() {
      console.log(this.props.img)
      var element = []
      for (var i = 0; i < this.menuitem.length; i++){
        var htmlEl = <div> { this.menuitem[i].value } </div>
        element.push(htmlEl)
      }
      return (
        <div>
          <img src={this.props.img} />
          {this.days}
          {element}
          {this.newArr}
        </div>
      )

    }
  }


