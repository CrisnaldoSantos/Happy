import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";

import Landing from './views/Landing';
import OrphanagesMap from './views/OrphanagesMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/orphanages-map" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
