# opmtize

```js
// 1. production
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

// 2. compress
new webpack.optimize.UglifyJsPlugin() 

// 3. lifecycle
shouldComponentUpdate() {
  return false;
}

// 4. purecomponent
// 这也是为何只应在必要时使用 PureComponent，而且只能在测试完性能后，弄清哪个组件
// 运行耗时太长后才可以使用它。
```
