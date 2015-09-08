import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from 'components/app';
import Home from 'components/home';

const routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home}/>
    </Route>
);

export default routes;

