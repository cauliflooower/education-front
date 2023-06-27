import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Context } from "..";
import { fetchOneUser, login, registration } from "../http/userAPI";
import Error from "../modal/Error";
import Result from "../modal/Result";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import c from "./login.module.scss"

const Login = observer(() => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [errorVisible, setErrorVisible] = useState(false)
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = async () => {
    try {
      let data = await registration(name, email, password);
      user.setUser(user)
      user.setIsAuth(true)
      setTypeVisible(true)
    } catch (e) {
      setErrorVisible(true)
    }

  }
  const signIn = async () => {
    try {
      let data = await login(name, password);
      user.setUser(user)
      if (data.role === "ADMIN") {
        user.setIsRole(true)
      } else if (data.role === "USER") {
        user.setIsRole(false)
      }
      user.setIsAuth(true)
      localStorage.setItem('name', name);
      navigate(HOME_ROUTE)
    } catch (e) {
      setErrorVisible(true)
    }
  }

  return (
    <div className={c.login}>
      <div className={c.container}>
        {/* <Header/> */}
        <div className={c.loginInner}>
          <div className={c.loginWhite}>
            <form>
              <div className={c.questionBox}>
                {isLogin ?
                  <div className={c.questionBoxWidth}>
                    <label className={c.questionLabel}>
                      Имя:
                      <input className={c.questionItem}
                        placeholder="Введите своё имя" type="text" name="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    </label>
                    <label className={c.questionLabel}>
                      Пароль:
                      <input className={c.questionItem}
                        placeholder="Введите свой пароль" type="text" name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </label>
                  </div>
                  :
                  <div className={c.questionBoxWidth}>
                    <label className={c.questionLabel}>
                      Имя
                      <input className={c.questionItem}
                        placeholder="Введите своё имя" type="text" name="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    </label>
                    <label className={c.questionLabel}>
                      Логин:
                      <input className={c.questionItem}
                        placeholder="Введите свой логин" type="text" name="login"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label className={c.questionLabel}>
                      Пароль:
                      <input className={c.questionItem}
                        placeholder="Введите свой пароль" type="text" name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    </label>
                  </div>
                }
              </div>
            </form>
            {isLogin ?
              <div className={c.spanText}>
                Нет аккаунта? <NavLink className={c.spanTextColor} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div className={c.spanText}>
                Есть аккаунт? <NavLink className={c.spanTextColor} to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <div className={c.spanText}>
              <p onClick={() => navigate(HOME_ROUTE)}>На главную</p>
            </div>
            <div className={c.questionBetween}>
              {isLogin ?
                <button className={c.questionButton + ' ' + c.leftButton} onClick={signIn}>Войти</button>
                :
                <button className={c.questionButton + ' ' + c.rightButton} onClick={signUp}>Зарегистрироваться</button>
              }
            </div>
          </div>
        </div>
      </div>
      <Result text={"Вы успешно зарегистрированы"} show={typeVisible} onHide={() => setTypeVisible(false)} />
      <Error text={"Что-то пошло не так"} show={errorVisible} onHide={() => setErrorVisible(false)} />
    </div>
  );
})

export default Login;
