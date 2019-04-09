import React, {Component} from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';


import './App.css';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";
import SwapiService from "../../services/swapi-service";

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
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>

            </div>
        );
    }
}
