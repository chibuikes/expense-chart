import React,{useState} from 'react'
import classes from './MainPage.module.css'
import Logo from './logo.svg'
const MainPage=()=>{
    const [width , setWidth]= useState(window.innerWidth)
    let m= (width-400)/2
      setInterval(()=>{setWidth(window.innerWidth)},100)
    return <React.Fragment>
<header className={classes.header} style={{left:`${m}px`}}>
    <div>
        <p className={classes.p1} > My balance</p>
        <h1 className={classes.h1}>
            $921.48
        </h1>
    </div>
    <div> <img src={Logo} alt='logo' className={classes.img} /></div>
</header>
    </React.Fragment>
}
export default MainPage
