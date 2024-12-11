import Chat from "../../interfaces/chat.interface.js"
import { openChat } from "../../utils/columns/rightColumn.js"

const ChatCard = (chat: Chat) => {
	const element = document.createElement("div")

	const render = () => {
		element.classList.add("chat-card")
		element.innerHTML = `
		<div class="chat-card__left">
			<!-- <img class="chat-card__icon"> -->
			<div class="chat-card__icon"></div>
		</div>
		<div class="chat-card__middle">
			<div class="chat-card__name">dishaxs</div>
			<div class="chat-card__last-msg">Hello</div>
		</div>
		<div class="chat-card__right">
			<div class="chat-card__time">17:47</div>
		</div>

		`
	}

	const events = () => {
		element.onclick = () => {
			openChat(chat)
		}

	}
	
	events()
	render()

	return element

}

export default ChatCard
