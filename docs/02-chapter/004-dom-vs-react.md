# dom vs react


## 标签(type)
- 有了 JSX 后，我们既可以创建 HTML 元素
- 也可以创建 React 元素；唯一的区别在于`它们是否以大写字母开头`。

例如，渲染 HTML 按钮元素时使用<button />
而渲染 Button 组件时使用<Button />。
前一个按钮会转译为以下代码：
```js
React.createELement('button')
```

后一个按钮会转译为以下代码：
```js
React.createElement(Button) 
```

## attention
JSX 支持自闭的标签，这样可以很好地保持代码简洁，无须重复编写不必要的标签


## 属性(props)
```jsx
<img src="https://facebook.github.io/react/img/logo.svg" alt="React.js" />
```

> JavaScript 的等效写法如下所示：

```js
React.createElement("img", {
 src: "https://facebook.github.io/react/img/logo.svg",
 alt: "React.js"
}); 
```

## 子元素 (children)
> 以下是一个简单的文本链接示例：
```jsx
<a href="https://facebook.github.io/react/">Click me!</a>
```

> 它会转译为以下代码：
```js
React.createElement(
 "a",
 { href: "https://facebook.github.io/react/" },
 "Click me!"
); 
```

## JSX 的妙处
JSX 的妙处在于没有限制只能将元素嵌套为其他元素的子元素，还可以使用函数或变量这样
的 JavaScript 表达式。
