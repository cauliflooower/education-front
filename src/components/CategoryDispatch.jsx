import c from "./scss/Category.module.scss"
import Header from "./Header";
import { observer } from "mobx-react-lite";
import { Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCategory, fetchOneCategory, fetchTypes } from "../http/deviceAPI";

const CategoryDispatch = observer(() => {
    const { id } = useParams()
    const [category, setCategorys] = useState([])

    useEffect(() => {
        fetchOneCategory(id).then(data => setCategorys(data))
    })

    return (
        <div className={c.category}>
            <div className={c.container}>
                <Header />
                <div className={c.categoryInner}>
                    <div className={c.categoryBox}>
                        {category.map(e =>
                            <div key={e.id} className={c.categoryInform}>
                                {!(e.img === null) ?
                                    <div>
                                        <h3>{e.title}</h3>
                                        <div className={c.flexImg}>
                                            <p>{e.text}</p>
                                            <Image className={c.flexImgItem} src={process.env.REACT_APP_API_URL + e.img} />
                                        </div>

                                    </div>
                                    :
                                    <div>
                                        <h3>{e.title}</h3>
                                        <p>{e.text}</p>
                                    </div>
                                }

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
})

export default CategoryDispatch;
