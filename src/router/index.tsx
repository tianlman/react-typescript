import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {rootRouters} from "./router";


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
                {
                    rootRouters.map((route, index) => {
                        console.log(route.path, route.component)
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/>
                        )
                    })
                }
        </Switch>
    </BrowserRouter>
);
export default BasicRoute;