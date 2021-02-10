import React from 'react';
import cowboy from '../assets/images/cb-bebop-banner.png'
import './styles/App.scss'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Layout from './Layout';
// import Home from '../pages/Home';
// import Badges from '../pages/Badges';
// import BadgeNew from '../pages/BadgeNew';
// import NotFound from '../pages/NotFound';

function App() {
  return (
    <React.Fragment>

      <h1 className="regards">Hellooooooooo</h1>
      <img className="banner" src={cowboy} />
    </React.Fragment>
    // <BrowserRouter>

    //    <Layout>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/badges" component={Badges} />
    //       <Route exact path="/badges/new" component={BadgeNew} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </Layout>
    // </BrowserRouter> 
  );
}

export default App;
