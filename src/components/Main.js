import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';

import { signUp } from './SignUp';
import { Contact } from './Login';
import { Home } from './Home';
import { profileUser } from './profileUser';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/signUp' component={signUp}></Route>
            <Route exact path='/Login' component={Contact}></Route>
            <Route exact path='/profileUser' component={profileUser}></Route>
        </Switch>
    );
}

export { Main };
