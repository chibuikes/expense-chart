import React from "react";
import classes from "./Bar.module.css";
import ChartBar from "./ChartBar";

const Bar = () => {
  const DUMMY__DATA = [
    {day: "sun",amount: Math.random()*100 },
    {day: "mon", amount: Math.random()*100 },
    {day: "tue",amount: Math.random()*100},
    {day: "wed", amount: Math.random()*100},
    {day: "thu", amount: Math.random()*100 },
    {day: "fri",amount:Math.random()*100},
    {day: "sat",amount: Math.random()*100 },
  ];
  /**
  let Max=0

  for(let amt of DUMMY__DATA){
    if(amt.amount>Max){
      Max=amt.amount
    }
  }  */
  let d= new Date();
  console.log(d.getDay())
  return <React.Fragment>
    <section className={classes.sec}>
    {DUMMY__DATA.map((data, index)=>{
      if(index===d.getDay()){
 return  <ChartBar  day={data.day} amount={data.amount} key={data.day} hover={'main'} color={`hsl(186, 34%, 60%)`}/>

      }
 return  <ChartBar  day={data.day} amount={data.amount} key={data.day}   hover={'nain'}color={`hsl(10, 79%, 65%)`}/>
    })}
    </section>
  </React.Fragment>;
};
export default Bar;
