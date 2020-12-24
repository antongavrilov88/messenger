import { TEST_ACTION, ON_LOGIN } from '../actions.js'
import Store from '../utils/Store.js'

export const userStateUpdater = async (action: any) => {
    switch (action.type) {
        case TEST_ACTION:
            Store.setState( {user: { userID: 'TEST MY REDUX' }} )
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