import { ON_CHANGE_PASSWORD, ON_LOAD } from '../actions.js'
import state from '../state/State.js'
import Store from '../utils/Store.js'

export const userStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_LOAD:
            Store.setState({
                user: action.payload
            })
            break
        case ON_CHANGE_PASSWORD:
            Store.setState({user: {...state.user, passwordChanged: action.payload.message ? false : true}})
            break
        default:
            break;
    }
}