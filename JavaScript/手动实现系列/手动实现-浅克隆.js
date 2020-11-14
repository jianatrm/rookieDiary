//浅克隆

function simpleClone(target) {
   if (typeof target === 'object' && target !== null){
       const  cloneTarget = Array.isArray(target)?[]:{}
       for (const targetKey in target) {
           cloneTarget[targetKey] = target[targetKey]
       }
       return  cloneTarget;
   }else {
       return target
   }
}