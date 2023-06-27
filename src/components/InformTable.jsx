import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, CloseButton, Table } from "react-bootstrap";
import { Context } from "..";
import { fetchCategory, fetchTypes } from "../http/deviceAPI";
import CreateInform from "../modal/CreateInform";
import DeleteInform from "../modal/DeleteInform";
import UpdateInform from "../modal/UpdateInform";
import Header from "./Header";
import c from "./scss/Admin.module.scss"
import Sidebar from "./Sidebar";

const InformTable = observer(() => {
    const {category} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => category.setTypes(data))
        fetchCategory().then(data => category.setCategorys(data))
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
                                            <th>Заголовок</th>
                                            <th>Текст</th>
                                            <th>Категория</th>
                                            <th>Создана:</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.categorys.map(e =>
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>
                                                    <div className={c.scrollBox}>{e.title}</div>
                                                </td>
                                                <td>
                                                    <div className={c.scrollBox}>{e.text}</div>
                                                </td>
                                                <td>{e.typeId}</td>
                                                <td>{e.createdAt.slice(0, 10)}</td>
                                                <td className={c.positionButton}>
                                                    <button className={c.buttonApp} onClick={() => {
                                                        category.setSelectedCategory(e)
                                                        setUpdateVisible(true)
                                                    }}>Изменить</button></td>
                                                <td className={c.positionButton}>
                                                    <CloseButton onClick={() => {
                                                    category.setSelectedCategory(e)
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
                            <CreateInform show={typeVisible} onHide={() => setTypeVisible(false)} />
                            <DeleteInform show={deleteVisible} onHide={() => setDeleteVisible(false)} />
                            <UpdateInform show={updateVisible} onHide={() => setUpdateVisible(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
})

export default InformTable;
