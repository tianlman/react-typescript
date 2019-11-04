import React from 'react'
import Loadable from 'react-loadable'
import {Redirect} from "react-router-dom";
import Layout from "../Layout/Layout";

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
const rootRouters = [
    {
        //根路由匹配
        path: '/',
        exact: true,
        component: () => <Redirect to='Layout'/>
    },
    {
        // 首页
        path: '/Layout',
        component: loadable2('Layout')
        // component: Loadable({
        //     loader: () => import('@/Layout/Layout'),
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
const routers = [
    {
        path: '/Detail',
        exact: true,
        component: loadable('Detail')
    },
    {
        path: '/Home',
        component: loadable('Home')
    },
];

export  {routers, rootRouters};
