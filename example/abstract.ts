class Greeter {
    static standardGreeting = 'Hello, there'
  
    greeting: string
  
    constructor(message?: string) {
      this.greeting = message
    }
  
    greet() {
      if (this.greeting) {
        return 'Hello, ' + this.greeting
      } else {
        return Greeter.standardGreeting
      }
    }
  }
  
  let greeter: Greeter
  greeter = new Greeter()
  console.log(greeter.greet())
  
  let greeterMaker: typeof Greeter = Greeter// 新生长的class
  greeterMaker.standardGreeting = 'Hey there'// 可以修改静态文件
  
  let greeter2: Greeter = new greeterMaker()
  console.log(greeter2.greet())