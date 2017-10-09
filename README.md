## weex-vue-router页面跳转

### 下载

```
git clone https://github.com/heuuLZP/weex-vue-router.git
```

### web端

编译

```
npm run build
```

启动服务

```
npm run serve
```

监听变化

```
npm run dev
```



### 注意

- 在chrome浏览器打开后，需要设置成mobile模式，否则按钮点击无效。(官方demo也有此问题，为止bug)
- 暂不考虑如何打包问题

### 文件目录

```
src
├── APP.vue               ## 根组件
├── main.js               ## 入口文件
├── page
│   ├── AboutView.vue     ## about页
│   └── HomeView.vue      ## home页
└── router.js             ## 路由
```



## demo 

home页

![home](/demo/home.jpeg)

about页

![about](/demo/about.jpeg)



