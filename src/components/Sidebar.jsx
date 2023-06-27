import { Link } from "react-router-dom";
import c from "./scss/Admin.module.scss"

const Sidebar = () => {
    const name = localStorage.getItem('name')

    return (
        <>
            {name !== 'admin' ?
                <ul className={c.adminList}>
                    <Link to="/messanger" className={c.link}>Сообщения</Link>
                    <Link to="/applications" className={c.link}>Заявки</Link>
                </ul>
                :
                <ul className={c.adminList}>
                    <Link to="/messanger" className={c.link}>Сообщения</Link>
                    <Link to="/applications" className={c.link}>Заявки</Link>
                    <Link to="/table" className={c.link}>Категории</Link>
                    <Link to="/inform" className={c.link}>Информация</Link>
                    <Link to="/us" className={c.link}>Для связи</Link>
                </ul>
            }
        </>
    );
}

export default Sidebar;
