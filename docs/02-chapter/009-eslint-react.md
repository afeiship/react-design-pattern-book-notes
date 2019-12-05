# eslint-plugin-react

## eslint 默认是支持 jsx的
ESLint 不需要任何插件就能解析 JSX（启用配置开关即可），但我们想要更多功能。例如，
我们可能会想要推行前面章节中的某项最佳实践，并使得模板在多个开发人员及团队间保持
一致。

```shell
npm install --global eslint-plugin-react
```

安装完成后，在配置文件中添加以下代码，以便 ESLint 可以使用它：
```json
{
  "plugins": [
   "react"
  ]
}
```

## eslintrc 的配置更新
在.eslintrc 文件中更新"extends"属性，如下所示
"extends": [
 "eslint:recommended",
 "plugin:react/recommended"
], 

## 测试一下这个：
```jsx
<Foo bar bar /> 
```

## rules
"rules": {
 "react/jsx-indent": [2, 2]
 "react/jsx-indent-props": [2, 2] 
} 
