import React from 'react';
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapi-service";

const swapiservice = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiservice;

const PersonDetails = ({itemId}) =>{
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>
    );
};
const PlanetDetails = () =>{};
const StarshipDetails = () =>{};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};