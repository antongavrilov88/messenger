import { ON_CHANGE_PASSWORD, ON_LOAD, ON_AVATAR_CHANGE } from '../actions'
import Store from '../utils/Store'
import { store } from '../state/State'

export const userStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_LOAD:
            console.log(action.payload, 'USER IS OK')
            Store.setState({
                ...store.state,
                user: action.payload,
                userProfileUpdated: false
            })
            console.log(store.state, 'USER IS OK')
            break
        case ON_CHANGE_PASSWORD:
            Store.setState({
                ...store.state,
                    user: {
                        ...store.state.user,
                        passwordChanged: action.payload.message ? false : true
                    }
            })
            break
        case ON_AVATAR_CHANGE:
            Store.setState({
                ...store.state,
                userProfileUpdated: true
            })
            break
        default:
            break;
    }
}