import React from "react";
import './payment-details.styles.scss';
import {Col, Row} from "reactstrap";
import img from "../../assets/PaytmLink.jpeg";

export const PaymentDetails = () => {
    return <div className='payment-detail'>
        <h1>Payment Info</h1>
        <br/>
        <br/>
        <br/>
        <div className="typography-line">
            <h4>To pay using Debit/Credit Card,UPI use <br/> <a
                href="https://rzp.io/l/FkX8OPWMl"><h3 className={'col'}>https://rzp.io/l/FkX8OPWMl</h3></a>
            </h4>
        </div>
        <br/>

        <br/>
    </div>
};
