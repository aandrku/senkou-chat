import Message from "./message.interface.js"
import User from "./user.interface.js"

export default interface Chat {
	id: string
	name : string | undefined
	participants: User[]
	messages: Message[]
}
