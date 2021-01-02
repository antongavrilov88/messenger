import Store from '../utils/Store'
import { userStore, } from './userState'
import { authStore } from './authState'
import { chatStore } from './chatState'

let store = Store.getInstance()
let state = store.state

state = userStore(state)
state = authStore(state)
state = chatStore(state)

export default state