# spread props

- 在 DOM 元素上展开 props 对象


## 不好的做法
```js
const Spread = props => <div {...props} />
```

## 优化的做法
```js
const Spread = props => <div {...props.domProps} /
```
