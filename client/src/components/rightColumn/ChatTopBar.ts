import Chat from "../../interfaces/chat.interface.js"
import { currentChat, hideRightColumn } from "../../utils/columns/rightColumn.js"

const ChatTopBar = (chat: Chat) => {
	const element = document.createElement("div")

	const render = () => {
		element.classList.add("top-bar")
		element.innerHTML = `
		<div class="top-bar__left">
			<svg id="chat-close-btn" class="top-bar__close-btn" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.139 14.8514L8.13383 8.83673L7.78 8.48234L7.42617 8.83673L1.41972 14.8526L0.707385 14.1403L6.72328 8.13383L7.07766 7.78L6.72328 7.42617L0.707385 1.41972L1.41972 0.707385L7.42617 6.72328L7.77972 7.07738L8.13355 6.72355L14.14 0.717107L14.8429 1.42L8.83645 7.42645L8.48289 7.78L8.83645 8.13355L14.8441 14.1412L14.139 14.8514Z" fill="#B2B5BB" stroke="#B2B5BB"/>
			</svg>
			<svg id="chat-hide-btn" class="top-bar__hide-btn" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 7H15ZM1 7L7 13ZM1 7L7 1Z" fill="#B2B5BB"/>
				<path d="M1 7H15M1 7L7 13M1 7L7 1" stroke="#B2B5BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
		<div class="top-bar__middle">
			<div class="top-bar__name">${chat.name}</div>
			<div class="top-bar__status">online</div>
		</div>
		<div class="top-bar__right"></div>
		`

	}

	const events = () => {
		const closeBtn = element.querySelector("#chat-close-btn") as HTMLElement
		const hideBtn = element.querySelector("#chat-hide-btn") as HTMLElement

		closeBtn.onclick = () => {
			if (currentChat && currentChat.cleanup) {
				currentChat.cleanup()
			}
		}

		hideBtn.onclick = () => {
			hideRightColumn()
		}

	}

	render()
	events()
	events()

	return element

}

export default ChatTopBar
