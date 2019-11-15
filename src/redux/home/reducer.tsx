import {HOMEMSG} from './type';
import {Action, State} from "../type";


const name = {
    list: [],
    msg: 'asd'
}
// 处理并返回 state
export function HomeFn (state:State = name, action: Action){
    console.log(state, action,'[[[[[[[[[');
    switch (action.type) {
        case HOMEMSG:
            return {...state, ...action.payload};
        default:
            return state
    }
}

// export function chatReducer(state = initialState, action: ChatActionTypes ): ChatState {
//     switch (action.type) {
//         case SEND_MESSAGE:
//             return {
//                 messages: [...state.messages, action.payload]
//             };
//         case DELETE_MESSAGE:
//             return {
//                 messages: state.messages.filter(
//                     message => message.timestamp !== action.meta.timestamp
//                 )
//             };
//         default:
//             return state;
//     }
// }