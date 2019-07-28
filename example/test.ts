interface Person{
    firstname: string,
    lastname: string
}
function test(param: string){
    console.log(param)
}
test('a')
function f({a,b = 0} = {a: ''}):void{
    console.log('success')
}
f()

