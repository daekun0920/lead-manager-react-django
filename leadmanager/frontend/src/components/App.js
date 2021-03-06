import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Positions from 'react-alert-template-basic';

import Header from './layout/Header';
import DashBoard from './leads/DashBoard';
import Alert from './layout/Alert';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';


import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';


const alertOptions = {
    timeout: 3000,
    position: Positions.TOP_CENTER
}



class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} 
                {...alertOptions}>
                    <Router>
                    <Fragment>
                        <Header />
                        <Alert />
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/" component={DashBoard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </div>
                    </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));