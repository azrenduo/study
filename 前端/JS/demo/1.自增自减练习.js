var n1 = 10,
    n2 = 20;
var n = n1++;
console.log('n=' + n);//10
console.log('n1=' + n1);//11
n = ++n1;
console.log('n=' + n);//12
console.log('n1=' + n1);//12
n = n2--;
console.log('n=' + n);//20
console.log('n2=' + n2);//19
n = --n2;
console.log('n=' + n);//18
console.log('n2=' + n2);//18

/*
 *写出console.log打印的值; 
 */