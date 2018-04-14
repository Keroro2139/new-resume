import { STICKY_NAVIGATION } from '../actions'

export default function (state = 'isNotSet', action) {
    switch (action.type) {
        case STICKY_NAVIGATION:
            return action.payload

        default:
            return state
    }
}