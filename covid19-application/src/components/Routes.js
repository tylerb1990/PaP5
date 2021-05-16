// IMPORTS
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// PAGES
import Home from '../pages/Home';
import World from '../pages/World';


// ROUTES
const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/World' component={World} />
            </Switch>
        </div>
    )
}
export default Routes;