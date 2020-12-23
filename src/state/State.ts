import Store from '../utils/Store.js'
import { userStore, } from './userState.js'
import { authStore } from './authState.js'

let store = Store.getInstance()
let state = store.state

state = userStore(state)
state = authStore(state)

export default state