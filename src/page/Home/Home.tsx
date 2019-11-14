import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changeMsg} from "../../redux/home/actions";
import {HomeState} from "../../redux/home/type";

interface IHomeProps extends HomeState{
    changeMsg:(a:HomeState)=>void
}
class Home extends React.PureComponent<IHomeProps, any> {

    render() {
        return (
            <div>
                Home
                {this.props.msg}
                <button onClick={()=>this.props.changeMsg}>点击修改</button>
            </div>
        )
    }

};

const mapStateToProps = (state: HomeState) => ({
    value: state.msg
});
// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeMsg: (a:HomeState) => dispatch(changeMsg({msg:"a",list:[]})),
});
// 使用 connect 高阶组件对 Ceshi 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Home);
