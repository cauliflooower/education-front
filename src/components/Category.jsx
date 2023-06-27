import c from "./scss/Category.module.scss"
import Header from "./Header";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCategory, fetchTypes } from "../http/deviceAPI";
import { CATEGORY_ROUTE, INFORM_ROUTE } from "../utils/consts";
import icon from "../img/help.png"

const Category = observer(() => {
    const [active, setActive] = useState([])
    const navigate = useNavigate();
    // const { category } = useContext(Context)
    const [category, setTypes] = useState([])


    useEffect(() => {
        fetchTypes().then(data => setTypes(data))
    }, [])
    return (
        <>
            <div className={c.category}>
                <div className={c.container}>
                    <Header />
                    <div className={c.categoryInner}>
                        <ul className={c.categoryList}>
                            {category.map(type =>
                                <li
                                    className={active ? c.link + ' ' + c.active : c.link}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        navigate(CATEGORY_ROUTE + '/' + type.id)
                                        setActive(true)
                                    }}
                                    key={type.id}
                                >
                                    {type.name}
                                </li>
                            )}
                        </ul>
                            <img src={icon} alt="icon" className={c.iconContainer} />
                    </div>
                </div>

            </div>
        </>
    );
})

export default Category;
