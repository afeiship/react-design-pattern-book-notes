# eslint
- Douglas Crockford 开发的 JSLint（最初发布于 2002 年）使得 JavaScript 代码检查变得流行起 来。
- 后来出现了 JSHint
- 如今 ESLint 成为了 React 领域的事实标准


## 安装
首先，执行以下命令来安装 ESLint：
```shell
npm install --global eslint
```

可执行程序安装完成后，就可以用以下命令来运行它：
```shell
eslint source.js
```

输出结果会告诉我们文件中是否有错。
安装后首次运行不会看到任何报错，因为它各方面都需要配置，一开始并不包含任何默认规则。

## 配置
- 可以使用位于项目根目录的 .eslintrc 文件来配置 ESLint
- 使用 rules 属性来添加规则

```json
{
  "rules": {
    "semi": [2, "never"]
  }
} 
// 第二个参数是不能使用分号
// 如果违反，则产生 error 错误
```

## 问题严重程度的三个等级
-  off（或者 0）：禁用规则
-  warn（或者 1）：规则会产生警告
-  error（或者 2）：规则会抛出错误

## extends
```json
{
  "extends": "eslint:recommended"
} 
```


## 关于 es2015
```conf
一开始提过，我们希望用 ES2015 语法编写代码，但是以下代码会报错：
const foo = 'bar'

报错信息如下所示：
Parsing error: The keyword 'const' is reserved 
```

```json
{
  "parserOptions": {
    "ecmaVersion": 6,
  }
}
```

## 添加jsx支持
```json
{
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

## lint-stage(husky)
另一个方案是在发起 pull request 前进行代码检查，这样在同事开始审查前还有机会整理代码。



