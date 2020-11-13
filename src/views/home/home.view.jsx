import React from "react";
import {useHistory} from 'react-router';
import './home.styles.scss';
import Button from "reactstrap/es/Button";

export const Home = props => {
    const history = useHistory();
    return <div className='home'>
        <br/>
        <h1>When daddy gave no money <br/><br/>...you go cheap daddy</h1>
        <Button onClick={()=>{
            history.push('/services');
        }}>
            Check All Services
        </Button>
    </div>
};
