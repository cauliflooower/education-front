import React, { useEffect, useState } from "react";
import { Button, CloseButton, Dropdown } from "react-bootstrap";
import { Form } from "react-router-dom";
import CreateApp from "../modal/CreateApp";
import Header from "./Header";
import c from "./scss/Admin.module.scss"
import Sidebar from "./Sidebar";

const Applications = () => {
    const [task, setTask] = useState("");
    const [value, setValue] = useState({});
    const [tasks, setTasks] = useState([]);
    const [list, setList] = useState([]);
    const [appVisible, setAppVisible] = useState(false)
    const name = localStorage.getItem('name')

    useEffect(() => {
        if (localStorage.getItem("result")) {
            const storedList = JSON.parse(localStorage.getItem("result"));
            setList(storedList);
        }
    }, [])

    const addTask = () => {
        list.map((e, i) => {
            if (i === value) {
                const newTask = { id: new Date().getTime().toString(), title: task };
                setTasks([...tasks, newTask]);
                var user = JSON.parse(localStorage.getItem('result'));
                user[i].col.push(newTask)
                localStorage.setItem('result', JSON.stringify(user));
                setTask("");
            }
        })
    };

    const handleDelete = (task, i) => {
        const deleted = tasks.filter((t) => t.id !== task.id);
        setTasks(deleted);
        var user = JSON.parse(localStorage.getItem('result'));
        user[i].col.splice(i, 1)
        localStorage.setItem('result', JSON.stringify(user));
    }

    const handleClear = (task) => {
        const deleted = list.filter((t) => t.id !== task.id);
        setList(deleted);
        localStorage.setItem('result', JSON.stringify(deleted));
    }
    return (
        <>
            <div className={c.admin}>
                <div className={c.container}>
                    <Header />
                    <div className={c.adminInner}>
                        <div className={c.adminAcide}>
                            <Sidebar />
                        </div>
                        <div className={c.adminInform}>
                            <div className={c.adminNav}>
                                {name !== 'admin' ?
                                    <div></div>
                                    :
                                    <button className={c.buttonApp} onClick={() => setAppVisible(true)}>Добавить событие</button>
                                }

                                <div className={c.adminNavInner}>
                                    <div>
                                        <input
                                            name="task"
                                            type="text"
                                            value={task}
                                            placeholder="Введите ФИО и номер группы"
                                            className="form-control"
                                            onChange={(a) => setTask(a.target.value)}
                                        />
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle className={c.dropdownApp}>Выберите событие</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {list.map((type, i) =>
                                                <Dropdown.Item
                                                    onClick={() => setValue(i)}
                                                    key={type.id}
                                                >
                                                    {i + 1}
                                                </Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div>
                                        <button
                                            className={c.buttonApp}
                                            onClick={addTask}
                                        >
                                            Добавить запись
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={c.appCardMenu}>
                                {list.map((e, i) => (
                                    <div key={e.id} className={c.appCard}>
                                        {name !== 'admin' ?
                                            <div>
                                                <p>#{i + 1}</p>
                                            </div>
                                            :
                                            <div className={c.appCardItem}>
                                                <p>#{i + 1}</p>
                                                <CloseButton className={c.appCardClose} onClick={() => handleClear(e, i)} />
                                            </div>
                                        }
                                        <div className={c.appCardInner}>
                                            {/* <span>{i}</span> */}
                                            <p className={c.appText}>{e.title}</p>
                                            <div className={c.appName}>
                                                {e.col.map((argum) => (
                                                    <React.Fragment key={argum.id}>
                                                        <div className={c.fragment}>
                                                            <div>
                                                                <span
                                                                    style={{ textAlign: "left", fontWeight: "bold" }}>
                                                                    {argum.title}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                {name !== 'admin' ?
                                                                    <div></div>
                                                                    :
                                                                    <CloseButton onClick={() => handleDelete(e, i)} />
                                                                }
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                                {/* {!tasks.length ? null : (
                                                <div>
                                                    <button className="btn btn-secondary  mt-4 mb-4" onClick={() => handleClear()}>
                                                        Clear
                                                    </button>
                                                </div>
                                            )} */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CreateApp show={appVisible} onHide={() => setAppVisible(false)} />
        </>
    );
}

export default Applications;
