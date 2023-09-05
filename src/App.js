import classes from './App.module.css'
import MainPage from './Components/MainPage/MainPage';
import Wrapper from './UI/Wrapper/Wrapper';
import Bar from './Components/Bar/Bar';

function App() {
  return (
    <div>
<MainPage/>
<Wrapper>
<h3 className={classes.h3}> Spending-Last 7 days</h3>
<br></br>
<Bar/>

<div className={classes.div}>
  <div >
    <p className={classes.p1}>Total this month</p>
    <h1 className={classes.h1}>$478.33</h1>
  </div>
  <div>
    <p className={classes.p2}>+2.4%</p>
    <p className={classes.p1}>from last month</p>
  </div>
</div>

</Wrapper>
</div>
  );
}

export default App;
