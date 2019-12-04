# react 元素


## 展示一个元素
> 元素最重要的属性是 type
> 另一个比较特殊的属性是 children，它是可选的，用于表示元素的直接后代

```js
{
  type: Title,
  props: {
  color: 'red',
  children: 'Hello, Title!'
  }
} 
```

## type完成组件的嵌套
```js
{
  type: Title,
  props: {
    color: 'red',
    children: {
      type: 'h1',
      props: {
        children: 'Hello, H1!'
      }
    }
  }
} 
```

## 关于type
- 如果是字符串，那表示标签
- 如果是函数，则表示是组件

## children
- 循环嵌套完成逻辑
