import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";

const Error = ({text, show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <p>{text}</p>
            </Modal.Body>
        </Modal>
    );
};

export default Error;