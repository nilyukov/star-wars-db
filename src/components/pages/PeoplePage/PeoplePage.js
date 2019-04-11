import React from 'react';

import './PeoplePage.css';
import ErrorBoundry from "../../ErrorBoundry/ErrorBoundry";
import Row from "../../Row/Row/Row";
import {PersonList} from "../../sw-components/ItemLists";
import PersonDetails from "../../sw-components/PersonDetails";
import {withRouter} from "react-router-dom";


const PeoplePage = ({match, history}) => {

    const {id} = match.params;

    const personList = (
        <PersonList onItemSelected={(itemId) => history.push(itemId)} />
    );

    const personDetails = (
        <PersonDetails itemId={id}/>
    );

    return (
        <ErrorBoundry>
            <Row left={personList} right={personDetails}/>
        </ErrorBoundry>
    );
};

export default withRouter(PeoplePage);