import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
//import WithRestoService from '../hoc';
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    //console.log(RestoService.getMenuItems());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader totalPrice={50}/>
            {/*<MainPage/>
            <CartPage/>*/}
            <Switch>
                <Route
                    path="/"
                    exact
                    component={MainPage}
                />
                <Route
                    path="/cart"
                    exact
                    component={CartPage}
                />
                <Route 
                    path = '/:id'  
                    component={ItemPage}
                />
            </Switch>
        </div>
    )
}

export default App;