import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </Router>
    );
};

export default App;
