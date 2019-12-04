# jsx vs html
> JSX 与 HTML 的区别

## 属性
1. 有些属性无法使用。(js保留字相关)
   1. className -> class
   2. htmlFor -> for

## 样式
非常明显的区别之一就是样式属性的工作原理。
与 HTML 不同，样式属性期望传入 JavaScript 对象，而不是 CSS 字符串，而且样式名的写法
为驼峰式命名法：
```jsx
<div style={{ backgroundColor: 'red' }} /> 
```

## 根元素
> 之前会是加div 强制为根元素的
> 后面有 fragment 的出现，解决了这个问题
- https://github.com/reactjs/core-notes/blob/master/2016-07/july-07.md

## 空格
```html
<div>
 <span>foo</span>
 bar
 <span>baz</span>
</div> 
```

- html 解释结果
> 浏览器解析 HTML 时，以上代码会显示 foo bar baz，这与我们的预想相同
- 而 JSX `foobarbaz`

```jsx
// 此方案解决这个问题
<div>
 <span>foo</span>
 {' '}
 bar
 {' '}
 <span>baz</span>
</div> 
```



##  布尔值属性
> 因为 react 组件有默认值；所以这里推荐组件的 bool 默认值都给 false
开始真正学习在 JSX 中定义布尔值属性前，还需要了解一些基础知识。如果设置某个属性却
没有赋值，那么 JSX 会默认其值是 true，这种行为类似 HTML 的 disabled 属性。
这意味着如果要将属性值设置为 false，则需要显式地声明。

<button disabled />
React.createElement("button", { disabled: true });


以下是另一个示例：
<button disabled={false} />
React.createElement("button", { disabled: false });

这一开始会让人感到疑惑，因为我们认为遗漏属性值应该为 false，而实际并非如此。
在使用 React 时，我们应当始终显式地声明，以避免发生混淆。





