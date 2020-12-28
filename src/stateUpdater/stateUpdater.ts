import { authStateUpdater } from './authStateUpdater.js'
import { userStateUpdater } from './userStateUpdater.js'
import { chatStateUpdater } from './chatStateUpdater.js'

const payloadHandler = async (payload:any) => {
    let result = await payload.then( (result: any) => result )
    console.log( result )
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