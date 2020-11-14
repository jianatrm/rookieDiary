//深克隆
// 考虑map set sysmol

//可继续深层遍历

    let mapTag =   '[object Map]'
    let setTag =   '[object Set]'
    let arrayTag =  '[object Array]'
    let objTag =   '[object Object]'

const deepTargetType = [
    mapTag,
    setTag,
    arrayTag,
    objTag
]
//不可深层遍历

  let strTag = '[object String]'
let numTag = '[object Number]'
let dateTag = '[object Date]'
let funTag = '[object Function]'
let symbolTag = '[object Symbol]'
let regTag = '[object RegExp]'
function cloneOtherTarget(target,type) {
    let ctor = target.constructor
    switch (type) {
        case strTag:
        case numTag:
        case dateTag:
            return new ctor(target)
        case symbolTag:
            return Object(Symbol.prototype.valueOf.call(target))
    }

}



function deepClone(target,map = new Map()) {
   if (target === null) return target;

   let  cloneTarget;

   if (deepTargetType.includes(Object.prototype.toString.call(target))){
       let constructor = target.constructor;
       cloneTarget = new constructor()
   }else {
       return  cloneTarget = cloneOtherTarget(target,Object.prototype.toString.call(target))
   }
   if (map.get(target)){
       return map.get(target)
   }
   map.set(target,target)

   //如果是map
   if (Object.prototype.toString.call(target) === '[object Map]'){
       let cotor = target.constructor
        cloneTarget = new cotor();
        target.forEach((item,key) =>{
            cloneTarget.set(key,deepClone(item))
        })
       return cloneTarget
   }

    //如果是set
    if (Object.prototype.toString.call(target) === '[object Set]'){
        let cotor = target.constructor
        cloneTarget = new cotor();
        target.forEach((item,key) =>{
            cloneTarget.add(key,deepClone(item))
        })
        return cloneTarget
    }
    cloneTarget = Array.isArray(target)?[]:{}

    for (let mapTagKey in target) {
        cloneTarget[mapTagKey] = deepClone(target[mapTagKey])
    }

    return cloneTarget;
}
let set1 = new Set([1,2,3])
let map1 = new Map()
map1.set("1",[2])
let objectTest = {
    a:1,
    b:{
        b1:[1,2,3],
        b2:{}
    },
    c:Symbol(1),
    d:set1,
    e:map1
}

console.log(deepClone(objectTest))