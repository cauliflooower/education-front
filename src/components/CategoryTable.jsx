import { useContext, useEffect, useState } from "react";
import { Button, CloseButton, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "..";
import { fetchOneCategory, fetchTypes } from "../http/deviceAPI";
import CreateType from "../modal/CreateModal";
import DeleteType from "../modal/DeleteType";
import UpdateType from "../modal/UpdateType";
import Header from "./Header";
import c from "./scss/Admin.module.scss"
import Sidebar from "./Sidebar";

const CategoryTable = () => {
    const { category } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => category.setTypes(data))
    }, [])

    const [typeVisible, setTypeVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [updateVisible, setUpdateVisible] = useState(false)

    return (
        <div className={c.admin}>
            <div className={c.container}>
                <Header />
                <div className={c.adminInner}>
                    <div className={c.adminAcide}>
                        <Sidebar />
                    </div>
                    <div className={c.adminInform}>
                        <div className={c.table}>
                            <div className={c.adminTableBlock}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Название</th>
                                            <th>Создана:</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.types.map(e =>
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.createdAt.slice(0, 10)}</td>
                                                <td className={c.positionButton}>
                                                    <button className={c.buttonApp} onClick={() => {
                                                        category.setSelectedType(e)
                                                        setUpdateVisible(true)
                                                    }}>Изменить</button></td>
                                                <td className={c.positionButton}><CloseButton onClick={() => {
                                                    category.setSelectedType(e)
                                                    setDeleteVisible(true)
                                                }} /></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className={c.adminButtons}>
                                    <button className={c.buttonApp} onClick={() => setTypeVisible(true)}>Добавить</button>
                                </div>
                            </div>
                            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                            <DeleteType show={deleteVisible} onHide={() => setDeleteVisible(false)} />
                            <UpdateType show={updateVisible} onHide={() => setUpdateVisible(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default CategoryTable;
