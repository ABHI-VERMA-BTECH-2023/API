//https://randomuser.me/api/ ----API link

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{console.log("Promise one");
        resolve(); // resolve return data
    },1000)     //1nano sec
});

promise.then(()=>{console.log("Sucessfuly done")})
