import React,{useState, useEffect} from 'react'
import divider from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from "axios"


export default function Advicecard() {
    
   const [advice,setAdvice] = useState("")
   const [click,setClick]= useState(0)

// const adviceNumber =()=>{
//     setClick(click+1)
//    }
   const getAdvice = async()=>{
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice)
    setClick(click+1)
   }
   
//    const WrapperFunction=()=>{
    
//     getAdvice()

//     adviceNumber()
//    }
  useEffect(()=>{
    getAdvice()
    // WrapperFunction()
        // <em>// eslint-disable-next-line react-hooks/exhaustive-deps</em>
  },[])
  
  return (
    <div className='card'>
      <p>Advice #{click}</p>
      <h2>{advice.advice}</h2>
      <img src={divider} className="divider-desktop" alt="divider" />
       <img src={dividerMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice}  alt="dice" />
      </div>

    </div>
  )
}
