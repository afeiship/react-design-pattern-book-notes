# object rest/spread

展开属性操作符也是一项很重要的特性，它来源于 ECMAScript 提案中的对象剩余/展开属性
（Object Rest/Spread Properties for ECMAScript），该特性可以非常方便地为元素传递 JavaScript 对 象的全部属性。

该特性的用法如下所示：
```js
const foo = { id: 'bar' }
return <div {...foo} />
```
<!-- 以上代码的转译结果如下所示： -->

```js
var foo = { id: 'bar' };
return React.createElement('div', foo);
```
