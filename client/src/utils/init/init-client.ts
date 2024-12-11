import Chat from "../../interfaces/chat.interface.js"
import Message from "../../interfaces/message.interface.js"
import chatsState from "../../state/ChatsState.js"
import UserInfo from "../../state/UserInfo.js"
import initLeftColumn from "./init-leftColumn.js"

const initClient = () => {

	initLeftColumn()

	const newChatLoop = () => {

		for (let i = 0; i < 10; i++) {
			const chat: Chat = {
				id: `${i}`,
				name: "Disha",
				participants: [],
				messages: [],
			}

			chatsState.newChat(chat)
		}
	}

	const randomIDs = [
		"29384",
		"29384",
		UserInfo.id,
		"29384",
		"29384",
		UserInfo.id,
		"29384",
		UserInfo.id,
		"29384",
		"29384",
	]


	const messages: string[] = [
		"Hello there! How's everything on your end today?",
		"Just finished a long day at work. What about you?",
		"Let's catch up this weekend for lunch, how does that sound?",
			"I saw that new movie last night and absolutely loved it! Highly recommended.",
		"Can you send me the final report by tomorrow morning? Thanks!",
		"What time is our meeting scheduled for tomorrow? I need to prepare.",
			"I’m currently stuck in traffic, will be there soon.",
		"Could you help me figure out the issue with this code?",
		"It was really nice seeing you today after such a long time!",
		"Hey, how have you been? We haven't caught up in ages!"
	]

console.log(messages);

	const messageLoop = () => {
		const randomNumber1 = Math.round(Math.random() * 10)
		const randomNumber2 = Math.round(Math.random() * 10)
		const randomNumber3 = Math.round(Math.random() * 10)
		const msg: Message = {
			id: "1",
			senderID: randomIDs[randomNumber1],
			chatID: `${randomNumber2}`,
			content: messages[randomNumber3],
			sentDate: "14:25",
		}

		chatsState.newMessage(msg)


		setTimeout(() => {
			messageLoop()
		}, 500)

	}


	newChatLoop()
	messageLoop()

}

export default initClient

