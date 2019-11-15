import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changeMsg} from "../../redux/home/actions";
import {HomeState} from "../../redux/home/type";

interface IHomeProps extends HomeState {
    data:HomeState
    changeMsg: (a: HomeState) => void
}

class Home extends React.PureComponent<IHomeProps, any> {

    btnClick = ()=>{
        this.props.changeMsg({msg: "a", list: []})
    };
    render() {
        const {data} = this.props
        return (
            <div>
                {data.msg}
                <button onClick={this.btnClick}>点击修改</button>
            </div>
        )
    }

};

const mapStateToProps = (state: any) => {
    // console.log(state,'111');
    return {
        data: state.HomeFn
    }
};
// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeMsg: (a: HomeState) => dispatch(changeMsg(a)),
});
// 使用 connect 高阶组件对 Ceshi 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Home);
