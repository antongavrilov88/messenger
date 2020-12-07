import { chatListCTX } from './contexts.js'
import { render } from '../../utils/render.js'
import AuthWorkspace from '../../components/AuthWorkspace.js'
import ChatListBlock from '../../components/ChatListBlock.js'
import DummyChatBlock from '../../components/DummyChatBlock.js'
import { dummyChatBlockCTX } from './contexts.js'


const chatListBlock = new ChatListBlock(chatListCTX, [])

const dummyChatBlock = new DummyChatBlock(dummyChatBlockCTX, [])

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: chatListBlock.getContent()
    },
    {
        parentNodeSelector: '.workspace__container',
        node: dummyChatBlock.getContent()
    }
]

const workspace = new AuthWorkspace({})

render( '.app', workspace )