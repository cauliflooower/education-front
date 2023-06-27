import { useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { deleteOneCategory, deleteOneTypes } from '../http/deviceAPI'
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const DeleteQuestion = ({text, show, onHide}) => {
    const {category} = useContext(Context)
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(category.selectedCategory.id)
    })

    const deletePost = () => {
        deleteOneCategory({id: value}).then(data => {
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

export default DeleteQuestion

