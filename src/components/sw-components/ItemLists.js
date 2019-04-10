import React from 'react';
import ItemList from '../ItemList/ItemList';
import withData from '../hoc-helper/withData'
import withSwapiService from '../hoc-helper/withSwapiService';


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = (item) => `${item.name} (${item.gender}, ${item.birthYear})`;
const renderModelAndName = (item) => `${item.name} (${item.model})`;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};