// 定义 State 结构类型
export type StoreState = number;

export interface TestState {
    value?:number|undefined|string
}
// 定义增加 state 类型常量
export const INCREMENT = "INCREMENT";
export type INCREMENT_TYPE = typeof INCREMENT;

// 定义减少 state 类型常量
export const DECREMENT = "DECREMENT";
export type DECREMENT_TYPE = typeof DECREMENT;

export const CHANGE_VALUE = "CHANGE_VALUE"


