import c from "./scss/Home.module.scss"

const Footer = () => {
    return (
        <>
            <footer className={c.footer}>
                <div className={c.container}>
                    <div className={c.footerInner}>
                        <h2 className={c.footerTitle}>Управлние внеучебной деятельностью колледжа "НГАЭК"</h2>
                        <div className={c.footerContact}>
                            <h4>Всё ещё остались какие-то вопросы? Свяжитесь с нами</h4>
                            <div className={c.footerContactText}>
                                <p>Зам. директора по воспитательной работе: <span>8-017-505-45-74</span></p>
                                <p>Заведующая отделением: <span>8-017-505-45-33</span></p>
                                <p>Руководитель физической культуры: <span>8-017-505-45-25</span></p>
                                <a href="http://ngaek.by/index.php/ru/">Сайт колледжа: <span>http://ngaek.by/index.php/ru/</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
