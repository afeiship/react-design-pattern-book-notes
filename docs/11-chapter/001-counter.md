# counter


```js
class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
      {this.state.count}
      <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
```

## 两个主要错误是：
 我们违背了单一数据源原则；
 传给组件的 count 属性发生变化时，状态不会相应地更新。
~~~
那么我们会发现 Props 和 State 保存的值相同
~~~

## 改进
这种情况下，最好阐明这种做法的用意，并为属性起一个能清楚表达含义的名称，如
initialCount。举例来说，按以下方式修改 Counter 组件的 constructor 方法

上述代码清晰地表明了父组件只能通过一种方式初始化计数器，以后为 initialCount 属
性赋任何值都会被忽略。

```js
<Counter initialCount={1} /> 
```


## 修改状态
setState 方法可以告诉库我们
想要如何修改状态。一旦状态完成更新，React 会重新渲染组件，我们可以通过 this.state 属
性访问新状态。就是这么简单

## 如果不用 杉State的后果
首先，如果不通过 setState 修改状态，则会出现两种糟糕的情况：
 状态改变不会触发组件重渲染；
 以后无论何时调用 setState，之前修改的状态都会渲染到页面上。


