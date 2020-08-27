/*
 *写出document.write打印的值; 
 */



var n1 = 10,
    n2 = 20;
var n = n1++;
document.write('n=' + n);//10
document.write('n1=' + n1);//11
n = ++n1;
document.write('n=' + n);//12
document.write('n1=' + n1);//12
n = n2--;
document.write('n=' + n);//20
document.write('n2=' + n2);//19
n = --n2;
document.write('n=' + n);//18
document.write('n2=' + n2);//18

