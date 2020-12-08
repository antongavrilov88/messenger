import { render } from '../../utils/render.js'
import ChatListPage from './ChatListPage.js'

const chatPage = new ChatListPage()

render( '.app', chatPage )