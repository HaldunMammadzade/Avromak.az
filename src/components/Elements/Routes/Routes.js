import React from 'react';
import { Switch, Route , Link} from "react-router";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Butterfly from "../../Pages/Butterfly/Butterfly"
import Contact from "../../Pages/Contact/Contact"
import Export from "../../Pages/Export/Export"
import Favelli from "../../Pages/Favelli/Favelli"
import Flour from "../../Pages/Flour/Flour"
import Makara from "../../Pages/Makara/Makara"
import Meat from "../../Pages/Meat/Meat"
import Production from "../../Pages/Production/Production"
import Retail from "../../Pages/Retail/Retail"
import Rizzi from "../../Pages/Rizzi/Rizzi"

function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about-us" component={About} exact />
                <Route path="/butterfly" component={Butterfly} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/export" component={Export} exact />
                <Route path="/favelli" component={Favelli} exact />
                <Route path="/flour" component={Flour} exact />
                <Route path="/makara" component={Makara} exact />
                <Route path="/meat" component={Meat} exact />
                <Route path="/production" component={Production} exact />
                <Route path="/retail" component={Retail} exact />
                <Route path="/rizzi" component={Rizzi} exact />
            </Switch>
        </div>
    );
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
