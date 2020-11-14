let data = { price: 5, quantity: 2 }
let target = null
class Dep {
    constructor() {
        this.subs = []
    }
    depend(){
        this.subs.push(target)
    }
    notify(){
        this.subs.forEach(item=>{
            item()
        })
    }
}

Object.keys(data).forEach(key=>{
    let value = data[key]
    const dep =new Dep()
    Object.defineProperty(data,key,{
        get() {
            dep.depend()
            return value
        },
        set(v) {
            value= v
            dep.notify()
        }
    })
})

function watcher(myFunc) {
    target = myFunc
    target()
    target = null

}

watcher(()=>{
    data.total = data.price * data.quantity
})

