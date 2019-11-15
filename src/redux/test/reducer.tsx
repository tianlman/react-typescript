import {CHANGE_VALUE, DECREMENT, INCREMENT} from './type';
import {Action} from "../type";


const data = {
    value: 0
};

// 处理并返回 state
export function testFn(state: any = data, action: Action) {
    console.log(state,action.payload, 'testFn');
    switch (action.type) {
        case INCREMENT:
            return {...state, ...{value: state.value + 1}}
        case DECREMENT:
            return {...state, ...{value: state.value - 1}}
        case CHANGE_VALUE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// export function changeFn(state: any = data, action: Action) {
//     switch (action.type) {
//         case CHANGE_VALUE:
//             return {...state, ...action.payload}
//         default:
//             return state
//     }
// }
