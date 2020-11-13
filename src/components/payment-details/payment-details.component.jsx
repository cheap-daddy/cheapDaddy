import React from "react";
import './payment-details.styles.scss';
import {Col, Row} from "reactstrap";
import img from "../../assets/PaytmLink.jpeg";

export const PaymentDetails = () => {
    return <div className='payment-detail'>
        <h1>Payment Info</h1>
        <br/>
        <br/>
        <h4>For Paytm Wallet</h4>
        <img
            alt="PayTm Qr Code"
            className="img-fluid rounded shadow-lg"
            src={img}
            style={{width: "250px"}}
        />

        <br/>
        <br/>
        <br/>
        <div className="typography-line">
            <h4>For Debit/Credit Card use <br/> <a
                href="https://rzp.io/l/FkX8OPWMl"><h3 className={'col'}>https://rzp.io/l/FkX8OPWMl</h3></a>
            </h4>
        </div>
        <br/>

        <br/>
    </div>
};
