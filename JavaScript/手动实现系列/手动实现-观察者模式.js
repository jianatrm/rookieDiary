class Subject {
    constructor() {
        this.observers = []
    }

    addObserver(observe){
        this.observers.push(observe)
    }

    moveObserver(observe){
        let index = this.observers.findIndex(item=>item == observe)
        this.observers.splice(index,1)
    }

    updateObserver(value){
        this.observers.forEach(item=>{
            item.update(value)
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(value){
        console.log("通知给了"+this.name+"消息"+value)
    }

}

let subject = new Subject();

let observer1 = new Observer("小明");
let observer2 = new Observer("小红");
subject.addObserver(observer1)
subject.addObserver(observer2)

subject.updateObserver("我回来了")


let subject1 = new Subject();

subject1.addObserver(observer1)
subject1.addObserver(observer2)

subject1.updateObserver("我走了")