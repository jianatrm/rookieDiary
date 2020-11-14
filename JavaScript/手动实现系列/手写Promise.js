function MyPromise(excutor) {
    this.status = 'pending';
    this.data ='';
    this.callbacks = []

    const resolve=(value)=>{
        if (this.status !='pending') return;
        this.status = 'resolved'
        this.data = value;
        setTimeout(()=>{
            this.callbacks.forEach((item)=>{
                item(value)
            })
        })

    }

    const reject=(reason)=>{
        if (this.status !='pending') return;
        this.status = 'rejected'
        setTimeout(()=>{
            this.callbacks.forEach((item)=>{
                item()
            })
        })

    }
    excutor(resolve(value),reject(reason))
}

MyPromise.prototype.then= function (onResolved,onRjected) {
    onResolved = typeof onResolved == 'function'?onResolved : value=>value
    onResolved = typeof onRjected =='function' ?onRjected : throw reason

    return new MyPromise((resolve,reject)=>{
        switch (this.status) {
            case "pending":
                this.callbacks.push(onResolved)
            case "resolved":
                setTimeout(()=>{
                    try{
                        const result =  onResolved(this.data)
                        if (result instanceof MyPromise) {
                            result.then(resolve,reject)
                        }else {
                            resolve(result)
                        }
                    }catch (e) {
                        reject(e)
                    }
                })
            case "rejected":
                setTimeout(()=>{
                    try{
                        const result =  onRjected(this.data)
                        if (result instanceof MyPromise) {
                            result.then(resolve,reject)
                        }else {
                            resolve(result)
                        }
                    }catch (e) {
                        reject(e)
                    }
                })


        }
    })


}