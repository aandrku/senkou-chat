import { NewChatEventDetail } from "../../state/ChatsState.js"
import ChatCard from "./ChatCard.js"

const ChatCardList = () => {
	const element = document.createElement("div")

	const render = () => {
		element.classList.add("chat-card-list")
	}

	const events = () => {
		document.addEventListener("new-chat", e => {
			const castedEvent = e as CustomEvent<NewChatEventDetail>
			const newChat = castedEvent.detail.chat
			const chatCard = ChatCard(newChat)

			element.prepend(chatCard)

		})
	}

	render()
	events()

	return element

}

export default ChatCardList
