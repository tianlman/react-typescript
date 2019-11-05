import React from 'react';
import './App.less';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {rootRouters} from "./router/router";

class App extends React.PureComponent<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log(rootRouters, '[[[');
        return (
            <div className="App">
                <Router>
                    <main>
                        <Switch>
                            {
                                rootRouters.map((route, index) => {
                                    console.log(route.path,route.component)
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
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;

// import React from 'react';
// import { hot } from 'react-hot-loader'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     withRouter,
// } from 'react-router-dom'
// import routers from "./router/router";
//
// // import routers from '@/router/router'
//
// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Router>
//                     <main>
//                         <Switch>
//                             {
//                                 routers.map((route,index) => {
//                                     return(
//                                         <Route
//                                             key={index}
//                                             path={route.path}
//                                             exact={route.exact}
//                                             component={route.component}/>
//                                     )
//                                 })
//                             }
//                         </Switch>
//                     </main>
//                 </Router>
//             </div>
//         );
//     }
// }
//
// export default hot(module)(App)
