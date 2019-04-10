import React from 'react';
import {SwapiServiceConsumer} from "../SwapiServiceContext/SwapiServiceContext";

const withSwapiService = (Wrapped, mapMethodToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodToProps(swapiService);
                        return <Wrapped {...props} {...serviceProps} />;
                    }
                }
            </SwapiServiceConsumer>
        );
    }
}

export default withSwapiService;