import { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { deleteOneTypes } from '../http/deviceAPI'
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { deleteOneMessage } from '../http/messageAPI';

const DeleteUs = ({text, show, onHide}) => {
    const {category} = useContext(Context)
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(category.selectedMessage.id)
    })

    const deletePost = () => {
        deleteOneMessage({id: value}).then(data => {
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
            </Modal.Header>
            <Modal.Body>
                <p>Вы уверены что хотите удалить эту категорию?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Нет</Button>
                <Button variant="outline-success" onClick={deletePost}>Да</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteUs

