## 在线md转微信公众号工具

![image.png](https://cdn.nlark.com/yuque/0/2020/png/276215/1602056479155-71184f96-f85e-4c03-9973-d7c4d865edfb.png#align=left&display=inline&height=536&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1072&originWidth=2788&size=279737&status=done&style=none&width=1394)

## 项目运行

```bash
# yarn install && yarn build && yarn start
```

1. 整体技术栈使用了nextjs，ui组件使用了antd
2. markdown编辑区域使用了[simplemde](https://github.com/sparksuite/simplemde-markdown-editor)
3. md格式解析使用了 [marked](https://github.com/markedjs/marked)
4. 代码高亮一开始是使用了highlightjs但是后面发现[prismjs](https://github.com/PrismJS/prism),优点是体积小

## 我的公众号的文章

![WechatIMG14.jpeg](https://cdn.nlark.com/yuque/0/2020/jpeg/276215/1602055084542-144d327b-5f73-4517-b816-7a87ed31ad3b.jpeg#align=left&display=inline&height=350&margin=%5Bobject%20Object%5D&name=WechatIMG14.jpeg&originHeight=776&originWidth=748&size=44892&status=done&style=none&width=337)

遇到的问题:

1. 当每次在md区域输入的时候都会重新出发md格式的转化，如果文章太长，会导致卡顿 我使用了`webWroker` 来解决，利用Worker开启一个线程去执行,避免主线程的卡顿。
2. 在转换的时候发现有个问题就是代码的换行问题，在格式转换后，复制到微信公众号会发现不会换行，在我理解中，微信公众号应该是把`\n`过滤了导致了换行失败，那么我们需要在marked的工具转换中使用正则去替换`\n` 为`<br/>` 这样就能解决。
3. 需要注意`pre`和`code`标签的类名和主题类名的匹配，有时候会需要正则去配合。


