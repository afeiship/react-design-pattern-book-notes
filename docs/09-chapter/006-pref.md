# Perf

```js
componentWillUpdate() {
  Perf.start()
}
componentDidUpdate() {
  Perf.stop()
  Perf.printOperations()
} 
```

## chrome extension
```conf
最好的方案应该是不需要修改代码就能监控组件性能，为了实现这一点，可以使用 Chrome
的 chrome-react-perf 扩展
```

## resources
- https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm
