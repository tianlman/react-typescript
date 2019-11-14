import {HOMEMSG, HomeState} from './type'
// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
// export type ModifyAction = IMsgProps

// 增加 state 次数的方法
export function changeMsg(action: HomeState) {
    return {
        type: HOMEMSG,
        payload: action
    };
}
