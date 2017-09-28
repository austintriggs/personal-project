import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Support from './components/Support/Support';
import Whistle3 from './components/Products/Whistle3';
import LearnMore from './components/Products/LearnMore';


export default (
    <Switch>
        <Route component={Home} path="/" exact />
        <Route component={FAQ} path="/faq" />
        <Route component={Support} path="/support" />
        <Route component={Whistle3} path="/products/whistle3" />
        <Route component={LearnMore} path="/how-whistle-3-works" />
    </Switch>
)