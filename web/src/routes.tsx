import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

import Landing from './views/Landing';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} />
        </BrowserRouter>
    );
}

export default Routes;
