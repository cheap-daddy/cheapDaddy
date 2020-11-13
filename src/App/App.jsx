import React, {Component} from 'react';

import "../assets/scss/blk-design-system-react.scss?v=1.1.0";
import './App.scss';
import {data} from "../data";
import {Switch, Route} from "react-router-dom";
import NotFound from "../views/not-found/not-found.view";
import {Services} from "../views/services/services.view";
import {Home} from "../views/home/home.view";
import {PaymentPage} from "../views/payment-page/payment-page.view";
import CustomNavbar from "../components/Navbar/navbar.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: data,
            searchField: ''
        };
    }

    onSearchChange = event => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const {services, searchField} = this.state;
        console.log(services[0].Name);
        const filteredServices = services.filter(service =>
            service.Name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className='App'>
                <CustomNavbar/>
                <div className={'margin-app'}>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/services'} render={() => {
                            return <Services services={filteredServices} onSearchChange={this.onSearchChange}/>;
                        }}/>
                        <Route path={'/payment/:ID'} component={PaymentPage}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;