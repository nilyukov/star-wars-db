import React, {Component} from 'react';

import './PeoplePage.css';
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row/Row";
import {PersonList} from "../sw-components/ItemLists";
import PersonDetails from "../sw-components/PersonDetails";


export default class PeoplePage extends Component {


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