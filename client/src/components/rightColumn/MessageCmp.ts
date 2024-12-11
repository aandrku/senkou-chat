import Message from "../../interfaces/message.interface.js"
import UserInfo from "../../state/UserInfo.js"

const MessageCmp = (msg: Message) => {
	const element = document.createElement("div")

	const render = () => {
		element.classList.add("message")
		if (msg.senderID === UserInfo.id) {
			element.classList.add("message--right")
		} else {
			element.classList.add("message--left")
		}
		element.innerHTML = `
		<div class="message__content">
			<p class="message__text ">${msg.content}</p>
			<div class="message__meta">${msg.sentDate}</div>
		</div>
		`

	}

	render()

	return element
}

export default MessageCmp
