import { ON_LOAD, ON_LOGIN } from '../actions.js'
import Store from '../utils/Store.js'

export const authStateUpdater = async (action: any) => {
    switch (action.type) {
        case ON_LOAD:
            Store.setState( {user: action.payload } )
            break
        case ON_LOGIN:
            Store.setState({
                user: { userID: action.payload.reason  ? action.payload.reason : action.payload,
                        error: action.payload.reason ? action.payload.reason : null
        }} )
            break
        default:
            break;
    }
}