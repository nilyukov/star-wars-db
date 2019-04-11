import ItemList from '../ItemList/ItemList';
import withData from '../hoc-helper/withData'
import withSwapiService from '../hoc-helper/withSwapiService';
import withChildFunction from '../hoc-helper/withChildFunction';
import compose from '../hoc-helper/compose';

const renderName = (item) => `${item.name} (${item.gender}, ${item.birthYear})`;
const renderModelAndName = (item) => `${item.name} (${item.model})`;
const renderNameAndPopulation = (item) => `${item.name}`;


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

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName))(ItemList);

const PlanetList = compose(
        withSwapiService(mapPlanetMethodsToProps),
        withData,
        withChildFunction(renderNameAndPopulation))(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderModelAndName))(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};