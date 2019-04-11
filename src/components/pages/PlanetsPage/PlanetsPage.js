import React, {Component} from 'react';

import './PlanetsPage.css';
import ErrorBoundry from "../../ErrorBoundry/ErrorBoundry";
import Row from "../../Row/Row/Row";
import {PlanetList} from "../../sw-components/ItemLists";
import PlanetDetails from "../../sw-components/PlanetDetails";


export default class PlanetsPage extends Component {

    state = {
        selectedPlanet: 0
    };

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };



    render() {

        const itemList = (
            <PlanetList onItemSelected={this.onPlanetSelected}/>
        );

        const planetDetails = (
            <PlanetDetails
                itemId={this.state.selectedPlanet}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={planetDetails}/>
            </ErrorBoundry>
        );
    }
}