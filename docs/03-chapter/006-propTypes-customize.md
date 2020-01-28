# customize propTypes

```js
user: React.PropTypes.shape({
 age: (props, propName) => {
  if (!(props[propName] > 0 && props[propName] < 100)) {
    return new Error(`${propName} must be between 1 and 99`)
  }
  return null
 }
}) 
```
