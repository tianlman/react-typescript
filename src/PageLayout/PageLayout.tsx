import React from "react";
import {Route, Switch, withRouter} from "react-router";
import {Icon, Layout, Menu} from "antd";
import {routers} from "../router/router";
import menuRouter from "../router/menuRouter";
import {ClickParam} from "antd/lib/menu";

const SubMenu = Menu.SubMenu
const {Header, Content, Footer, Sider} = Layout;
const Content2 = withRouter(({history, location, match}) => {
    console.log(JSON.stringify(match));
    return (
        <div className='list'>
            <p onClick={() => history.push(`${match.path}/home`)}>0、React hash 模式路由实现的手段</p>
            <p onClick={() => history.push(`${match.path}/detail`)}>0、React hash 模式路由实现的手段</p>
        </div>
    )
});

class PageLayout extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    onClick=(param: ClickParam,path:string|undefined)=>{
        console.log(param,path,'[][]');
        // history.push(`${match.path}/home`)}
        this.props.history.push({
            pathname: path
        });
    }
    render() {
        console.log(this.props, 'routersrouters');
        return (
            <Layout>
                <Sider
                    style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" >
                        {
                            menuRouter.map((item) => {
                                return (
                                    item.children.length > 0 ?
                                        <SubMenu key={item.key} style={{textAlign: 'left'}} title={
                                            <span>
                                                <Icon type={item.icon}/>
                                                <span>{item.title}</span>
                                            </span>
                                        }>
                                            {
                                                item.children.map((it) => {
                                                    return (
                                                        <Menu.Item key={it.key} onClick={(param: ClickParam)=>this.onClick(param,it.path)}>
                                                            {it.title}</Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                        : (
                                            <Menu.Item key={item.key} style={{textAlign: 'left'}} onClick={(param: ClickParam)=>this.onClick(param,item.path)}>
                                                <Icon type={item.icon}/>
                                                <span>{item.title}</span>
                                            </Menu.Item>
                                        )
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    {/*<Header style={{background: '#fff', padding: 0}}/>*/}
                    {/*<Content style={{margin: '24px 16px 0', overflow: 'initial'}}>*/}
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            {/*<TransitionGroup>*/}
                            {/*    <CSSTransition key={this.props.location.key} classNames='fade' timeout={300}>*/}
                                    <Switch location={this.props.location}>
                                        {
                                            routers.map((route, index) => {
                                                console.log(route,']]]]]]]]]]]]]]]]]]]]]');
                                                return (
                                                    <Route
                                                        key={index}
                                                        exact
                                                        path={route.path}
                                                        component={route.component}
                                                    />
                                                )
                                            })
                                        }
                                    </Switch>
                            {/*    </CSSTransition>*/}
                            {/*</TransitionGroup>*/}
                        </div>
                    {/*</Content>*/}
                    {/*<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>*/}
                </Layout>
            </Layout>
        );
    }

}

// export default hot(module)(PageLayout)

export default PageLayout