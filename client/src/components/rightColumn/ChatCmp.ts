import Chat from "../../interfaces/chat.interface.js"
import Component from "../../interfaces/component.interface.js"
import { NewMessageEventeDetail } from "../../state/ChatsState.js"
import { showRightColumn } from "../../utils/columns/rightColumn.js"
import ChatBottomBar from "./ChatBottomBar.js"
import ChatTopBar from "./ChatTopBar.js"
import MessageList from "./MessageList.js"

const ChatCmp = (chat: Chat): Component => {
	const element = document.createElement("div")
	const topBar = ChatTopBar(chat)
	const bottomBar = ChatBottomBar()
	const messageList = MessageList(chat.messages)
	
	const render = () => {
		element.classList.add("chat")
		element.append(topBar)
		element.append(messageList.element)
		element.append(bottomBar)
	}

	const newMessageHandler = (e: Event) => {
		const castedEvent = e as CustomEvent<NewMessageEventeDetail>

		const msg = castedEvent.detail.msg

		messageList.newMessage(msg)

	}

	const events = () => {
		document.addEventListener(chat.id, newMessageHandler)
		element.addEventListener("click", e => {
			const exemptions = topBar.querySelectorAll(":scope *") as NodeListOf<Element>
			
			for (let ex of exemptions) {
				if (ex === e.target) {
					return
				}
			}

			showRightColumn()
		})

	}

	const cleanup = () => {
		console.log("cleanup called")
		element.remove()
		document.removeEventListener(chat.id, newMessageHandler)

	}

	render()
	events()
	showRightColumn()

	return {
		element: element,
		cleanup: cleanup,
	}

}

export default ChatCmp


