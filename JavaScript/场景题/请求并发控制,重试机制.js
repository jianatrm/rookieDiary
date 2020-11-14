//同时发出100个相同的请求  但是  后台只能处理一次，返回结果要给这100个请求返回结果

// 例如：/a  发一百次  只处理一次  /b  发一百次  只处理一次



//维护一个map 存储url相同的回调包括成功  和失败回调
let urlMap = new Map();

let successCallbackMap = new Map();

let successResult = new Map();

let errorResult = new Map();

let errorCallbackMap = new Map();

let status = 'pending'



function CacheRequest(url,successCallback,errorCallback) {
    function  run() {
        urlMap.forEach(item=>{
           new Promise((resolve, reject) => {
               resolve(1)
                }).then(res=>{
                    successCallbackMap.get(item).forEach(callback=>{
                        callback(res)
                    })
                successResult.set(item,res)
                }).catch(error=>{
                    errorCallbackMap.get(item).forEach(callback=>{
                        callback(error)
                    })
                 errorResult.set(item,error)
                })
        })


    }



     return async  function request(){




        if (urlMap.get(url)){
            if (successResult.get(url))  return successResult.get(url)
            if (errorResult.get(url))  return errorResult.get(url)

            let successArray = successCallbackMap.get(url);
            let errorArray = successCallbackMap.get(url);

            successCallbackMap.set(url,successArray.push(successCallback))
            errorCallbackMap.set(url,errorArray.push(errorCallback))
        }else {
            urlMap.set(url,url)
            successCallbackMap.set(url,[successCallback])
            errorCallbackMap.set(url,[errorCallback])
        }
        await run()

        // if (status == 'pending'){
        //     status = "fufiled"
        //     run()
        // }


    }




    // if (status =='pending'){
    //     return
    // }
    // setTimeout(()=>{
    //     status = "playing"
    //     request()
    // },3000)


}

function fn (){
    console.log("回调a")
}
function fnb (){
    console.log("回调b")
}

let a = CacheRequest('/a',fn,()=>{console.log(2)});
a()
console.log(1)
// let a1 = CacheRequest('/a',fn,()=>{console.log(2)});
// a1()
 // let b = CacheRequest('/b',fnb,()=>{console.log(2)});
 // b()




