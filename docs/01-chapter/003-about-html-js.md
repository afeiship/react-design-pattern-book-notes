# 关于 html/js


## 以前的最佳实践
过去的 20 年里，我们学到了十分重要的关注点分离原则，并习惯性地将其理解为从模板中
分离逻辑。我们的目标始终是将 JavaScript 和 HTML 写入不同文件。

## html/js 不分家
问题在于，这种形式的分离大多数情况下只是一种假象。真相是，无论 JavaScript 和 HTML
写在什么地方，它们都是紧密耦合的。


## 摘自 Mustache 官网
```html
{{#items}}
  {{#first}}
  <li><strong>{{name}}</strong></li>
  {{/first}}

  {{#link}}
  <li><a href="{{url}}">{{name}}</a></li>
  {{/link}}
{{/items}} 
```

## template系统的问题
1. 实际上，模板系统及其领域专用语言（domain-specific language，DSL）提供了一个功能子
集，它们`试图提供一门真正编程语言的功能，而又不用像语言那样完备`。
2. 另一方面，JavaScript 操作模板渲染出的 DOM 元素来更新 UI，即使它们是从独立文件中加
载的。
3. 样式也存在同样的问题：它们定义在不同的文件中，但模板引用了样式文件，而且 CSS 选
择器也遵循了文档标记结构，因此，几乎不可能在不影响其他文件的前提下修改某个文件。这就
是耦合的定义。

## React的做法
1. 将模板放到其所属位置，即与逻辑在一起。React 这么做的理由在于，它建议你通过编写名为组件的小型代码块来组织应用。
2. 开发人员才能决定如何划分应用的界限

```js
render() {
  return (
    <button style={{ color: 'red' }} onClick={this.handleClick}>
      Click me!
    </button>
  )
} 
```

