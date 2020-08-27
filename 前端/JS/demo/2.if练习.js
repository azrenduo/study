/*
    参考
    prompt()函数
    用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数，
    该字符串会作为提示框的提示文字

    用户输入的内容将会作为函数的返回值返回，可以定义一个变量来接受该内容
    */

/*  
    练习一

    从键盘属性小明的期末成绩：
    当成绩为100是，'奖励1'
    当成绩为[80-99]时，'奖励2'
    当成绩为[60-80]时，'奖励一3'
    其他时，什么奖励也没有
*/

// 练习一答案
var score = prompt("请输入小明的成绩");

if (score = 100) {
    console.log("奖励1");
} else if (score <= 99) {
    console.log("奖励2");
} else if (score >= 60 && score <= 80) {
    console.log("奖励3");
} else {
    console.log("没有奖励")
}

/*  
    练习二

    大家都知道，男大当婚，女大当嫁，那么女方家长要嫁女儿，当然要提出一定的条件：
    高：180cm以上；富1000万以上；帅7分以上
    如果这三个条件同时满足，则:"我一定要嫁给他"
    如果这三个条件有满足的情况，则:"嫁吧，比上不足，比下有余。"
    如果三个条件都不满足，则:"不嫁"
 */

// 练习二答案
var height = prompt("身高多少cm?"),
    money = prompt("拥有几万存款？"),
    beautiful = prompt("有几分颜值(按十分来算)");
if (height >= 180 && money >= 1000 && beautiful >= 7) {
    console.log("我一定要嫁给他");
} else if (height >= 180 || money >= 1000 || beautiful >= 7) {
    console.log("嫁吧，比上不足，比下有余。");
} else {
    console.log("不嫁");
}


/* 
   练习三

   编写程序，由键盘输出三个整数，分别存入num1，num2，num3，
   并对他们进行排序，并且由小到大输出。
*/

// 练习三答案
var num1 = +prompt("请输入第一个数"),
    num2 = +prompt("请输入第二个数"),
    num3 = +prompt("请输入第三个数");

if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        document.write(num1 + "<br>" + num2 + "<br>" + num3);
    } else {
        document.write(num1 + "<br>" + num3 + "<br>" + num2);
    }
} else if (num2 < num1 && num2 < num3) {
    if (num2 < num3) {
        document.write(num2 + "<br>" + num1 + "<br>" + num3);
    } else {
        document.write(num2 + "<br>" + num3 + "<br>" + num1);
    }
}else{
    if(num1<num2){
        document.write(num3 + "<br>" + num1 + "<br>" + num2);
    }else{
        document.write(num3 + "<br>" + num2 + "<br>" + num1);
    }
}