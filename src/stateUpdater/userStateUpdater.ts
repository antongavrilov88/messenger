import { ON_CHANGE_PASSWORD, ON_LOAD, ON_AVATAR_CHANGE } from '../actions'
import state from '../state/State'
import Store from '../utils/Store'

export const userStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_LOAD:
            Store.setState({
                user: action.payload,
                userProfileUpdated: false
            })
            break
        case ON_CHANGE_PASSWORD:
            Store.setState({user: {...state.user, passwordChanged: action.payload.message ? false : true}})
            break
        case ON_AVATAR_CHANGE:
            Store.setState({
                userProfileUpdated: true
            })
            break
        default:
            break;
    }
}