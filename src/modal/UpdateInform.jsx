import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Dropdown} from "react-bootstrap";
import { fetchTypes, updateOneCategory} from '../http/deviceAPI';
import { Context } from '..';

const UpdateInform = ({show, onHide}) => {
    const {category} = useContext(Context)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const addType = () => {
        updateOneCategory({id: category.selectedCategory.id, title: title, text:text, typeId: category.selectedType.id}).then(data => {
            setTitle('')
            setText('')
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
                    Изменить информацию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{category.selectedType.name || "Выберите информацию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => category.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок"
                    />
                    <Form.Control
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="mt-3"
                        placeholder="Введите текст"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addType}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateInform;