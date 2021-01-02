import { authStateUpdater } from './authStateUpdater'
import { userStateUpdater } from './userStateUpdater'
import { chatStateUpdater } from './chatStateUpdater'

const payloadHandler = async (payload:any) => {
    let result = await payload.then( (result: any) => result )
    try {
        return JSON.parse(result.response)
    } catch (error) {
        return result.response
    }
}

export const stateUpdater = async (action: any) => {
    if ( action.payload ) {
        action = {...action, payload: await payloadHandler(action.payload)}
    }
    authStateUpdater(action)
    userStateUpdater(action)
    chatStateUpdater(action)
}