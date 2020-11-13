import React from "react";
import './payment-page.styles.scss';
import {PaymentDetails} from "../../components/payment-details/payment-details.component";
import ContactForm from "../../components/contact-form/contact-form.component";
import {useLocation} from "react-router";
import './payment-page.styles.scss';

export const PaymentPage = props => {
    const location = useLocation();
    console.log(location);
    // console.log(props.match.params.ID);
    return <div className='payment-page'>
        <h1>Payment Page</h1>
        <h3>{location.state.service.Name}</h3>
        <h4>{location.state.service.Description}</h4>
        <p>{location.state.service.Price}</p>
        <ContactForm service={location.state.service}/>
        <PaymentDetails/>
    </div>
};
