import { TEST_ACTION, ON_LOGIN } from '../actions.js'
import Store from '../utils/Store.js'

export const userStateUpdater = async (action: any) => {
    switch (action.type) {
        case TEST_ACTION:
            Store.setState( {user: { userID: 'TEST MY REDUX' }} )
            break
        case ON_LOGIN:
            console.log(action.payload)
            Store.setState( {user: { userID: JSON.parse( action.payload ).error  ? '...went wrong' : action.payload }} )
            break
        default:
            break;
    }
}