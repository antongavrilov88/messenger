import { ON_CHANGE_PASSWORD } from '../actions.js'
import state from '../state/State.js'
import Store from '../utils/Store.js'

export const userStateUpdater = async (action: any) => {
    switch (action.type) {
        case ON_CHANGE_PASSWORD:
            Store.setState({user: {...state.user, passwordChanged: action.payload.message ? false : true}})
            console.log( state )
            break
        default:
            break;
    }
}