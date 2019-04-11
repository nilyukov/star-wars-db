import React from 'react';
import './StarshipsPage.css';
import ErrorBoundry from "../../ErrorBoundry/ErrorBoundry";
import {StarshipList} from "../../sw-components/ItemLists";
import {withRouter} from 'react-router-dom';

const StarshipsPage = ({history}) => {

    return (
        <ErrorBoundry>
            <StarshipList onItemSelected={(itemId) => {
                history.push(itemId);
            }}/>
        </ErrorBoundry>
    );

};

export default withRouter(StarshipsPage);