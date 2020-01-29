# sub compoent
React 社区目前对一种名为函数子组件的模式达成了共识。

```js
const FunctionAsChild = ({ children }) => children()
FunctionAsChild.propTypes = {
 children: React.PropTypes.func.isRequired,
} 

<FunctionAsChild>
 {() => <div>Hello, World!</div>}
</FunctionAsChild>
```


## 原理
原理很简单：父组件的渲染方法触发了子函数，返回了 div 标签包裹的 Hello, World!文本，最后显示在屏幕上。


## 函数子组件
<Fetch url="...">
 {data => <List data={data} />}
</Fetch>

## 函数子组件
这使得函数子组件方案更加灵活。
最后，封装器的可复用程度很高，因为它不关心子组件要接收什么，只期望传入一个函数。
由于这一点，按函数子组件模式编写的组件也可以用于应用的不同部分，托管各种各样的子
组件。
