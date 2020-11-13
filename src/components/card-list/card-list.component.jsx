import React from 'react';

import {CustomCard} from '../card/card.component';

import './card-list.styles.scss';

export const CardList = props => (
    <div className='card-list'>
        <center>
            {props.services.map(service => (
                <CustomCard key={service.ID} service={service}/>
            ))}
        </center>
    </div>
);