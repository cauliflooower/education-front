import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import { updateOneTypes } from '../http/deviceAPI';
import { Context } from '..';

const UpdateType = ({show, onHide}) => {
    const {category} = useContext(Context)
    const [value, setValue] = useState('')

    // useEffect(() => {
    //     setValue(category.selectedType.name)
    // })

    const addType = () => {
        updateOneTypes({id: category.selectedType.id, name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateType;