const promises = {
    sumaFn: (a, b) => new Promise((resolve, reject) =>
        setTimeout(_ => (a == 0 || b == 0) ?
            reject(new Error('not allowed')) :
            resolve(a + b)
            , 1000)),
    powFn: (num) => Math.pow(num, 2) > 100 ?
        Promise.reject(new Error("pow greater than 100")) :
        Promise.resolve(Math.pow(num, 2)),
    promiseFn: (a, b) =>
        new Promise((resolve, reject) =>
            promises.sumaFn(a, b)
                .then(promises.powFn)
                .then(resolve)
                .catch(reject)
        )
}

export default promises;

// export const sumaFn = (a, b) => new Promise((resolve, reject) => 
//         setTimeout(_ => (a==0 || b==0)? 
//             reject(new Error('not allowed')): 
//             resolve(a+b)
//         ,1000))

// export const powFn = (num) => Math.pow(num,2)>100?
//         Promise.reject(new Error("pow greater than 100")):
//         Promise.resolve(Math.pow(num,2))

// export const promiseFn = (a,b)=>
//     new Promise((resolve,reject)=>
//        sumaFn(a,b)
//             .then(powFn)
//             .then(resolve)
//             .catch(reject)
//     )


// promiseFn(4,5).then(console.log)