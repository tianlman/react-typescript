export interface IRouter {
    component: any,
    path: string | undefined,
    title: string,
}

export interface IMapModelNameToPath {
    path: string,
    modelName: string,
    title: string,
}

export interface IMenuRouterChildren {
    title: string,
    path: string
    key: string,
}

export interface IMenuRouter {
    icon: string,
    title: string,
    fullTitle: string,
    key: string,
    path?:string
    children: IMenuRouterChildren[],
}

const menuRouter: IMenuRouter[] = [
    {
        title: '首页',
        icon: 'inbox',
        fullTitle: '首页',
        key: '首页',
        children: [
            {
                title: 'Home',
                key: 'Home',
                path: '/Home/Home',
            },
            {
                title: 'Detail',
                key: 'Detail',
                path: '/Home/Detail',
            },
        ]
    },
    {
        title: '测试',
        icon: 'pie-chart',
        fullTitle: '测试',
        key: '测试',
        path: '/Home/Test',
        children: [

        ]
    },

];
export default menuRouter;
