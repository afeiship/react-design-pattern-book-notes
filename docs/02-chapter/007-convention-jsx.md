# convention
> jsx 有一些最佳实践 与 约定

1. 多行书写
```jsx
<div>
  <Header />
  <Main />
</div>
```

2. 多属性竖排
```jsx
<button
  foo="bar"
  veryLongPropertyName="baz"
  onSomething={this.handleSomething}
/>
```

3. 条件语句
```jsx
// if
<div>
  {isLoggedIn && <LoginButton />}
</div> 

// if...else
<div>
 {isLoggedIn ? <LogoutButton /> : <LoginButton />}
</div>
```

4. 更复杂的情况
```jsx
// bad
<div>
 {dataIsReady && (isAdmin || userHasPermissions) && <SecretData /> }
</div> 
```

```js
// good
canShowSecretData() {
  const { dataIsReady, isAdmin, userHasPermissions } = this.props
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretData() && <SecretData />}
</div> 

// better
get canShowSecretData() {
 const { dataIsReady, isAdmin, userHasPermissions } = this.props
 return dataIsReady && (isAdmin || userHasPermissions)
}

<div>
 {this.canShowSecretData && <SecretData />}
</div> 
```

4. 循环
```jsx
<ul>
  {users.map(user =><li>{user.name}</li>)}
</ul> 
```

5. 控制语句
> 貌似不推荐。
总的来说，我们的目的是从组件中移除所有逻辑，尤其是渲染方法中的。但有时需要根据应
用的状态来显示或隐藏元素，经常还需要遍历集合与数组。

~~~
# 需要专门的报错工具
eslintplugin-jsx-control-statements
~~~

```jsx
<Choose>
 <When condition={...}>
 <span>if</span>
 </When>
 <When condition={...}>
 <span>else if</span>
 </When>
 <Otherwise>
 <span>else</span>
 </Otherwise>
</Choose> 
```

6. 次级渲染
> 这种方案并不总是可以当作最佳实践，因为显然拆分组件的做法更好。有时这样做只是为了 保持渲染方法简洁。

```jsx
renderUserMenu() {
 // JSX 用于用户菜单
}
renderAdminMenu() {
 // JSX 用于管理员菜单
}
render() {
  return (
    <div>
      <h1>Welcome back!</h1>
      {this.userExists && this.renderUserMenu()}
      {this.userIsAdmin && this.renderAdminMenu()}
    </div>
  )
} 
```



## 相关工具(灵感hoc)
- [render-if](https://github.com/ajwhite/render-if)
- [render-only-if](https://github.com/MicheleBertoli/react-only-if)
- [jsx-control-statements](https://github.com/AlexGilleran/jsx-control-statements)
- eslintplugin-jsx-control-statements



