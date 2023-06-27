import c from "./scss/Admin.module.scss"

const Message = (props) => {
    const name = localStorage.getItem('name')
    return (
        <div>
            <div className={name === props.author ? c.messages + ' ' + c.messagesSent : c.messages + ' ' + c.messagesReceived}>
                <div className={c.message}>
                    <span className={c.textSpan}>{props.author}</span>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Message;