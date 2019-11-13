import {DECREMENT, DECREMENT_TYPE, INCREMENT, INCREMENT_TYPE} from './type'

export interface IINCREMENTAction {
    type: INCREMENT_TYPE;
}

export interface IDECREMENTAction {
    type: DECREMENT_TYPE;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;


// 增加 state 次数的方法
const increment = (): IINCREMENTAction => ({
    type: INCREMENT,
});
// 减少 state 次数的方法
const decrement = (): IDECREMENTAction => ({
    type: DECREMENT
});
export {increment, decrement}
