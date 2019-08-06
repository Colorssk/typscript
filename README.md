# typscript
typscript to make wheels
test

ctr+shift+b快捷键配置：
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "echo",
            "type": "shell",
            "command": "node",
            "args":["${file}"],
            "group":{
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
colorssk
纯函数不仅可以有效降低系统的复杂度，还有很多很棒的特性，比如可缓存性：
前者到的柯力化留下一些衍生的笔记：
对于纯函数的柯力化优化导致的是会出现包菜式代码:

    h(g(f(x)));

所以需要用 函数组合 来解决这一问题



一个包菜式代码的优化：

    var compose = (f, g) => (x => f(g(x)));
    
    var add1 = x => x + 1;
    var mul5 = x => x * 5;
    
    compose(mul5, add1)(2);// 函数作为参数，实际上是mul5(add1(2))
    // =>15 

函数组合：可以理解成一个函数最为另一个函数的参数

实用系数4颗星

    var first = arr => arr[0];
    var reverse = arr => arr.reverse();
    
    var last = compose(first, reverse);
    
    last([1,2,3,4,5]);
    // =>5

continue......

