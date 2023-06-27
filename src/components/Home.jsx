import Header from "./Header";
import c from "./scss/Home.module.scss";
import imgGoal from "../img/bn.jpg"
import imgTask from "../img/kj.jpg"
import imgQestion from "../img/question.jpg"
import hero from "../img/1625799870088Dwu7omrUM1V5.png"
import Footer from "./Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { createMessage } from "../http/messageAPI";

const Home = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')
  const [text, setText] = useState('')

  const addMessage = () => {
    createMessage({ name: name, mail: mail, tel: tel, text: text }).then(data => {
      setName('')
      setMail('')
      setTel('')
      setText('')
    })
  }

  return (
    <div className={c.app}>
      <div className={c.backgroundColor}>
        <div className={c.container}>
          <Header />
          <div className={c.heroInner}>
            <div className={c.heroItem}>
              <h1 className={c.heroTitle}>Управление внеучебной деятельностью колледжа</h1>
              <p className={c.heroText}>Повышению информационной компетенции подрастающего поколения способствует качественный котент интернет-сайта колледжа УО "Новопольский государственный аграрно-экономический колледж"</p>
              <Link className={c.heroButton} activeClass="active"
                spy={true}
                smooth={true}
                duration={500} to="point">Узнать больше</Link>
            </div>
            <img className={c.heroImg} src={hero} alt="hero" />
          </div>
        </div>
      </div>
      <div className={c.point} id="point">
        <div className={c.rectengle}></div>
        <div className={c.container}>
          <div className={c.pointInner}>
            <div className={c.pointBetween}>
              <div className={c.poinGoals}>
                <img className={c.pointImg} src={imgGoal} alt="img" />
                <h2 className={c.pointTitle}>Цель воспитательной работы в колледже</h2>
                <p className={c.poinText}>
                  Формирование и развитие личности, сочетающей
                  качества профессионально-нравственного сознания и поведения, социально-нравственных
                  установок, мотивов, отношений, ценностных ориентаций, обеспечивающих саморазвитие и
                  самоактуализацию.
                </p>
                <Link className={c.pointButton} to="zadachi" offset={900}>Ещё больше</Link>
              </div>
              <div className={c.poinTasks}>
                <img className={c.pointImg} src={imgTask} alt="img" />
                <p className={c.poinText}>
                  Организация разнообразных видов социально значимой деятельности студенческой
                  молодежи способствует развитию яркой личности, формирует гражданственность, способствует
                  реализации инициатив студентов колледжа.
                  Меняется время, меняются люди, изменяются и подходы к воспитанию, но в колледже они
                  всегда направлены на воспитание у будущего работника высокого интеллекта,
                  доброты и милосердия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={c.task} id="zadachi">
        <div className={c.taskInner}>
          <div className={c.container}>
            <div className={c.taskList}>
              <div className={c.taskItem}>
                <h3>01</h3>
                <p>
                  ориентация на гуманное мировоззрение, воспитание потребности студентов колледжа
                  нести добро;
                </p>
              </div>
              <div className={c.taskItem}>
                <h3>02</h3>
                <p>
                  формирование эстетических и духовных ценностей;
                </p>
              </div>
              <div className={c.taskItem}>
                <h3>03</h3>
                <p>
                  развитие у студентов инициативы, целеустремленности;
                </p>
              </div>
              <div className={c.taskItem}>
                <h3>04</h3>
                <p>
                  формирование позитивного отношения личности к избранной профессии;
                </p>
              </div>
              <div className={c.taskItem}>
                <h3>05</h3>
                <p>
                  воспитание потребности в здоровом образе жизни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={c.question}>
          <div className={c.container}>
            <div className={c.questionInner}>
              <div className={c.questionForm}>
                <form>
                  <div className={c.questionBox}>
                    <label className={c.questionLabel}>
                      Имя:
                      <input value={name}
                        onChange={e => setName(e.target.value)}
                        className={c.questionItem}
                        placeholder="Введите своё имя"
                        type="text"
                        name="name" />
                    </label>
                    <label className={c.questionLabel}>
                      E-mail:
                      <input value={mail}
                        onChange={e => setMail(e.target.value)}
                        className={c.questionItem}
                        placeholder="Введите свой e-mail"
                        type="text"
                        name="name" />
                    </label>
                  </div>
                  <label className={c.questionLabel}>
                    Телефон:
                    <input value={tel} onChange={e => setTel(e.target.value)}
                      className={c.questionItem} placeholder="Введите свой телефон"
                      type="text"
                      name="tel" />
                  </label>
                  <label className={c.questionLabel}>
                    Сообщение:
                    <textarea value={text} onChange={e => setText(e.target.value)}
                      className={c.questionItem}
                      placeholder="Введите сообщение"
                      type="text"
                      name="name" />
                  </label>
                  <input onClick={addMessage} className={c.questionButton} value="Отправить" />
                </form>
                <p className={c.questionText}>Если у тебя возникли какие-то вопросы или ты просто хочешь что-то уточнить. Не бойся спрашивать у нас, мы всегда на связи. </p>
              </div>
              <img className={c.imgQestion} src={imgQestion} alt="img" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
