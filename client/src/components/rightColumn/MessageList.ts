import { MessageListComponent } from "../../interfaces/component.interface.js"
import Message from "../../interfaces/message.interface.js"
import MessageCmp from "./MessageCmp.js"

const MessageList = (messages: Message[]): MessageListComponent => {
	const element = document.createElement("div")

	const render = () => {
		element.classList.add("message-list")
		messages.forEach(msg => {
			element.append(MessageCmp(msg))

		})

	}

	const newMessage = (msg: Message) => {
		element.append(MessageCmp(msg))
	}

	render()

	return {
		element: element,
		newMessage: newMessage,
	}

}

export default MessageList
