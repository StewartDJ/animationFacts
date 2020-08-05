import React, {Component} from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import Anticipation from './components/Anticipation'
import Appeal from './components/Appeal';
import Arc from './components/Arc';
import Exaggeration from './components/Exaggeration';
import Follow from './components/Follow';
import Secondary from './components/Secondary';
import Slow from './components/Slow';
import Solid from './components/Solid';
import Squash from './components/Squash';
import Staging from './components/Staging';
import Straight from './components/Straight';
import Timing from './components/Timing';

class App extends Component{
  render() {
    return (
    <BrowserRouter>
    <div className='App'>
    <div id="twelve">
    <h1> <center>The 12 Principles of Animation</center></h1>
     <p> Click the links to learn the 12 Principles of Animation </p>
     <div id="wrapper">
     <Link to='/Anticipation'>Anticipation</Link>
  {'     '}
     <Link to='/Appeal'>Appeal</Link>
    {'     '}
     <Link to='/Arc'>Arcs</Link>
    {'     '}
     <Link to='/Exaggeration'>Exaggeration</Link>
    {'     '}
     <Link to='/Follow'>Follow Through</Link>
    {'     '}
     <Link to='/Secondary'>Secondary Action</Link>
    {'     '}
     <Link to='/Slow'> Slow in, Slow out</Link>
    {'     '}
     <Link to='/Solid'>Solid Drawing</Link>
    {'     '}
     <Link to='/Squash'>Squash and Stretch</Link>
    {'     '}
     <Link to='/Staging'>Staging</Link>
    {'     '}
     <Link to='/Straight'>Straight Ahead Action or Pose to Pose</Link>
    {'     '}
     <Link to='/Timing'>Timing</Link>
    {'     '}
      </div>
</div>
<div id="principles">
    
     <Switch>
       <Route path='/Anticipation' component={Anticipation} />
       <Route path='/Appeal' component={Appeal}/>
       <Route path='/Arc' component={Arc}/>
       <Route path='/Exaggeration' component={Exaggeration}/>
       <Route path='/Follow' component={Follow}/>
       <Route path='/Secondary' component={Secondary}/>
       <Route path='/Slow' component={Slow}/>
       <Route path='/Solid' component={Solid}/>
       <Route path='/Squash' component={Squash}/>
       <Route path='/Staging' component={Staging}/>
       <Route path='/Straight' component={Straight}/>
       <Route path='/Timing' component={Timing}/>
    </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
