import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PublicTemplate } from '../layouts';
import { Home, ProductsList } from '../pages';

const PublicRoutes = () => {
    return (
        <PublicTemplate>
            <Route exact path="/" render={ () => <Home /> } />
            <Route exact path="/products" render={ () => <ProductsList /> } />
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