import * as React from 'react';
import {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {CHANGE_VALUE} from "../../redux/test/type";
import {decrement, handleChange, increment} from "../../redux/test/actions";
import Msg from "./components/Msg";
import {ApiDataOne1Fn} from "./ceshi.method";
import {Color} from "../../utils/enumUtils";
import Greeter from "./components/Greeter";

// import { decrement, increment } from '../store/actions';
// import { StoreState } from '../types';


// 创建类型接口
export interface IProps {
    data: {
        value: number
    },
    // onIncrement: () => void,
    // onDecrement: () => void
    // handleChange: (a: any) => void
    dispatch: Dispatch;
}

// 使用接口代替 PropTypes 进行类型校验
class Ceshi extends React.PureComponent<IProps, any> {
    Greeter: any

    constructor(props: any) {
        super(props);
        this.state = {};
        this.Greeter = new Greeter(1)
        console.log(this.Greeter.state, '1111111');
    }

    componentDidMount() {
        console.log(this.props, '1111111') // 这里的prop是拿不到dispatch函数，因为组合高阶函数的时候做了处理，没有传入dispatch，只有{value: 0, onDecrement: ƒ, onIncrement: ƒ}
        // let data = testApi()
        // let params = testApi({})
        // let data  = $http(params);
        let data = ApiDataOne1Fn();
        console.log(data, '3336669996633');
    }

    handelChange = (event: ChangeEvent<HTMLInputElement>) => {
        // this.props.handleChange({type: CHANGE_VALUE, value: event.target.value})
        this.props.dispatch(handleChange({type: CHANGE_VALUE, value: event.target.value}))
    };
    Add = () => {
        console.log('aaa');
        this.Greeter.greet();
    };
    onIncrement=()=>{
        this.props.dispatch(decrement())
    }
    onDecrement=()=>{
        this.props.dispatch(increment())
    }

    public render() {
        console.log(this.props, '1111111')
        // const {data, onIncrement, onDecrement} = this.props;
        const {data} = this.props;
        console.log(data, '[][]');
        console.log(this.Greeter.greeting);
        return (
            <div>
                {/*Clicked: { data.value } times*/}
                <Msg value={data.value}/>
                {/*枚举类型*/}
                {Color.Red}
                {Color.two}
                {Color.day}
                {Color[data.value]}
                <div>
                    <button onClick={this.Add} style={{marginBottom: 20}}> asdaasd</button>
                    {this.Greeter.greeting}
                </div>
                <input type="text" value={data.value} onChange={this.handelChange}/>
                <button onClick={this.onIncrement} style={{marginRight: 20}}> 加</button>
                <button onClick={this.onDecrement}> 减</button>
            </div>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
// const mapStateToProps = (state: any) => ({
//     value: state
// });
const mapStateToProps = (state: any) => {
    console.log(state.testFn, '[[[[[[[[[[*************[[[[[[')
    return {
        data: state.testFn
    }
};
// // 将 对应action 插入到组件的 props 中
/**
 *
 * 根据http://redux.js.org/docs/FAQ.html#react-props-dispatch上的Redux常见问题解答问题，
 * this.props.dispatch如果不提供自己的 mapDispatchToProps功能，则默认为可用。
 * 如果你这样做提供一个mapDispatchToProps功能，你负责返回一个名为道具dispatch自己。或者，
 * 可以使用Redux的bindActionCreators实用程序确保动作创建者已预先绑定，并且不必担心this.props.dispatch在组件中使用。
 * 一句话  mapDispatchToProps   this.props.dispatch 二选一
 */
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onDecrement: () => dispatch(decrement()),
//     onIncrement: () => dispatch(increment()),
//     handleChange: (value: any) => dispatch(handleChange(value))
// });
// 使用 connect 高阶组件对 Ceshi 进行包裹
export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Ceshi);