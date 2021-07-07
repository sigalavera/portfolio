import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Protfolio from '../Pages/Frotfolio/Frotfolio';
import Skills from '../Pages/Skills/Skills';
import ContactMe from '../Pages/ContactMe/ContactMe';

function AppRounder(){
    return(
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route path = "/Skills" component={Skills}/>
                <Route path = "/Portfolio" component={Protfolio}/>
                <Route path = "/ContactMe" component={ContactMe} />
            </Switch>
        </div>
    )
}
export default AppRounder;

