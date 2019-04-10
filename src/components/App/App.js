import React, {Component} from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';


import './App.css';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../SwapiServiceContext/SwapiServiceContext";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
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

        return (
            <ErrorBoundry>

                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <RandomPlanet/>
                    <PeoplePage/>
                </SwapiServiceProvider>

            </ErrorBoundry>
        );
    }
}
