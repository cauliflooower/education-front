import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";

const CreateApp = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("result")) {
            const storedList = JSON.parse(localStorage.getItem("result"));
            setTasks(storedList);
        }
    }, [])

    const addApp = () => {
        const user = {  id: new Date().getTime().toString(), title: value, col: []};
        setTasks([...tasks, user]);
        localStorage.setItem('result', JSON.stringify([...tasks, user]));
        setValue('')
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Заявку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите текст"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addApp}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateApp;