# JS 简介

## 什么是语言

- 计算机就是一个由人来控制的机器，人让它干嘛，它就就得干嘛。
- 我们要学习计的语言就是人和计算机交流的工具，人类通过语言来控制，操作计算机。
- 编程语言和我们说的中文、英文本质上没有区别，只是语法比较特殊
- 语言的发展：
  - 纸带机：机器语言
  - 汇编语言：符合语言
  - 现代语言：高级语言

## JavaScript 起源

- JavaScript 诞生于 1995 年，它的出现主要是用于处理网页中的前端验证。
- 所谓的前端验证，就是指检查用户输入的内容是否符合一定的规则、比如:用户名的长度，密码的长度，邮箱的格式等。

## JavaScript 特点

- 解释型语言
- 类似于 C 和 java 的语法结构
- 动态语言
- 基于原型的面向对象

# JS 基础

## js 引入

1. 外引

```html
<script src="URL"></script>
```

2. 内置

```htm
<script>
  // JS代码
</script>
```

1. 内嵌

```html
<button onclick="alert=('弹出块输出内容')"></button>
```

## js 注释

```JavaScript
//单行注释
```

```JavaScript
/*
多行注释
*/
```

## [基本输出语句](1.初识JS/index.js)

1. 浏览器弹出块

`alert('弹出块输出内容');`

2. 向 body 中输出内容

`document.write('页面输出内容');`

3. 向控制台输出内容

`console.log('控制台输出内容');`

## 基本语法

1. JS 中严格区分大小写。
2. JS 中每一条语句以英文分号(;)结尾。
3. JS 中会忽略多个空格和换行。

## 字面量和变量

字面量(常量)：都是不可改变的值，都是可以直接使用的，但是我们一般都不会直接使用

变量：可以保存字面量，而且变量的值是可以任意改变的，变量更加方便我们使用，所有在开发中都是通过变量去保存一个字面量，也可以用变量对字面量进行描述。

声明变量：

使用 var 关键字声明一个变量

```JavaScript

var a = 123;

```

## 标识符

- 在 js 中所有的可以由我们自主明明的都可以称为标识符,例如：变量名、函数名、属性名
- 命名标识符是需要遵守
  1. 标识符中可以含有 字母 数字 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_ \$
  2. 标识符不能以数字开头
  3. 标识符不能是 ES 中的[关键字或者保留字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_Words)
  4. 标识符一般都使用驼峰命名法(首字母小写，每个单词开头字母大小，其余字母小写)

## 数据类型

数据类型指的是字面量的类型，在 JS 中一共有 6 中数据类型：

1. String 字符串
2. Number 数值
3. Boolean 布尔值
4. Null 空值
5. Undefined 未定义
6. Object 对象

其中 String、Number、Boolean、Null、Undefined 属于基本数据类型，而 Object 属于引用类型

### 1.String 字符串

- 字符串声明时把字面量加引号即可
- 单引号和双引号都可以
- 引号不能嵌套，双引号不能放双引号，单引号不能放单引号
- 在字符串中我们可以使用/作为转义字符，当表示一些特殊符号时可以进行转义
  ![](img/转义字符.png)

```JavaScript
var str = "hello"
```

### 2.Number 数值

- 所有数值都是 Number(正数、浮点数)
- Number.MAX_VALUE 是 js 中的最大值
- Number.MIN_VALUE 是 js 中的最小值(大于 0 的最小值)
- Infinity 表示正无穷
- -Infinity 表示负无穷
- NAN 是一个特殊的数字，表示 Not a Number
- 如果使用 JS 进行浮点数运算，可能得到一个不精确的结果

### 3.Boolean 布尔值

布尔值只有两个

- true 表示真
- false 表示假

### 4.Null

Null 的类型的值只有一个 null
null 这个值专门用来表示为空的对象
同 typeof 检查 null 会返回 object

### 5.Undefined

Undefined 的类型的值只有一个 Undefined
当声明一个变量，不给其赋值时就表示 Undefined

## 强制类型转换

- 指将一个数据类型转换为其他数据类型
  - 将其他的数据类型转换为 String、Number、Boolean

1. 转 String

   1. 调用 toString()方法
      - Null 和 Undefined 没有 toString()方法
   2. 调用 String()函数
      - Null 和 Undefined 有 String()函数

2. 转 Number

   1. 调用 Number()函数

      > 字符串不是纯数字时将会转换成 NaN

      > 空串和空格字符串都转换为 0

      > Boolean 转 Number true 为 1 false 为 0

      > Null 转 Number 为 0

      > Underfined 转 Number 为 NaN

   2. 调用 parseInt()函数

      > 将字符串中有效的正数提取出

   3. 调用 parseFloat()函数

      > 将字符串中有效的浮点数提取出

   4. 进制转换
      在 JS 中，

      - 表示 16 进制的数字，则需要 0x 开头
      - 表示 8 进制的数字，则需要 0 开头
      - 表示 2 进制的数字，则需要 0b 开头，不是所有浏览器都支持
      - 可以在 parseInt()中传第二个参数

      ```js
      parseInt("070", 10);
      ```

3. 转 Boolean
   1. 调用 Boolean()函数
      - Number 转 Boolean 除了 0 和 NaN 是 false 其余的都是 true
      - String 转 Boolean 除了空串是 false，其余的都是 true
      - Null 和 Undefined 都会转换为 false
      - Object 会转换为 true

## 运算符

运算符也叫操作符
通过运算符可以对一个或多个值进行运算,并获取运算结果

### 算数运算符

加减乘除，不会更改原变量，只计算结果

#### +

当对非 Number 类型的值进行计算时，会隐形转换成 Number 进行计算

任何值与 NaN 进行计算都是 NaN

当两个字符串进行加法运算，会做拼串操作

任何的值和字符串做加法运算，都会先转换成字符串，然后再和字符串做拼串的操作

#### -

对两个值进行减法运算

#### \*

对两个值进行乘法运算

#### /

对两个值惊喜除法运算

#### %

对两个值进行取模运算(余数)

### 一元运算符

#### +

正号
正号不会对 Number 产生影响
对非 Number 的数据转换成 Number

#### -

负号
负号可以对 Number 进行符号的取反
对非 Number 的数据转换成 Number，然后符号取反

### 自增 自减

- 自增 `++`
  通过自增可以使变量在自身的基础上加 1
  对于一个变量自增以后，原变量会立即自增 1

- 自减 `--`
  通过自减可以使变量在自身的基础上减 1
  对于一个变量自减以后，原变量会立即自减 1

自增自减符号在前和在后有区别，
当打印a++是原变量的值
打印++啊是新值

例如:
- 自增
  - 自增符在后：
   ```js
   var a = 10;
   console.log(a++);//10
   console.log(a);//11
   ```
  - 自增符在前：
   ```js
   var a = 10;
   console.log(++a);//11
   console.log(a);//11
   ```
- 自减
  - 自减符在后：
   ```js
   var a = 10;
   console.log(a--);//10
   console.log(a);//9
   ```
  - 自减符在前：
   ```js
   var a = 10;
   console.log(--a);//9
   console.log(a);//9
   ```