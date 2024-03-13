
import Mynav1 from './Mynav' 
import Home from './Home' 
import BlogList from './BlogList' 
import Circle from './Circle' 
import Circles from './Circles' 
import Circles2 from './Circles2' 
import MyImg1 from './Img1' 
import { useState } from "react";

function App() {
  

  const w_name = "Our Team";
  var x = 10;
  var y = 20;

  const handleClick = (e) => {
    //console.log(new Date());
    console.log(e);
    console.log(e.target.id);
  }

  const handleClickAgain = (fname) => {
    console.log(fname);
  }

  return (
    <div className="App">
      <Mynav1 />

       <BlogList title = "my good Blogs"   /> 
       {/* <BlogList blogs={ blogs.filter( (blog) => blog.author == "mario" ) } /> */}
      
      <h2 className='h2class' style={
        {color : "red" , fontSize : "30px"}
      }>Welcome { w_name }</h2>
      <h2>the result of {x} + {y} is { x + y } </h2>
      <button id="btn1" className='b1 temp' onClick={handleClick} >Click Me</button>
      <button className='b2' onClick={ () => {
        handleClickAgain("Mazen")
      }

      } >Click Again</button>
      <MyImg1 />

      {/* <Circle title = { w_name }  bgColor = "hotpink" fgColor = "rgb(30, 20, 1)" /> */}

      <Circles2 count = "5" />

    </div>
  );
}

export default App;
