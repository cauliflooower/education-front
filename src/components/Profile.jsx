import Header from "./Header";
import c from "./scss/Admin.module.scss"
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "..";
import Sidebar from "./Sidebar";
import Messanger from "./Messanger";

const Profile = observer(() => {
    const { user } = useContext(Context)
    const name = useParams()
    if(name){
        user.setIsAuth(true)
        user.setIsRole(false)
    }

    return (
        <>
            <div className={c.admin}>
                <div className={c.container}>
                    <Header />
                    <div className={c.adminInner}>
                        <div className={c.adminAcide}>
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})

export default Profile;

