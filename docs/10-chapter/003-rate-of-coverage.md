# rate of coverage
> 代码覆盖率工具.


## istanbul
> 它用到了 Istanbul，这是最流行的代码覆盖率库之一，如果使用的是 Mocha，那么你需要自己手动安装这个库。

## jest - coverage
运行 Jest 的代码覆盖率功能非常简单：只需要在 npm 脚本的 Jest 命令后面加上- coverage
标记即可。你也可以在 package.json 中为 Jest 创建配置，并将 collectCoverage 选项设为 true：
"jest": {
 "collectCoverage": true
} 

