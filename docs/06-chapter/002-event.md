# event

## 合成事件(syntheticEvent)
React 引入了合成事件的概念。合成事件对象封装了浏览器提供的原生
事件对象，它在任何浏览器中都具有相同属性
1. 事件代理
2. 统一事件对象
3. 用完即销毁
4. 合成事件会被回收，并且存在唯一的全局处理器。
5. React 在合成事件中提供了 persist 方法，调用它就能持久保存事件，以便稍后取用

## 事件机制原理
React 实际做的是在根元素上添加单个事件处理器，由于事件冒泡机制，这个处理器会监听
所有事件。当浏览器触发我们想要的事件时，React 会代表相应组件调用处理器。这个技巧称作
事件代理，可以优化内存和速度。

```js
console.log(syntheticEvent instanceof MouseEvent)   // false
console.log(syntheticEvent.nativeEvent instanceof MouseEvent)     // true
```

## 约定
为了给某个节点添加事件监听器，并在触发事件时取得事件对象，我们可以用一个简单的
常例来回想一下为 DOM 节点添加事件的方式。实际上，我们用 `on` 加上驼峰式的事件名（如
onKeyDown）来定义事件发生时所要触发的回调。命名事件处理器函数的最流行做法就是事件名
前加上 `handle` 前缀（如 handleKeyDown）。


## resources
- https://reactpatterns.com/
