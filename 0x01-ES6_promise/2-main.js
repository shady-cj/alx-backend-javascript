import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
console.log(handleResponseFromAPI(promise));
