import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Support from './components/Support/Support';
import BuyNow from './components/Button/BuyNow';
import LearnMore from './components/Button/LearnMore';


export default (
    <Switch>
        <Route component={Home} path="/" exact />
        <Route component={FAQ} path="/faq" />
        <Route component={Support} path="/support" />
        <Route component={BuyNow} path="/products/whistle3" />
        <Route component={LearnMore} path="/how-whistle-3-works" />
    </Switch>
)