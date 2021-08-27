import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
const MainRoute = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Landing} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )    
}

export default MainRoute;