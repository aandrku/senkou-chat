import Message from "./message.interface.js"

export default interface Component {
	element: HTMLElement
	cleanup?(): void
}

export interface MessageListComponent extends Component {
	newMessage(msg: Message): void
}
