import c from "./scss/Home.module.scss"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import UserStore from "../store/UserStore";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { CATEGORY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, PROFILE_ROUTE } from "../utils/consts";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = observer(() => {
    const navigation = useNavigate()
    const { user } = useContext(Context)
    const name = localStorage.getItem('name')

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigation(HOME_ROUTE)
        localStorage.setItem('name', '');
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                    <p onClick={() => navigation(HOME_ROUTE)} className={c.link}>НГАЭК</p>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {user.isAuth || name === 'admin' ?
                                <Nav className={c.columnItem}>
                                    <div><button onClick={() => navigation(CATEGORY_ROUTE)} className={c.imgLink}>Категории</button></div>
                                    
                                    {(name === 'admin') ?
                                    <div> <button onClick={() => navigation(ADMIN_ROUTE)} className={c.imgLink}>Админ панель</button></div>
                                       
                                        :
                                        <div><button onClick={() => navigation(PROFILE_ROUTE + '/' + name)} className={c.imgLink}>Мой кабинет</button> </div>
                                        
                                    }
                                    <div><button onClick={logOut} className={c.imgLink}>Выйти</button> </div>
                                        
                                    
                                </Nav>
                                :
                                <Nav className={c.columnItem}>
                                    <button onClick={() => navigation(CATEGORY_ROUTE)} className={c.imgLink}>Категории</button>
                                    <button onClick={() => navigation(LOGIN_ROUTE)} className={c.imgLink}>Авторизоваться</button>
                                </Nav>
                            }
                        </Nav>
                    </Navbar.Collapse>

            </Navbar>
        </>
    );
})

export default Header;
