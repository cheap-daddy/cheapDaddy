import React from 'react';
import {Col, FormGroup, Input} from 'reactstrap';
import './search-box.styles.scss';
// import 'tachyons';

export const SearchBox = props => (
    <center>
        <Col lg="3" sm="6">
            <FormGroup>
                <Input placeholder="Search Services" className={'bg-search'} type="text"
                       onChange={props.onSearchChange}
                />
            </FormGroup>
        </Col>
        <br/>
    </center>)
;