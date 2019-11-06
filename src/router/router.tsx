import React from 'react'
import Loadable from 'react-loadable'
import {Redirect} from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout";

interface IRouter {
    path:string
    exact?:boolean
    title?:string
    component:any
}
//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。
// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable
let loadable = (filename: any) => {
    return Loadable({
        loader: () => import(`@/page/${filename}/${filename}`),
        loading: () => null
    })
};
let loadable2 = (filename: any) =>
    Loadable({
        loader: () => import(`@/${filename}/${filename}`),
        loading: () => null
    });
const rootRouters:IRouter[] = [
    {
        //根路由匹配
        path: '/',
        exact: true,
        component: () => <Redirect to='Home'/>
    },
    {
        // 首页
        path: '/Home',
        component: loadable2('PageLayout')
        // component: Loadable({
        //     loader: () => import('@/PageLayout/PageLayout'),
        //     loading: () => null
        // })
    },
    {
        // Page404 匹配
        path: '*',
        component: loadable('Page404')
    }
];


//路由配置对象
const routers: IRouter[]= [
    {
        path: '/Home/Ceshi',
        exact: true,
        title:'测试',
        component: loadable('Ceshi')
    },
    {
        path: '/Home/Detail',
        title:'测试',
        component: loadable('Detail')
    },
    {
        path: '/Home/Home',
        title:'测试',
        component: loadable('Home')
    },
];

export  {routers, rootRouters};
