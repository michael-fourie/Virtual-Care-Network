import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Mental from './pages/Mental/Mental';
import Phsyical from './pages/Physical/Physical';
import Wellbeing from './pages/Wellbeing/Wellbeing';
import ScrollToTop from './components/ScrollToTop';
import HealthResilience from './components/HealthSub/Wellbeing/HealthResilience.js';
import PainInjury from './components/HealthSub/Health/PainInjury';
import SelfCare from './components/HealthSub/Wellbeing/SelfCare';


function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/health' component={Mental} />
            <Route path='/professional-practice' component={Phsyical} />
            <Route path='/wellbeing' component={Wellbeing} />
            <Route path='/health-resilience' component={HealthResilience} />
            <Route path='/pain-injury' component={PainInjury} />
            <Route path='/self-care' component={SelfCare} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
