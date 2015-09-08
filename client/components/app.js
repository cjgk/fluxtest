import React from 'react';
import {RouteHandler} from 'react-router';

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <h1>Todo</h1>
                <RouteHandler />
            </div>
        );
    }
}

export default App;
