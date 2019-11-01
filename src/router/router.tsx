import React from 'react'
import Loadable from 'react-loadable'
import {Redirect} from "react-router-dom";

//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。
// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable
let loadable = (filename: any) => {
    // console.log(filename, `@/page/${filename}/${filename}`, '[');
    return Loadable({
        loader: () => import(`@/page/${filename}/${filename}`),
        loading: () => null
    })
};
let loadable2 = (filename: any) =>
    Loadable({
        loader: () => import(`@/page/${filename}`),
        loading: () => null
    });
const rootRouters = [
    {
        //根路由匹配
        path: '/',
        exact: true,
        component: () => <Redirect to='layout'/>
    },
    {
        // 首页
        path: 'layout',
        component: loadable2('layout')
        // component: Loadable({
        //     loader: () => import('@/layout/layout'),
        //     loading: () => null
        // })
    },
    {
        // 404 匹配
        path: '*',
        component: loadable('404')
    }
];


//路由配置对象
const routers = [
    {
        path: '/detail',
        exact: true,
        component: loadable('detail')
    },
    {
        path: '/home',
        component: loadable('home')
    },
];

export  {routers, rootRouters};
