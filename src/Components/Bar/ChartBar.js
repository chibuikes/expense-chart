import React, {useState} from "react";
import classes from './ChartBar.module.css'
const ChartBar=(props)=>{
    const fill= props.amount//Math.random()*100
    const fil=fill+5
    const [show, setShow]= useState('none');
    const moveHandler=()=>{
        if(show==='none'){
            setShow('block')
        }
        else if(show==='block'){
            setShow('none')

        }
    }
    return <React.Fragment>
        <div>
            <main className={classes.bar}>
                <div className={classes.none}  style={{  display:`${show}`, 'position':'absolute' , bottom:`${fil}px`}} >${props.amount.toFixed(2)}</div>
                <div onMouseEnter={moveHandler}  onMouseLeave={moveHandler} className={`${classes[props.hover]}`} style={{backgroundColor:`${props.color}`,'width':'100%' ,'height':`${fill}px`, 'position':'absolute','bottom':'0px'}}>

            </div>
            </main>

            <p className={classes.p1}>{props.day}</p>
        </div>
    </React.Fragment>
}
export default ChartBar