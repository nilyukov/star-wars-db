import React, {Component} from 'react';

import './PeoplePage.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row/Row";
import {PersonList} from "../sw-components/ItemLists";
import {PersonDetails} from "../sw-components/Details";


export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 0
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {

        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected}/>

        );

        const personDetails = (
            <PersonDetails
                itemId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}