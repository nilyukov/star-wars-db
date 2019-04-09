import React, {Component} from 'react';

import './PeoplePage.css';
import ItemList from "../ItemList/ItemList";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row/Row";






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

    render(){

        const itemList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                onItemSelected={this.onPersonSelected}
            >
                {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye color" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}