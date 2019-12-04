# babel
> 为了在代码中使用 JSX（及 ES2015 的特性），我们需要安装 Babel。

## jsx with babel
解决方案就是用 JSX 和 ES2015 语法编写脚本，准备发布时再将代码编译成当今主流浏览器
都已实现的 ES5 标准规范。

## babel 作用
- Babel 可以将 ES2015 的 JavaScript 代码编译成 ES5 的
- 也可以将 JSX 编译成 JavaScript 函数。

> 这个过程称为转译，因为它将源代码编译成另一份新源代码，而不是可执行文件。


<!-- babel src/02-chapter/babel-jsx.js dist/babel-jsx.js -->

## babel 基本配置/.babelrc
Babel 如此强大的原因之一在于可以灵活配置。它只是一个将源文件转译成输出文件的工具，
配置后才能使用一些转换规则

## 预设
安装完成后，在根文件夹下创建名为.babelrc 的配置文件，并写入以下代码来告诉 Babel 使
用这些预设配置。
```shell
npm i -D babel-preset-es2015
```

## 这个是按 es2015 的预设来导出
```json
{
  "presets": ["es2015"]
}
```


## 常见 preset
- babel-preset-react
- babel-preset-es2015 
