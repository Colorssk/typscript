enum Colorssk{
    a=1,
    b
}
var c:Colorssk = Colorssk.a//Colorssk[2]

var arr:any[] = [1,'2']

//var let const 变量提升和es6一致

// const变量的属性是可以赋值的
obj = {a:'1',b:'2'}
//解构中 重新命名  {a:newname1,b:newname2} = obj

可选参数：
  (a:striing,b?:number)

  function f({a,b = 0} = {a: ''}):void{

  }
  解构中给了默认参数无需必填，但是参数给的默认值是必填的
  f({a:'a'})// success
  f({})// error
  f()// success

  对象的扩展符中，对象重复后面的会覆盖前面的

  定义函数参数，之后传参可以多传，但是指定的是必传的

  只读属性:   interface obj = {
    readonly x :string
  }
  let a:obj = {x:'1'}//初始化可以赋值

  let arr:number[] = [1,2,3]
  let ro: ReadonlyArray<number>
  