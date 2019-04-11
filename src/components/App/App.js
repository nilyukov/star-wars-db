import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../SwapiServiceContext/SwapiServiceContext";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import StarshipDetails from "../sw-components/StarshipDetails";
import LoginPage from "../pages/LoginPage/LoginPage";
import SecretPage from "../pages/SecretPage/SecretPage";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {isLoggedIn} = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>
                            <Route path='/people/:id?' component={PeoplePage}/>
                            <Route path='/planets' component={PlanetsPage} exact/>
                            <Route path='/starships' component={StarshipsPage} exact/>
                            <Route path='/starships/:id' render={({match}) => {
                                const {id} = match.params;
                                return <StarshipDetails itemId={id}/>
                            }}/>
                            <Route path='/login'
                                   render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
                            <Route path='/secret' render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>

                            <Route render={() => <h2>Page not found</h2>}/>
                        </Switch>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
