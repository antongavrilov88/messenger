import { chatCTX } from './contexts.js'
import { chatListCTX } from './contexts.js'
import { render } from '../../utils/render.js'
import AuthWorkspace from '../../components/AuthWorkspace.js'
import ChatListBlock from '../../components/ChatListBlock.js'
import ChatBlock from '../../components/ChatBlock.js'

const chatListBlock = new ChatListBlock(chatListCTX, [])

const chatBlock = new ChatBlock(chatCTX, [])

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: chatListBlock.getContent()
    },
    {
        parentNodeSelector: '.workspace__container',
        node: chatBlock.getContent()
    }
]

const workspace = new AuthWorkspace({}, workspaceChildren)

render( '.app', workspace )