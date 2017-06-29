import React from 'react';
import { Router, Redirect, IndexRoute } from 'react-router';

import App from '../ui/container/App';

export default () => (
    <Route path="/" name="app" component={App}>
        <IndexRoute component={TestComponent} />
    </Route>
)