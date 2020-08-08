# html & css 概述

## 术语

术语降低沟通成本

1. web

互联网

2. w3c

万维网联盟，非盈利性的组织：w3.org

为互联网提供各种标准。

3. XML

可扩展的标记语言：extension markup language, 用于定义文档结构的。

## 什么是 HTML？

HTML 是 w3c 组织定义的语言标准，HTML 是用于描述页面结构的语言。

结构：有什么东西，改东西表示什么含义。

HTML：Hyper Text Mark Language，超文本标记语言

书写一个一级标题：

```html
<h1>这是一个一级标题</h1>
```

MDN：Mozilla Development Network Mozilla ，[开发者社区](https://developer.mozilla.org/zh-CN/)。

## 什么是 css

css 是 w3c 定义的语言标准：css 是用于描述页面展示的语言

css 决定页面的样子。

## 执行 HTML CSS

HTML、CSS ——> 浏览器内核执行 ——> 页面

浏览器：

1. shell：外壳

2. core：内核(渲染引擎、js 执行引擎)

3. 主流浏览器：
   IE：Trident
   Firefox：Gecko
   Chrome：webkit / Blink
   Safari：webkit
   Opera:Presto / Blink

# 第一个网页

## HTML 的注释格式

```
<!-- 注释文本 -->
```

## 元素 (标签 / 标记)

整体：element (元素)

元素 = 起始标记(begin tag) +
结束标记(end tag) +
元素内容(element content) +
元素属性(element attribute)

属性的分类:

- 局部属性：某些元素特有的属性
- 全局属性：所有元素通用

## 空元素

有些元素没有结束标记，这样的元素叫**空元素**

空元素两种写法： 1.直接写

```html
<meta charset="UTF-8" />
```

2.(老方法)起始标签最后加/

```html
<meta charset="UTF-8" />
```

元素之间不能相互嵌套

## 嵌套术语

- 父元素
- 子元素
- 祖先元素
- 后代元素
- 兄弟元素

## 标准的文档结构

HTML：页面、HTML 文档

1. 文档声明，告诉浏览器当前文档使用的 HTML 标准是 HTML5
   不写文档声明，将导致浏览器进入怪异渲染没收。

```html
<!DOCTYPE html>
```

2. 根元素，一个页面最多只能有一个，并且该元素是所有其他元素的父元素或者祖先元素
   HTML5 中可以不用写(不推荐)

```html
<html lang="cmn-hans"></html>
```

lang 属性：是一个全局属性，表示该元素内部使用的文字是使用哪一种自然语言书写的。
cmn-hans:中文最新写法

3. head 和 body 必须要作为 html 的子元素出现
   HTML5 中可以不用书写(不推荐)

- head
  文档头，文档头内部的内容，不会显示到页面上。

```html
<head> </head>
```

- body
  文档体，页面上所有参与显示的元素，都应该放置到文档体中。

```html
<body></body>
```

# 语义化

## 什么是语义化

1. 每一个 HTML 元素都有具体的含义

a 元素：超链接
p 元素：段落
h1 元素：一级标题

2. 所有元素与展示效果无关

元素展示到页面中的效果，是有 css 决定的。

因为浏览器带有默认的 css 样式，所以每个元素有一些默认样式。

**重要：选择什么元素，取决于内容含义，而不是显示出的效果**

## 为什么需要语义化

1. 为了搜索引擎优化(SEO)

搜索引擎：百度、搜狗、Bing、Google

每隔一段时间，搜索引擎从整个互联网中，抓取页面源代码。

2. 为了让浏览器理解网页

# 文本元素

HTML5 中支持的元素：HTML5 元素周期表

## h 元素

标题：head

h1~h6:表示一级标题至六级标题

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

## p 元素

段落，

> lorem：乱数假文，没有任何实际含义的文字

## span div 【无语义】

没有语义，仅用于设置样式，作为容器使用

> 以前：某些元素在显示时会独占一行(块级元素)，而某些元素不会(行级元素) 在 HTML5 中弃用
> 现在：“块级”类别相当于 HTML5 中的“流内容”类别，而“行级”类别相当于 HTML5 中的“措辞内容”类别

## pre 元素

预格式化文本元素

空白折叠：在源代码中的连续空白字符(空格、换行、制表)，在页面显示时，会被折叠为一个空格。

例外：在 pre 元素中的内容不会出现空白折叠。

在 pre 元素内部出现的内容，会安装源代码格式显示到页面上。

该元素通常用于在网页中显示一些代码。

pre 元素功能的本质：它有一个默认的 css 属性(white-space:pre;)

# HTML 实体

实体字符： HTML Entity

实体字符通常用于在页面中显示一些特殊符号。(https://dev.w3.org/html5/html-author/charref)

1. &单词;
2. &数字;

- 小于符号 <

```html
&lt;
```

- 大于符号 >

```html
&gt;
```

- 空格符号

```html
&nbsp;
```

- 版权符号

```html
&copy;
```

- \$符号

```html
&amp;
```

## a 元素

超链接

## href 属性

hyper reference:通常用于跳转地址

1.  普通链接 - 跳转地址
2.  锚链接 - 锚点

- 当值为 "#" 时回到顶部

3.  功能链接

- 执行 js 代码 JavaScript:js 代码
- 发送邮件 mailto:邮箱地址 要求用户计算机上安装有邮件发送软件：exchange
- 拨号 tell:电话号码 要求在移动端上或者计算机上安装有拨号软件的软件

## id 属性

id 属性：全局属性，表示元素在文档中的唯一编号

## target 属性

表示跳转窗口位置。

target 的取值:

- \_self:在当前页面窗口中打开，默认值
- \_blank:在新窗口中打开

## tittle 属性

鼠标指向时显示提示文字

# 路径写法

## 站内资源和站外资源

站内资源：当前网站的资源

站外资源：非当前网站的资源

## 绝对路径和相对路径

站外资源：绝对路径

站内资源：相对路径

1. 绝对路径的书写格式、URL 地址：

```
协议名://主机名:端口号/路径

schema://host:prot/path
```

协议名：http、https、file

主机名：域名、ip 地址

当跳转目标和当前页面的协议相同时，可以省略协议

2. 相对路径

以./表示当前资源所在的目标(可以省略)

可以../表示返回上一级目录

# 图片元素

## img 元素

imag 缩写，空元素

## src 属性

source 图片路径地址

## alt 属性：

当图片资源失效时，将使用该属性的文字替代图片

## 与 a 元素联用

```html
<a href="src">
  <img src="src" />
</a>
```

## map 元素联用

```html
<img usemap="#map" /> <map name="map"></map>
```

map：地图

map 的子元素：area(区域)

衡量坐标时，为了避免衡量无线，需要使用专业的衡量工具：
ps、pxcook

## 和 figure 元素联用

指代、定义，通常用于把图片标题、描述包裹起来

子元素：figcaption 指代东西的标题

# 多媒体元素

video 视频

audio 音频

## video

```html
<video src="src.mp4"></video>
```

某些属性，只有两种状态：1.不写 2.属性名，这种属性叫做布尔属性。

布尔属性，在 HTML5 中，可以不用写

1. controls:控制控件的显示，取值只能唯 controls
2. aotoplay：布尔属性，自动播放。
3. muted：布尔属性，禁音播放
4. loop：布尔属性，循环播放

## audio

和视频完全一致

```html
<audio src="src.mp3"></audio>
```

## 兼容性

1. 旧版本的浏览器不支持这两个元素
2. 2.不同的浏览器支持的音视频格式可能不一致
   音频：mp4、webm
   音频：mp3
3. 多媒体兼容

```html
<video>
  <source src="mp4" />
  <source src="webm" />
  <p>嵌入flash或让其下载谷歌浏览器</p>
  <p></p>
</video>
```

# 列表元素

## 有序列表

ol 元素：ordered list

li 元素：list item

type 属性标号类型:

- a 表示小写字母编号
- A 表示大写字母编号
- i 表示小写罗马数字编号
- I 表示大写罗马数字编号
- 1 表示数字编号(默认值)
  除非在封闭的<li>元素中使用不同的 type 属性，否则类型集将用于整个列表
  不过应该通过 type 来修改样式而
  是使用 list-style-type

reversed 布尔属性 逆序

```html
<ol>
  <li>
    有序列表
  </li>
  <ol></ol>
</ol>
```

## 无序列表

把 ol 改为 ul

ul:unordered list\

无序列表常用语制作菜单 或 新闻列表。

## 定义列表

通常用于一些术语的定义

dl 元素：definition list

dt 元素：definition tittle

dd 元素：definition description

# 容器元素

容器元素：该元素代表一块区域，内部用于放置其他元素

## div 元素

div 没有语义

## 语义化容器元素

header 元素：通常用于表示页头，也可以用于表示文章的头部

footer 元素：通常用于表示页脚，页可用用于表示文章的尾部

article 元素：通常用于表示整片文章

section 元素：通常用于表示文章的涨价

aside 元素：通常用于表示一些附加的东西(侧边栏)

# 元素的嵌套关系

以前：块级元素可以包含行级元素，行级元素不可以包含块级元素，a 元素除外

现在：元素的包含关系由元素的内容类别决定。

## 总结：

1. 容器元素可以包含任何元素
2. a 元素中几乎可以包含任何元素
3. 某些元素有固定的子元素(ul>li,ol>li,dl>dt+dd)
4. 标题元素和段落元素不能相互嵌套，并且不能包含容器元素

# iframe 元素

通常用于在一个页面中嵌入另一个页面

iframe 可替换元素

1. 通常是行盒
2. 通常显示的内容取决于元素的属性
3. CSS 不能完全控制其中的样式
4. 具有行块盒的特点

# 使用 flash

object

embed

都是可替换元素

1. data、src
   资源路径

2. type
3. [MIME(Multipurpose Internet Mail Extensions)](https://baike.baidu.com/item/MIME/2900607?fr=aladdin)多用途互联网邮件类型
   object 使用 param 传参
   embed 直接写

兼容

```html
<object data="" type="">
<embed data="" type="">
</object>
```

# 表单元素

一系列元素，主要用于收集用户数据

## input 元素

输入框

- type:输入框类型
  text 普通文本输入框
  passworld 密码输入框
  date 日期选择框(兼容性问题)
  search 搜索框(兼容性问题)
  range 滑块框(兼容性问题) min max
  color 颜色选择
  number 数字输入框 min max step
  checkbox 多选框 用 name 分组 使用 check 默认选中
  radio 单选框 用 name 分组 使用 check 默认选中
  file 选择文件
  [type 总](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)
- value:输入框内容
- placeholder:当文本框没有内容时，显示提示文本

input 用元素制作按钮
type 为 reset(重置)、button(普通按钮)、submit(提交)时，input 表示按钮。可以通过 value 改变文本

## select 元素

下拉列表选择框
通常与 option 元素配合使用
使用 optgroup 分组
对 optgroup 使用 label 属性显示分组名字
使用 select 默认选中
多选 multiple

## textarea 元素

文本域，多行文本框
> cols横向多少个文字
> rows 纵向多少行
没有空白折叠


## button元素

type属性：reset、button、submit默认值submit

## 表单状态

readonly属性 只读 布尔属性 不会改变表单显示样式
disabled属性 是否禁用 布尔属性 改变表单显示样式

## 配合表单元素的其他元素

### label

普通元素，通常配合单选盒多选框使用
- 显示关联
通过for属性关联表单元素的id
- 隐式关联

```html
<label>
<input type="radio" value="demo">
</label>
```

### datalist

该元素本身不会显示到页面，通常用于和普通文本框配合
input的list属性可以通过id查询datalist的option内容


### form元素
通常，会将整个表单元素，放置form元素的内部，作用是当提交表单是，会将form元素内部的表单内容以合适的方式提交到服务器。

表单元素必须写name属性

form元素对开发静态页面没有什么意义

action 提交给谁，不写时默认为提交给本地
method 提交方式
  - post
  - get

### fieldest 元素

表单分组

legend作为子元素表示分组的标题


























































































































































































