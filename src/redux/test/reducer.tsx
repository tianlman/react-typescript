import {DECREMENT, INCREMENT} from './type';
import {Action} from "../type";


const data = {
    value: 0
};

// 处理并返回 state
export function testFn(state: any = data, action: Action) {
    console.log(state,'testFn');
    switch (action.type) {
        case INCREMENT:
            // console.log(Object.assign(state, {value: state.value + 1}),'********************************');
            // return Object.assign(state,{value:state.value + 1});
            return {...state,...{value:state.value+1}}
        case DECREMENT:
            // return state.value - 1;
            // return Object.assign(state,{value:state.value - 1});
            return {...state,...{value:state.value-1}}
        default:
            return state
    }
}
