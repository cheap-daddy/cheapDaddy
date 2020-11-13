import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './contact-form.styles.scss'

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        quantity: 1,
        phoneNumber: '',
        link: ''
    }

    handleSubmit(e) {
        e.preventDefault()
        const {service} = this.props;
        const {name, quantity, phoneNumber, link} = this.state
        if (phoneNumber.length !== 10 || name === '' || phoneNumber === '' || link === '') {
            alert('Inputs not correct');
        } else {
            let templateParams = {
                from_name: name,
                to_name: 'cheapDaddy',
                message: `${quantity} quantity of service ID:${service.ID}(name: ${service.Name})
                 was purchased by ${name}. His phone number is ${phoneNumber}.
                 Link: ${link}`,
            }
            emailjs.send(
                'service_5mw6rmm',
                'template_nnzzxnr',
                templateParams,
                'user_WgpHw07DDxn3rNFCOpk3c'
            ).then(r => {
                console.log(r);
                alert('Message sent to admin. Please pay using below options')
            }).catch((e) => {
                console.log(e);
            });
            this.resetForm()
        }
    }

    resetForm() {
        this.setState({
            name: '',
            quantity: 1,
            link: '',
            phoneNumber: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    }

    render() {
        return (
            <div className={'layout_contact'}>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formBasicName">
                        <Label className="bright">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="bright">Phone Number</Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'phoneNumber')}
                            placeholder="phone number"
                            required
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="bright">Quantity</Label>
                        <Input
                            type="number"
                            name="quantity"
                            min={1}
                            value={this.state.quantity}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'quantity')}
                            placeholder="Quantity"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicName">
                        <Label className="bright">Link(If it's not req leave it empty)</Label>
                        <Input
                            type="text"
                            name="link"
                            value={this.state.link}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'link')}
                            placeholder="Link"
                        />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContactForm;