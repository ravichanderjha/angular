function logged(constructorFn: Function) {
    console.log(constructorFn);
  }
  
  @logged
  class MyClass {
    constructor() {
      console.log('Instance created');
    }
  }
  