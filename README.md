# 一个weex demo项目
动工中.....

## 快速开始

``` bash
$ cd my-project && npm i && npm start
```

## 命令解释
```
  npm start
  启动开发服务器，以便在浏览器上预览 weex 页面
  还可以使用 weex playground 扫描二维码，真机预览weex页面

  npm run dev
  在监视模式下打开代码编译任务

  npm run build
  将 pages 下每个页面打包输出到 dist 目录

  npm run build:prod
  将 pages 下每个页面打包压缩输出到 dist 目录

  npm run test
  启动测试运行程序
```

## 如何使用 css 预编译 less/sass/pug

用 `sass` 举例:

```
$ npm i node-sass sass-loader --save
```

那么，你只需要将 `style` 标签改为： `<style lang="sass"><style>`.

## 如何创建新页面

如要新建 detail 页面，那么在 pages 下新建 detail 文件夹，再新建  entry.vue 为入口文件即可

## Weex模板工程

本模板工程包含了我们建议的Weex项目最佳实践。包含以下内容：

【代码目录结构】

|---src
   |---components
      |---foo.vue
   |---pages
      |---index
         |---bar.vue
         |---entry.vue   ##页面的主Vue文件，默认主入口Vue的名称是entry.vue，可以在configs/config.js中修改
      |---detail
         |---entry.vue
      |---star
         |---entry.vue
   |---utils
      |---index.js

【entry.js】默认的入口js，在webpack过程中会动态替换依赖的vue文件。

【index.html】预览和Weex页面降级时用到的H5容器

###备注：
weex中1rem = 75px
项目中的eslint我已经关闭了，打开的话去config/config.js中将useEslint改为true，同时将webpack.common.conf.js中的createLintingRule方法解开即可。