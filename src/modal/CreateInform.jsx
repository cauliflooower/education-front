import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {Context} from "..";
import {createCategory, fetchTypes} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateInform = observer(({show, onHide}) => {
    const {category} = useContext(Context)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => category.setTypes(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('text', text)
        formData.append('img', file)
        formData.append('typeId', category.selectedType.id)
        createCategory(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить информацию
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
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateInform;