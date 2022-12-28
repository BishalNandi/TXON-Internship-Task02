import './App.css';
import { useState } from 'react';


const App = () =>{
  const [ result, setResult] = useState("");

  const clickHandler= (event)=>{

    setResult(result.concat(event.target.value))
  }

  const clearDisplay = ()=>{

    setResult("");
  }

  const calculate = () =>{
    setResult(eval(result).toString())
  }


    return(
   <>

   
     <sup className='up'></sup> <div className='header'> <h3>TXON</h3> <span>CALCULATOR</span>
      
      </div>
      

    <div className='calc'>




      <input type= "text" className='display' placeholder='' id='answer' value={result}/>
      <input type= "button" value = "9" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "8" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "7" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "6" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "5" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "4" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "3" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "2" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "1" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "0" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "." className="btn" onClick={clickHandler}/>
      <input type= "button" value = "+" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "-" className="btn" onClick={clickHandler}/>
      <input type= "button" value = "*" className= "btn" onClick={clickHandler}/>
      <input type= "button" value = "/" className= "btn" onClick={clickHandler}/>
      <input type= "button" value = "%" className= "btn" onClick={clickHandler}/>
      <input type= "button" value = "clear" className= "btn1" onClick={clearDisplay}/>
      <input type= "button" value = "=" className= "btn1" onClick={calculate}/>
      <marquee> 😎 MADE WITH 🧡 BY BISHAL NANDI 😎 </marquee>
      </div>

     
</>    
  );
    }
     


export default App;
