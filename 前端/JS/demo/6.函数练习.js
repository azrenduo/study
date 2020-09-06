/*
    练习一

    定义一个函数，判断值是否是数字
    判断此数字是否是偶数，如果是偶数返回true，否则返回false

*/

// 练习一答案
function isOu(num) {
    return num % 2 !== 0;

}
document.write(isOu(5));


/*
    练习二

    定义一个函数，可以根据班级计算一个圆的面积，并返回计算结果

*/

// 练习二答案

function circle(r) {
    return 3.14 * r * r
}

document.write(circle(5));
