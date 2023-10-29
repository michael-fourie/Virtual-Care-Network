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
import Relaxation from './components/HealthSub/Health/Relaxation';
import SelfCareFasting from './components/HealthSub/Wellbeing/SelfCareFasting';
import SelfCareRecipe from './components/HealthSub/Wellbeing/SelfCareRecipe';
import SelfCareHydration from './components/HealthSub/Wellbeing/SelfCareHydration';
import SelfCareGut from './components/HealthSub/Wellbeing/SelfCareGut.js';
import SelfCareSleep from './components/HealthSub/Wellbeing/SelfCareSleep.js';
import Communication from './components/HealthSub/Practice/Communication.js';
import Moral from './components/HealthSub/Practice/Moral.js';
import Death from './components/HealthSub/Practice/Death.js';





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
            <Route path='/relaxation' component={Relaxation} />
            <Route path='/self-care-fasting' component={SelfCareFasting} />
            <Route path='/self-care-recipe' component={SelfCareRecipe} />
            <Route path='/self-care-hydration' component={SelfCareHydration} />
            <Route path='/self-care-gut' component={SelfCareGut} />
            <Route path='/self-care-sleep' component={SelfCareSleep} />
            <Route path='/communication' component={Communication} />
            <Route path='/morals' component={Moral} />
            <Route path='/manage-distress' component={Death} />

          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
