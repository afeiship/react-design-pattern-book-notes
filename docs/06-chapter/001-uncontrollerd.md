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
