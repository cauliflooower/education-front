import Header from "./Header";
import c from "./scss/Admin.module.scss"
import CategoryTable from "./CategoryTable";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Sidebar from "./Sidebar";

const Admin = () => {
    
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    const { category } = useContext(Context)
    return (
        <>
            <div className={c.admin}>
                <div className={c.container}>
                    <Header />
                    <div className={c.adminInner}>
                        <div className={c.adminAcide}>
                            <Sidebar/>
                        </div>
                        <div className={c.adminInform}>
                        {(active)
                        ?
                        <CategoryTable/>
                        :
                        <div className={c.categoryInform + ' ' + c.place}>Выберите категорию</div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
