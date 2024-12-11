import ChatCmp from "../../components/rightColumn/ChatCmp.js"
import Chat from "../../interfaces/chat.interface.js"
import Component from "../../interfaces/component.interface.js"

const main = document.getElementById("main") as HTMLElement

export let currentChat: Component | undefined 



export const hideRightColumn = () => {
	main.classList.remove("right-column-shown")
}

export const showRightColumn = () => {
	console.log(main)
	main.classList.add("right-column-shown")
	console.log(main)
}

export const openChat = (chat: Chat) => {
	const rightColumn = document.getElementById("RightColumn") as HTMLElement

	if (currentChat === null) {
		currentChat = ChatCmp(chat)
	} else {
		if (currentChat && currentChat.cleanup) {
			currentChat.cleanup()
		}
		const newChat = ChatCmp(chat)
		currentChat = newChat
	}
	rightColumn.append(currentChat.element)

}
