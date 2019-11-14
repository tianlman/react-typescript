import {DECREMENT, INCREMENT} from './type'

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
// export type ModifyAction = IINCREMENTAction | IDECREMENTAction;
//

// 增加 state 次数的方法

export function increment(){
    console.log('++++++++++++++++');
    return {
        type: INCREMENT,
    };
}

// 减少 state 次数的方法
export function decrement() {
    console.log('----------------');
    return {
        type: DECREMENT,
    };
}

// // 减少 state 次数的方法
// const decrement = (): IDECREMENTAction => ({
//     type: DECREMENT
// });
