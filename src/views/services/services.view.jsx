import React from 'react';
import {SearchBox} from "../../components/search-box/search-box.component";
import {CardList} from "../../components/card-list/card-list.component";
import './services.styles.scss';
export const Services = ({services, onSearchChange}) => {
    return (
        <div className={'service'}>
            <h1>Services</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <CardList services={services}/>
        </div>
    );
};