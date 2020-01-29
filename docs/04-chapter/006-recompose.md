# recompose
- https://github.com/acdlite/recompose


~~~
A Note from the Author (acdlite, Oct 25 2018):
Hi! I created Recompose about three years ago. About a year after that, I joined the React team. Today, we announced a proposal for Hooks. Hooks solves all the problems I attempted to address with Recompose three years ago, and more on top of that. I will be discontinuing active maintenance of this package (excluding perhaps bugfixes or patches for compatibility with future React releases), and recommending that people use Hooks instead. Your existing code with Recompose will still work, just don't expect any new features. Thank you so, so much to @wuct and @istarkov for their heroic work maintaining Recompose over the last few years.

Read more discussion about this decision here
~~~


```js
const enhance = compose(
 flattenProp('user'),
 renameProp('username', 'name')
);

const EnhancedProfile = enhance(Profile);
```
