# tools
- Jest
- TestUtils
- Enzyme

## jest + enzyme
```shell
npm install --save-dev enzyme
npm install --save-dev jest
```

```js
import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './button';

// 另外要用 mount 函数测试生命周期钩子做了什么

const text = 'text';
const button = shallow(<Button text={text} />);

expect(button.type()).toBe('button');
expect(button.text()).toBe(text);

// event
const onClick = jest.fn();
const button = shallow(<Button onClick={onClick} />);
button.simulate('click');

expect(onClick).toBeCalled();


// simulate click
test('fires the onClick callback', () => {
 const onClick = jest.fn()
 const button = shallow(<Button onClick={onClick} />)
 button.simulate('click')
 expect(onClick).toBeCalled()
}) 
```
