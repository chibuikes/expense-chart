import React, {useState} from 'react'
import classes from './Wrapper.module.css'

const Wrapper=(props)=>{
  const [width , setWidth]= useState(window.innerWidth)
  let m= (width-400)/2
    setInterval(()=>{setWidth(window.innerWidth)},100)
  console.log(width)
    return <React.Fragment>
    <div className={classes.div} style={{left:`${m}px`}}>
  {props.children}
    </div>
    </React.Fragment>
}
export default Wrapper