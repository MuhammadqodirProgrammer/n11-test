import React, { Component } from "react";
import "./test.css"

 export  class ClassCounter extends Component {
    state = {
        count:0,
        count2:0,
    }

     render(){
      return  (
       <>
        
<h1> Count {this.state.count}   {this.state.count2}</h1>

<button onClick={()=>{
    this.setState({
        count:this.state.count + 1
    })
}}>oshir  </button>



<button onClick={()=>{
    this.setState({
        count:this.state.count - 1
    })
}}>kamaydir  </button>




       </>
      )
    }
}
