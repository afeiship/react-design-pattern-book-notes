# createClass


```js
// 经测试，新版本里这个方法好像已经没有了。
// create-react-class,单独用这个包就可以了。
React.createClass({
  render() {
    return React.createElement('button', {
      className: 'btn'
    }, 'I am a button');
  }
})
```
