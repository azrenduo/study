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

## 什么是HTML？

HTML是w3c组织定义的语言标准，HTML是用于描述页面结构的语言。

结构：有什么东西，改东西表示什么含义。

HTML：Hyper Text Mark Language，超文本标记语言

书写一个一级标题：

```html
<h1>这是一个一级标题</h1>
```

MDN：Mozilla Development Network Mozilla ，开发者社区。(https://developer.mozilla.org/zh-CN/)

## 什么是css

css是w3c定义的语言标准：css是用于描述页面展示的语言

css决定页面的样子。

## 执行HTML CSS

HTML、CSS ——> 浏览器内核执行 ——> 页面 

浏览器：
1. shell：外壳

2. core：内核(渲染引擎、js执行引擎)

3. 主流浏览器：
IE：Trident
Firefox：Gecko
Chrome：webkit / Blink
Safari：webkit 
Opera:Presto / Blink

# 第一个网页

## HTML的注释格式

```
<!-- 注释文本 -->
```

## 元素 (标签 / 标记)

整体：element (元素)

元素 =  起始标记(begin tag) + 
        结束标记(end tag) +
        元素内容(element content) + 
        元素属性(element attribute)

属性的分类:
  - 局部属性：某些元素特有的属性
  - 全局属性：所有元素通用

## 空元素

有些元素没有结束标记，这样的元素叫**空元素**

空元素两种写法：
1.直接写
```html 
    <meta charset= "UTF-8"> 
```

2.(老方法)起始标签最后加/
```html 
    <meta charset= "UTF-8"/> 
```

元素之间不能相互嵌套

## 嵌套术语
- 父元素 
- 子元素 
- 祖先元素 
- 后代元素 
- 兄弟元素

## 标准的文档结构

HTML：页面、HTML文档

1. 文档声明，告诉浏览器当前文档使用的HTML标准是HTML5
不写文档声明，将导致浏览器进入怪异渲染没收。

```html
<!DOCTYPE html>
```
2. 根元素，一个页面最多只能有一个，并且该元素是所有其他元素的父元素或者祖先元素
HTML5中可以不用写(不推荐)

```html
<html lang="cmn-hans"> </html>
```
lang属性：是一个全局属性，表示该元素内部使用的文字是使用哪一种自然语言书写的。
cmn-hans:中文最新写法

3. head和body必须要作为html的子元素出现
HTML5中可以不用书写(不推荐)

- head 
文档头，文档头内部的内容，不会显示到页面上。

```html
<head>

</head>
```

- body
文档体，页面上所有参与显示的元素，都应该放置到文档体中。
```html
<body>

</body>
```

# 语义化

## 什么是语义化

1. 每一个HTML元素都有具体的含义

a元素：超链接
p元素：段落
h1元素：一级标题

2. 所有元素与展示效果无关

元素展示到页面中的效果，是有css决定的。

因为浏览器带有默认的css样式，所以每个元素有一些默认样式。

**重要：选择什么元素，取决于内容含义，而不是显示出的效果**

## 为什么需要语义化

1. 为了搜索引擎优化(SEO)

搜索引擎：百度、搜狗、Bing、Google

每隔一段时间，搜索引擎从整个互联网中，抓取页面源代码。

2. 为了让浏览器理解网页

# 文本元素

HTML5中支持的元素：HTML5元素周期表
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

> 以前：某些元素在显示时会独占一行(块级元素)，而某些元素不会(行级元素) 在HTML5中弃用
> 现在：“块级”类别相当于HTML5中的“流内容”类别，而“行级”类别相当于HTML5中的“措辞内容”类别

## pre 元素

预格式化文本元素

空白折叠：在源代码中的连续空白字符(空格、换行、制表)，在页面显示时，会被折叠为一个空格。

例外：在pre元素中的内容不会出现空白折叠。

在pre元素内部出现的内容，会安装源代码格式显示到页面上。

该元素通常用于在网页中显示一些代码。

pre元素功能的本质：它有一个默认的css属性(white-space:pre;)

# HTML实体

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

  - $符号
 ```html
&amp;
 ```

## a元素

 超链接

## href属性

 hyper reference:通常用于跳转地址
 1. 普通链接 - 跳转地址
 2. 锚链接 - 锚点
  - 当值为 "#" 时回到顶部
 3. 功能链接 
  - 执行js代码 JavaScript:js代码
  - 发送邮件 mailto:邮箱地址  要求用户计算机上安装有邮件发送软件：exchange
  - 拨号 tell:电话号码 要求在移动端上或者计算机上安装有拨号软件的软件
  
## id属性
id属性：全局属性，表示元素在文档中的唯一编号

## target属性

表示跳转窗口位置。

target的取值:
- _self:在当前页面窗口中打开，默认值
- _blank:在新窗口中打开

## tittle属性
鼠标指向时显示提示文字


# 路径写法

## 站内资源和站外资源

站内资源：当前网站的资源

站外资源：非当前网站的资源

## 绝对路径和相对路径

站外资源：绝对路径

站内资源：相对路径

1. 绝对路径的书写格式、URL地址：

```
协议名://主机名:端口号/路径

schema://host:prot/path
```

协议名：http、https、file

主机名：域名、ip地址

当跳转目标和当前页面的协议相同时，可以省略协议

2. 相对路径

以./表示当前资源所在的目标(可以省略)

可以../表示返回上一级目录

# 图片元素

## img元素

imag缩写，空元素

 ## src属性
 
 source 图片路径地址

 ## alt属性：

 当图片资源失效时，将使用该属性的文字替代图片

 ## 与a元素联用

 ```html
 <a href="src">
 <img src="src">
 </a>
 ```

 ## map元素联用

 ```html
 <img usemap="#map">
 <map name="map">
 ```

 map：地图

 map的子元素：area(区域)
 
 衡量坐标时，为了避免衡量无线，需要使用专业的衡量工具：
 ps、pxcook

 ## 和figure元素联用

指代、定义，通常用于把图片标题、描述包裹起来

子元素：figcaption 指代东西的标题


# 多媒体元素

video 视频

audio 音频
## video

```html
<video src="src.mp4">
</video>
```
某些属性，只有两种状态：1.不写 2.属性名，这种属性叫做布尔属性。

布尔属性，在HTML5中，可以不用写

1. controls:控制控件的显示，取值只能唯controls
2. aotoplay：布尔属性，自动播放。
3. muted：布尔属性，禁音播放
4. loop：布尔属性，循环播放

## audio

和视频完全一致

```html
<audio src="src.mp3">
</audio>
```

## 兼容性

1. 旧版本的浏览器不支持这两个元素
2. 2.不同的浏览器支持的音视频格式可能不一致
   音频：mp4、webm
   音频：mp3 
3. 多媒体兼容

  ```html
  <video>
    <source src="mp4">
    <source src="webm">
    <p>嵌入flash或让其下载谷歌浏览器<P>
  </video>
  ```

# 列表元素

## 有序列表

  ol元素：ordered list

  li元素：list item

  type属性标号类型:
  - a 表示小写字母编号
  - A 表示大写字母编号
  - i 表示小写罗马数字编号
  - I 表示大写罗马数字编号
  - 1 表示数字编号(默认值)
  除非在封闭的<li>元素中使用不同的type属性，否则类型集将用于整个列表
  不过应该通过type来修改样式而
  是使用list-style-type

  reversed 布尔属性 逆序

  ```html
<ol>
  <li>
  有序列表
  </li>
<ol>
  ```

## 无序列表

把ol改为ul

ul:unordered list\

无序列表常用语制作菜单 或 新闻列表。

## 定义列表

通常用于一些术语的定义

dl元素：definition list

dt元素：definition tittle

dd元素：definition description

# 容器元素

容器元素：该元素代表一块区域，内部用于放置其他元素

## div元素

div没有语义

## 语义化容器元素

header元素：通常用于表示页头，也可以用于表示文章的头部

footer元素：通常用于表示页脚，页可用用于表示文章的尾部

article元素：通常用于表示整片文章

section元素：通常用于表示文章的涨价

aside元素：通常用于表示一些附加的东西(侧边栏)

# 元素的嵌套关系

以前：块级元素可以包含行级元素，行级元素不可以包含块级元素，a元素除外

现在：元素的包含关系由元素的内容类别决定。

## 总结：

1. 容器元素可以包含任何元素
2. a元素中几乎可以包含任何元素
3. 某些元素有固定的子元素(ul>li,ol>li,dl>dt+dd)
4. 标题元素和段落元素不能相互嵌套，并且不能包含容器元素