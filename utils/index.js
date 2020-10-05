export function selectText(element) {
    var text = document.getElementById(element);
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        /*if(selection.setBaseAndExtent){
            selection.setBaseAndExtent(text, 0, text, 1);
        }*/
    } else {
        alert("none");
    }
}

export const txt = "## 微信公众号格式化工具\n\n> 使用微信公众号编辑器有一个十分头疼的问题——粘贴出来的代码，格式错乱，而且特别丑。这块编辑器能够解决这个问题。\n\n**在这里粘贴您的Markdown文档，点击“预览”按钮转换为HTML格式。** \n\n## 我的公众号\n\n![微信公众号](http://blog.didispace.com/css/images/weixin.jpg)\n\n## Markdown基础语法\n\n下面是Markdown的常用语法示例，可供参考\n\n### 代码示例\n\n```javascript\nvar OnlineMarkdown = {\n  init: function() {\n    var self = this;\n    self.load().then(function() {\n      self.start()\n    }).fail(function(){\n      self.start();\n    });\n  },\n  start: function() {\n    this.updateOutput();\n  },\n  load: function() {\n    return $.ajax({\n      type: 'GET',\n      url: params.path || './demo.md',\n      dateType: 'text',\n      timeout: 2000\n    }).then(function(data) {\n      $('#input').val(data);\n    });\n  },\n  updateOutput: function () {\n    var val = this.converter.makeHtml($('#input').val());\n    $('#output .wrapper').html(val);\n    PR.prettyPrint();\n  }\n};\n\nOnlineMarkdown.init();\n```\n---\n\n上面是 `JavaScript`，下面是 `php`：\n\n```php\necho 'hello,world'\n```\n\n### 表格示例\n\n| 品类 | 个数 | 备注 |\n|-----|-----|------|\n| 苹果 | 1   | nice |\n| 橘子 | 2   | job |\n\n\n\n---\n\n以上是用的比较多的，还装了几十个使用频度比较低的插件，主要包括 Snippet 和文件高亮配置，可以在这里查看：<https://gist.github.com/barretlee/a5170eb6ca1805f66687063d2e3a4983>，你也可以通过 `Settings Sync` 将这个配置下载下来，id 就是后面半截：`a5170eb6ca1805f66687063d2e3a4983`。\n\n### 在命令行打开 VSC\n\n在安装好 VSC 后，直接配置 `.bash_profile` 或者 `.zshrc` 文件：\n\n```bash\nalias vsc='/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code';\nVSC_BIN='/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin';\nPATH=$VSC_BIN:$PATH;\nexport PATH;\n```\n\n然后让配置生效，在控制台执行：\n\n```bash\n# 如果没有安装 zsh，可能是 ~/.bash_profile\nsource ~/.zshrc \n```\n\n这个时候就可以在全局打开了：\n\n```bash\n# -a 的意思是不要新开窗口，在当前已经打开的 vsc 中打开文件\nvsc path/to/file.ext -a \n```\n\n有同学提到，VSC 的面板上搜索 `install` 就可以在命令行安装 `code` 这个命令了，不过我更喜欢使用 `vsc` 来打开文件，这也算是折腾吧 ；）\n"