import React, { useEffect, useState } from "react";
import Header from "./Header";
import c from "./scss/Admin.module.scss"
import Sidebar from "./Sidebar";
import EmojiPicker from "emoji-picker-react";
import icon from "../img/emoji.svg"
import send from "../img/send.png"
import Message from "./Message";

const Messanger = () => {
    const [isOpen, setOpen] = useState(false);
    const name = localStorage.getItem('name')
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
        if (localStorage.getItem("message")) {
            const storedList = JSON.parse(localStorage.getItem("message"));
            setTasks(storedList);
        }
    }, [])

    const addInfo = () => {
        const user = { id: new Date().getTime().toString(), text: value, author: name };
        setTasks([...tasks, user]);
        localStorage.setItem('message', JSON.stringify([...tasks, user]));
        setValue('')
    }

    const onEmojiClick = ({ emoji }) => setValue(`${value} ${emoji}`);

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
                            <div className={c.conversation}>
                                {tasks.map((e) =>
                                    <Message key={e.id} text={e.text} author={e.author} />
                                )}
                            </div>
                            <div className={c.profileInform}>
                                <div className={c.screen}>
                                    <div className={c.textBar}>
                                        <form className={c.textBarField} id="form-message">
                                            <input type="text"
                                                placeholder="Напишите здесь сообщение ;)"
                                                value={value}
                                                onChange={e => setValue(e.target.value)}
                                            />
                                        </form>
                                        <div className={c.emoji}>
                                            <img src={icon} alt="" onClick={() => setOpen(!isOpen)} />

                                            {isOpen && (
                                                <div className={c.emojies}>
                                                    <EmojiPicker onEmojiClick={onEmojiClick} />
                                                </div>
                                            )}
                                        </div>
                                        <div className={c.textBarThumb}>
                                            <div className={c.thumb}>
                                                <img src={send} alt="" onClick={addInfo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messanger;
