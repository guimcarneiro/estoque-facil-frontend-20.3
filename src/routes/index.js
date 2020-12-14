import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PublicTemplate } from '../layouts';
import { Home, ProductsList, Login, Signup } from '../pages';

const PublicRoutes = () => {
    return (
        <PublicTemplate>
            <Route exact path="/" render={ () => <Home /> } />
            <Route exact path="/products" render={ () => <ProductsList /> } />
            <Route exact path="/login" render={ () => <Login /> } />
            <Route exact path="/signup" render={ () => <Signup /> } />
        </PublicTemplate>
    );
}

const PrivateRoutes = () => {
    return (
        <>

        </>
    );
}

const AllRoutes = () => {
    return <Switch>
        <PublicRoutes />
        <PrivateRoutes />
    </Switch>
}

export { PublicRoutes, PrivateRoutes, AllRoutes };