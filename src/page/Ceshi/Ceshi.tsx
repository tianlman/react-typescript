import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {StoreState} from "../../redux/test/type";
import {decrement, increment} from "../../redux/test/actions";
import {ChangeEvent} from "react";

// import { decrement, increment } from '../store/actions';
// import { StoreState } from '../types';


// 创建类型接口
export interface IProps {
    data: {
        value:number
    },
    onIncrement: () => void,
    onDecrement: () => void
}

// 使用接口代替 PropTypes 进行类型校验
class Ceshi extends React.PureComponent<IProps,any> {
    // componentDidMount () {
    //     console.log(this.props,'1111111') // 这里的prop是拿不到dispatch函数，因为组合高阶函数的时候做了处理，没有传入dispatch，只有{value: 0, onDecrement: ƒ, onIncrement: ƒ}
    // }
    handelChange=(event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event);

    }
    public render() {
        console.log(this.props,'1111111')
        const { data, onIncrement, onDecrement } = this.props;
        console.log(data,'[][]');
        return (
            <p>
                Clicked: { data.value } times
                <br />
                <br />
                <input type="text" value={data.value} onChange={this.handelChange}/>
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
// const mapStateToProps = (state: any) => ({
//     value: state
// });
const  mapStateToProps = (state:any) => {
    console.log(state.testFn,'[[[[[[[[[[*************[[[[[[')
    return {
        data: state.testFn
    }
};
// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
});
// 使用 connect 高阶组件对 Ceshi 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Ceshi);