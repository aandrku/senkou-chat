import ChatCardList from "../../components/leftColumn/ChatCardList.js"
import SearchBar from "../../components/leftColumn/SearchBar.js"

const leftColumn = document.getElementById("LeftColumn") as HTMLElement

const initLeftColumn = () => {
	leftColumn.append(SearchBar())
	leftColumn.append(ChatCardList())

}

export default initLeftColumn
