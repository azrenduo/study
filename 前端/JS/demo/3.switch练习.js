/*
    练习一

    对于成绩大于60分的输出"合格"，低于60分的输出"不合格"
 */

// 练习一答案二
var score = 60;
switch (parseInt(score / 10)) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        document.write("合格");
        break;
    default:
        document.write("不合格");
}

// 练习一答案二
var score = 60;
switch (true) {
    case score >= 60:
    document.write("合格");
    break;
    default:
        document.write("不合格");

}
/* 
    练习二
    从键盘接受整数参数，如果该数为1-7，打印对应的兴趣，否则打印非法参数。
*/

// 练习二答案

var score = prompt("请输入数字1-7");

switch(score){
    case 1:
        document.write("周一");
        break;
    case 2:
        document.write("周二");
        break;
    case 3:
        document.write("周三");
        break;
    case 4:
        document.write("周四");
        break;
    case 5:
        document.write("周五");
        break;
    case 6:
        document.write("周六");
        break;
    case 7:
        document.write("周日");
        break;
    default:
        document.write("非法数字")
}