"use strict";

// create promises
const successPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

const failPromise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Some err msg")), 5000);
});

// then/catch
function logPromise(promise) {
  promise
    .then(reslove => console.log(reslove))
    .catch(err => console.error(err.message))
    .finally(() => console.log("Promise was finished!"));
}

logPromise(successPromise);
logPromise(failPromise);

// async/await
async function logPromiseFn(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (e) {
    console.error(e.message);
  } finally {
    console.log("Promise was finished!")
  }
}

logPromiseFn(successPromise);
logPromiseFn(failPromise);

