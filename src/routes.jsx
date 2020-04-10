import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

//import Urls
import Landing from './pages/landing/LandingContainer';
import SearchResults from './pages/searchResults/resultsContainer';

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/search" component={SearchResults}/>
            </Switch>
        </Router>
    )
}

export default routes;
