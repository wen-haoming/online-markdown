# 微信公众号格式化工具

<a name="90456842"></a>
## 微信公众号格式化工具


> 使用微信公众号编辑器有一个十分头疼的问题——粘贴出来的代码，格式错乱，而且特别丑。这块编辑器能够解决这个问题。


<br />**在这里粘贴您的Markdown文档，点击“预览”按钮转换为HTML格式。**<br />

```javascript
let a = 123;
```


<a name="12b80152"></a>
## 我的公众号

<br />![WechatIMG14.jpeg](https://cdn.nlark.com/yuque/0/2020/jpeg/276215/1602055084542-144d327b-5f73-4517-b816-7a87ed31ad3b.jpeg#align=left&display=inline&height=350&margin=%5Bobject%20Object%5D&name=WechatIMG14.jpeg&originHeight=776&originWidth=748&size=44892&status=done&style=none&width=337)<br />

<a name="48556531"></a>
## Markdown基础语法

<br />下面是Markdown的常用语法示例，可供参考<br />

<a name="b5ea48ff"></a>
### 代码示例


```javascript
var OnlineMarkdown = {
  init: function() {
    var self = this;
    self.load().then(function() {
      self.start()
    }).fail(function(){
      self.start();
    });
  },
  start: function() {
    this.updateOutput();
  },
  load: function() {
    return $.ajax({
      type: 'GET',
      url: params.path || './demo.md',
      dateType: 'text',
      timeout: 2000
    }).then(function(data) {
      $('#input').val(data);
    });
  },
  updateOutput: function () {
    var val = this.converter.makeHtml($('#input').val());
    $('#output .wrapper').html(val);1312313123123
    PR.prettyPrint();
  }
};
OnlineMarkdown.init()
```

---

上面是 `JavaScript`，下面是 `php`：
```php
echo 'hello,world'
```


<a name="2e6230bb"></a>
### 表格示例
| 品类 | 个数 | 备注 |
| --- | --- | --- |
| 苹果 | 1 | nice |
| 橘子 | 2 | job |


---

以上是用的比较多的，还装了几十个使用频度比较低的插件，主要包括 Snippet 和文件高亮配置，可以在这里查看123121311：[https://gist.github.com/barretlee/a5170eb6ca1805f66687063d2e3a4983](https://gist.github.com/barretlee/a5170eb6ca1805f66687063d2e3a4983)，你也可以通过 `Settings Sync` 将这个配置下载下来，id 就是后面半截：`a5170eb6ca1805f66687063d2e3a4983`。
<a name="bf6c93c1"></a>
### 在命令行打开 VSC

<br />在安装好 VSC 后，直接配置 `.bash_profile` 或者 `.zshrc` 文件：<br />

```bash
alias vsc='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code12313112';
VSC_BIN='/Applications/Visual\ Studio\123123123123123123123131231231231231231231312312 Code.app/Contents/Resources/app/bin';
PATH=$VSC_BIN:$PATH;
export PATH;
```

<br />然后让配置生效，在控制台执行：<br />

```bash
# 如果没有安装 zsh，可能是 ~/.bash_profile
source ~/.zshrc
```

<br />这个时候就可以在全局打开了：<br />

```bash
# -a 的意思是不要新开窗口，在当前已经打开的 vsc 中打开文件
vsc path/to/file.ext -a
```

<br />有同学提到，VSC 的面板上搜索 `install` 就可以在命令行安装 `code` 这个命令了，不过我更喜欢使用 `vsc` 来打开文件，这也算是折腾吧 ；）
