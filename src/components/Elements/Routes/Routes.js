import React from 'react';
import { Switch, Route , Link} from "react-router";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";


function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
               
            </Switch>
        </div>
    );
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
