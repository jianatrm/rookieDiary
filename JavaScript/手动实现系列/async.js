if (a()){
    console.log(2)
}

   async function a() {
        await  new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(1)
                console.log(3)
            },10000)
        })
       console.log(1)
       return 2
    }