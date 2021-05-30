import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Positions from 'react-alert-template-basic';

import Header from './layout/Header';
import DashBoard from './leads/DashBoard';
import Alert from './layout/Alert';

import { Provider } from 'react-redux';
import store from '../store';

const alertOptions = {
    timeout: 3000,
    position: Positions.TOP_CENTER
}



class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} 
                {...alertOptions}>
                    <Header />
                    <Alert />
                    <div className="container">
                        <DashBoard />    
                    </div>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));