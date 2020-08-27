/* 
    练习一

    如果投资的年利率为5%,试求从1000块增长到5000块，需要花费多少年。
*/
// 练习一答案
var money = 1000;
var count = 0;
while (money <= 5000) {
    money *= 1.05;
    count++;
}
console.log("需要" + count + "年");