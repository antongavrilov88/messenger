import { authStateUpdater } from './authStateUpdater.js'
import { userStateUpdater } from './userStateUpdater.js'

const payloadHandler = async (payload:any) => {
    let result = await payload.then( (result: any) => result )
    // add errors cases
    console.log( result )
    return JSON.parse(result.response)
}

export const stateUpdater = async (action: any) => {
    if ( action.payload ) {
        action = {...action, payload: await payloadHandler(action.payload)}
    }
    authStateUpdater(action)
    userStateUpdater(action)
}