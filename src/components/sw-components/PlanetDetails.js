import React from 'react';
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from '../hoc-helper/withSwapiService';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};


export default withSwapiService(PlanetDetails, mapMethodsToProps);
