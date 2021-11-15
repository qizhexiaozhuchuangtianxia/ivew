//遍历后台传来的路由字符串，转换为组件对象
// export function filterAsyncRouter(asyncRouterMap) { 
export function filterAsyncRouter() {
    let asyncRouterMap = asyncRoutes
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            console.log(route,route.component,'route-----');
            if (route.component === 'system') {
                route.component = 'system'
            } else {
                // console.log("load:" + loadView(route.component));
                route.component = loadView(route.component)
                // console.log("import:" + __import(route.component));
                // route.component = __import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

/* 加载路由组件，两种方式均可 */
const loadView = (view) => { // 路由懒加载
    // return (resolve) => require([`@/views/${view}`], resolve)
    return () => import('@/views/' + view)
}

const asyncRoutes = [{
    "path": "/system",
    "name": 'SystemIndex',
    "component": "system",
    "meta": {
        "title": "系统管理",
        "icon": "el-icon-setting",
        "role": [
            "admin"
        ]
    },
    "children": [{
            "path": "role",
            "component": "system/role",
            "meta": {
                "title": "角色管理",
                "icon": "el-icon-star-on",
                "role": [
                    "admin"
                ]
            }
        },
        {
            "path": "user",
            "component": "system/user",
            "meta": {
                "title": "用户管理",
                "icon": "el-icon-user-solid",
                "role": [
                    "admin"
                ]
            }
        },
        {
            "path": "menu",
            "component": "system/menu",
            "meta": {
                "title": "菜单管理",
                "icon": "el-icon-menu",
                "role": [
                    "admin"
                ]
            }
        },
        {
            "path": "trans",
            "component": "system/trans",
            "meta": {
                "title": "多系统",
                "icon": "el-icon-s-opportunity",
                "role": [
                    "admin"
                ]
            }
        },
        {
            "path": "test",
            "component": "system/home",
            "meta": {
                "title": "系统测试",
                "icon": "el-icon-success",
                "role": [
                    "admin"
                ]
            }
        }
    ]
}, ]