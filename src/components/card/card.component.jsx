import React, {useState} from 'react';
import {useHistory} from 'react-router';
import  {Button,Modal} from 'reactstrap';
import './card.styles.scss';


export const CustomCard = props => {
    const history = useHistory();
    const [modal, setModal] = useState(false);

    return <div className='card-container' onClick={() => {
    }}>
        <h2> {props.service.Name} </h2>
        <p> {props.service.Price} </p>
        <Button color="primary" className = "btn-round" onClick={() => {
            setModal(true)
        }}>
            show modal
        </Button>
        <Modal
            isOpen={modal}
            toggle={() => setModal(!modal)}
        >
            <div className="modal-header justify-content-center">
                <button
                    className="close"
                    onClick={() => setModal(false)}
                >
                    <i className="tim-icons icon-simple-remove"/>
                </button>
                <h4 className="title title-up">{props.service.Name}</h4>
            </div>
            <div className="modal-body">
                <p>
                    {props.service.Description}
                </p>
            </div>
            <div className="modal-footer">
                <Button color="default" type="button" onClick={() => {
                    setModal(!modal);
                    history.push({
                        pathname: `/payment/${props.service.ID}`,
                        state: {service: props.service}
                    });
                }}
                >
                    Finalise
                </Button>
                <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal(!modal)}
                >
                    Close
                </Button>
            </div>
        </Modal>
    </div>
};