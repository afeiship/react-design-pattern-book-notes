# key compare

然而，比较两棵元素树并非没有开销，因此 React 通过两项设定降低了其中的复杂度：
 如果两个元素的类型不同，则它们渲染的树也不同；
 开发人员可以用 key 属性标记子组件，使它们在不同渲染过程得以保留。
从开发人员的视角来看，第二点非常有趣，因为它提供了一项工具来帮助 React 更快地渲染
视图。
