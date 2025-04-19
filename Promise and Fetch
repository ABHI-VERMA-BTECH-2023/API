/* Promise_1 */

const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("settimeout 1.....");

    resolve();
  }, 1000);
});

promise_1.then(() => {
  console.log("Promise 1 execute sucessfully");
});

/* Promise_2 */
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("settimeout 2.....");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 execute sucessfully");
});

/* Promise_3 */
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("settimeout 3.....");
    let error = true;

    if (!error) {
      resolve({
        name: "Abhi Verma",
        age: 25,
        email: "abhib9045@gmail.com",
        mobile: "8860675122",
      });
    } else {
      reject("Data not found");
    }
  }, 1000);
});
//////////////////////////////////////////////////////////////
promise_3
  .then((data) => {
    console.log(data);
    console.log("---------  GETDATA SUCESSFULLY --------------");
  })
  .catch((error_msg) => {
    console.log(error_msg);
  });

// /* Promise_4 */
const promise_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("settimeout 4.....");
    let error = false;

    if (!error) {
      resolve({
        name: "Abhi Verma",
        age: 25,
        email: "abhib9045@gmail.com",
        mobile: "8860675122",
      });
    } else {
      reject("Data not found");
    }
  }, 1000);
});

promise_4
  .then((data) => {
    console.log(data);
    console.log("---------  GETDATA SUCESSFULLY --------------");
  })
  .catch((error_msg) => {
    console.log(error_msg);
  });

/* PROMISE 5 */

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Data Not Found");
  });
