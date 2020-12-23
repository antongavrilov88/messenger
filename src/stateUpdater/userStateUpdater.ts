import { TEST_ACTION } from '../actions.js'
import state from '../state/State.js'
import Store from '../utils/Store.js'

// let store = Store.getInstance()

export const userStateUpdater = (actionType: any) => {
    switch (actionType) {
        case TEST_ACTION:
            // return {
            //     ...state,
            //     user: {
            //         userID: 'TEST user Id'
            //     }
            // }    
            Store.setState( {user: { userID: 'TEST MY REDUX' }} )
            // state.user.userID = 'TEST MY REDUX'
            console.log( 'action is ok, update is not', state )
        default:
            break;
    }
}