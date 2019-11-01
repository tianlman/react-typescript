import React from "react";
import {Route, Switch, withRouter} from "react-router";
import {routers} from "../router/router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { hot } from 'react-hot-loader'
const Content = withRouter(({history,location,match}) => {
    console.log(JSON.stringify(match));
    return(
        <div className='list'>
            <p onClick={() => history.push(`${match.path}/home`)}>0、React hash 模式路由实现的手段</p>
            {/*<p onClick={() => history.push(`${match.path}/view0`)}>0、React hash 模式路由实现的手段</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view1`)}>1、React Route 路由的基本配置 以及 实现路由的模糊匹配（动态路由，嵌套路由）</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view2`)}>2、React 路由参数</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view3`)}>3、路由重定向</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view4`)}>4、路由匹配404 处理</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view5`)}>5、Router 侧栏 / 页面过渡 /</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view6`)}>6、Route Render 渲染的方式，可选component、render、children</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/view7`)}>7、React Router Api</p>*/}
            {/*<p onClick={() => history.push(`${match.path}/404`)}>8、404 匹配</p>*/}
        </div>
    )
});
class Layout extends React.PureComponent<any,any>{
    constructor(props:any){
        super(props);
        this.state={

        }
    }
    render() {
        console.log(routers,'routersrouters');
        return (
            <div>
                <p>asdaaaaaaaaaaaaaaaaa</p>
                <Content/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='fade' timeout={300}>
                        <Switch location={this.props.location}>
                            {
                                routers.map((route,index) => {
                                    return(
                                        <Route
                                            key={index}
                                            exact
                                            path={`${this.props.match.path}` + route.path}
                                            component={route.component}
                                        />
                                    )
                                })
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }

}
// export default hot(module)(Layout)

export default Layout