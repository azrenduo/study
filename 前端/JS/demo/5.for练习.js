/*
    练习一

    打印1-100之间所有奇数之和到页面上
*/

// 练习一答案
var sum = 0;

for (var i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
document.write("1-100之间所有急速之和为" + sum);

/*
    练习二

    打印1-100之间所有7的悲伤的个数及总和
*/

// 练习二答案
var count = 0,
    sum = 0;
for (var i = 0; i < 100; i++) {
    if (i % 7 == 0) {
        count++;
        sum += i;
    }
}
document.write("1-100之间有" + count + "个7的倍数");
document.write("他们的总和是" + sum);

/* 
    练习三

    水仙花数
    水仙花数是指一个三位数，他的每个位上的数字的3次幂之和等于他本身，
    (例如：1^3+5^3+3^3=153)，请打印所有的水仙花数
*/

// 练习三答案
var hundreds, tens, singleDigit;
for (var i = 100; i < 1000; i++) {
    //获取I的百位 十位 个位的数字
    //获取百位数字
    hundreds = parseInt(i / 100);
    //获取十位数字
    tens = parseInt((i - hundreds * 100) / 10);
    //获取个位数字
    singleDigit = i % 10;
    //判断i是否是水仙花数
    if (
        hundreds * hundreds * hundreds +
        tens * tens * tens +
        singleDigit * singleDigit * singleDigit ==
        i
    ) {
        document.write(i);
    }
}

/* 
    练习四

    在页面中接受一个用户输入的数字，并判断该数是否是质数，
    质数：只能被1和他自身整除的数，1不是质数也不是合数(偶数)，质数必须是大于1的自然数
*/

// 练习四答案

//获取用户输入数字
var num = prompt("请输入一个大于1的整数：");
//判断该值是否合法
if (num <= 1) {
    alert("该值不合法");
} else {
    //创建变量保存当初状态,默认当前的num是质数
    var flag = true;
    //判断num是否是质数
    //获取1-num之间的数
    for (var i = 2; i < num; i++) {
        //判断num是否能被i整除
        if (num % i == 0) {
            //如果num能被i整除，则说明num一定不是质数

            //设置flag为false
            flag = false;
        }
    }
    if (flag) {
        console.log(num + "是质数");
    } else {
        console.log(num + "不是质数");
    }
}

/*
    练习五

    打印九九乘法表

    1*1=1
    1*2=2 2*2=4
    .....
    1*9=9 ...... 9*9=81
*/

for (var i = 1; i < 10; i++) {
    for (var j = 1; j < i + 1; j++) {
        document.write(j + "*" + i + "=" + i * j);
    }
    document.write("<br/>");
}

/*
    练习六

    打印2-100之间所有的质数

*/

// 练习六答案

for (var i = 2; i < 100; i++) {
    flag = true;
    for(var j =2; j<i;j++){
        if (i % j == 0) {
            //如果num能被i整除，则说明num一定不是质数
    
            //设置flag为false
            flag = false;
            break;
        }
    }
}