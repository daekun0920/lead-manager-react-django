import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import DashBoard from './leads/DashBoard';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <DashBoard />    
                </div>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));