/*
 * @Author:  刘俊卿
 * @Date: 2021-11-16 16:05:45
 * @Description: type: 品牌方 1 /平台管理员 2 
*/
export const menuList = {
    '1':[{
        "path": "/shopManage",
        "component": "shopManage",
        "index":'1', 
        "meta": {
          "title": "门店管理",
          "icon": "Menu",
          "role": [
            "admin"
          ]
        }
      }],
     '2':[
       {
        "path": "/brandManage",
        "component": "brandManage",
        "index":'1', 
        "meta": {
          "title": "品牌管理",
          "icon": "Menu",
          "role": [
            "admin"
          ]
        }
      },
      {
        "path": "/userManage",
        "component": "userManage",
        "index":'2', 
        "meta": {
          "title": "用户管理",
          "icon": "Menu",
        }
      },
      {
        "path": "/shopManage",
        "component": "shopManage",
        "index":'3', 
        "meta": {
          "title": "门店管理",
          "icon": "Menu",
        }
      }
    ]

  }


  // {
  //   "path": "/task",
  //   "component": "task",
  //   "index":'1',
  //   "meta": {
  //     "title": "角色管理",
  //     "icon": "Menu",
  //     "role": [
  //       "admin"
  //     ]
  //   }
  // },
  // {
  //   "path": "/user",
  //   "component": "user",
  //   "name":'user',
  //   "index":'2',
  //   "meta": {
  //     "title": "用户管理11",
  //     "icon": "Menu",
  //   },
  //   children:[
  //     {
  //       "path": "/home",
  //       "component": "home",
  //       "name":'home',
  //       "index":'2-1',
  //       "meta": {
  //         "title": "用户孩1",
  //         "icon": "Menu",
  //       }
  //     },
  //     {
  //       "path": "/home",
  //       "component": "home",
  //       "name":'home',
  //       "index":'2-2',
  //       "meta": {
  //         "title": "用户孩2",
  //         "icon": "Menu",
  //       }
  //     }
  //   ]
  // }