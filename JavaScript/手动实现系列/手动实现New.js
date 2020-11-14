function Person(name,age) {
    this.name = name;
    this.age = age
    console.log(1)
}

new Person();

function myNew() {
 let ctor = [].shift.call(arguments);
 let obj = Object.create(ctor.prototype);
 ctor.apply(obj,arguments);
 return obj;
}

console.log(myNew(Person,1,2))

function new1() {
    let obj = {}
    const [conext,...args] = [...arguments]
    obj.__proto__ = conext.prototype
    let result = conext.call(obj,...args)
    if (result&&(typeof result === 'function'||typeof result ==='object')){
        return result
    }
    return obj
}

console.log("new1",new1(Person))