import { useContext, useEffect, useState } from "react";
import { Button, CloseButton, Table } from "react-bootstrap";
import { Context } from "..";
import { fetchCategory } from "../http/deviceAPI";
import { fetchMessage } from "../http/messageAPI";
import DeleteUs from "../modal/DeleteUs";
import Header from "./Header";
import c from "./scss/Admin.module.scss"
import Sidebar from "./Sidebar";

const UsComponent = () => {
    const {category} = useContext(Context)

    useEffect(() => {
        fetchMessage().then(data => category.setMessages(data))
    }, [])

    
    const [deleteVisible, setDeleteVisible] = useState(false)

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
                                            <th>Имя</th>
                                            <th>Почта</th>
                                            <th>Телефон</th>
                                            <th>Текст</th>
                                            <th>Создана:</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category.messages.map(e =>
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>
                                                    <div className={c.scrollBox}>{e.name}</div>
                                                </td>
                                                <td>
                                                    <div className={c.scrollBox}>{e.mail}</div>
                                                </td>
                                                <td>{e.tel}</td>
                                                <td>{e.text}</td>
                                                <td>{e.createdAt.slice(0, 10)}</td>
                                                <td className={c.positionButton}>
                                                    <CloseButton onClick={() => {
                                                    category.setSelectedMessage(e)
                                                    setDeleteVisible(true)
                                                }} /></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                            <DeleteUs show={deleteVisible} onHide={() => setDeleteVisible(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default UsComponent;
