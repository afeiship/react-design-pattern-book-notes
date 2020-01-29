# uncontrol component

```js
const Uncontrolled = () => (
  <form>
    <input type="text" />
    <button>Submit</button>
  </form>
);
```


## 一个表单库
> 这个库的想法比较的好，不过，与 bootstrap 已经绑死了
> 所以，最好有一个纯 html的库可以使用

```shell
react-jsonschema-form
# 
```

```js
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' },
  },
};


const JSONSchemaForm = () => (
 <Form schema={schema} />
);
```

## resources
- https://github.com/brutusin/json-forms
- https://github.com/rjsf-team/react-jsonschema-form
