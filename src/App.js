import React, { Component } from 'react';
import { ProductsContextProvider } from './Global/ProductsContext';
import { Home } from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';
import { auth } from './Config/Config';
import { CartContextProvider } from './Global/CartContext';
import { Cart } from './Components/Cart';
import { AddProducts } from './Components/AddProducts';
import { Cashout } from './Components/Cashout';
import { Dashboard } from './Components/Dashboard';

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user.email
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            {/* home */}
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* dashboard */}
                            <Route path="/dashboard" component={() => <Dashboard user={this.state.user} />} />
                            {/* cart products */}
                            <Route path="/parties" component={() => <Cart user={this.state.user} />} />
                            {/* add products */}
                            <Route path="/items" component={AddProducts} />
                            {/* cashout */}
                            <Route path='/sale/sale order' component={() => <Cashout user={this.state.user} />} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App
