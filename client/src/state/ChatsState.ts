import Chat from "../interfaces/chat.interface.js";
import Message from "../interfaces/message.interface.js";

export interface NewChatEventDetail {
	chat: Chat
}

export interface NewMessageEventeDetail {
	msg: Message
}

class ChatsState {
	chats: Set<Chat>

	constructor() {
		this.chats = new Set<Chat>();

	}

	newChat(chat: Chat): void {
		console.log("new chat called")
		this.chats.add(chat)
		const newChatEvent = new CustomEvent<NewChatEventDetail>("new-chat", {
			detail: {
				chat: chat
			}
		})

		document.dispatchEvent(newChatEvent)
	}

	newMessage(msg: Message): void {
		this.chats.forEach(chat => {
			if (chat.id === msg.chatID) {
				chat.messages.push(msg)
				
				const newMessageEvent = new CustomEvent<NewMessageEventeDetail>(chat.id, {
					detail: {
						msg: msg
					}
				})

				document.dispatchEvent(newMessageEvent)
			}
		})
		
		

	}
}

const chatsState = new ChatsState()

export default chatsState
