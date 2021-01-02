import { ON_CHANGE_PASSWORD, ON_LOAD } from '../actions'
import state from '../state/State'
import Store from '../utils/Store'

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