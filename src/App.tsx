import React from 'react';
import './App.less';
import BasicRoute from "./router";

class App extends React.PureComponent<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // console.log(rootRouters, '[[[');
        return (
            <div className="App">
                <BasicRoute/>
            </div>
        );
    }
}

export default App;
