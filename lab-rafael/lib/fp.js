'use strict'

let forEach = (arr, cb) => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

let map = (arr, cb) => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
}

let filter = (arr, cb) => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let reduce = (arr, cb, initialValue) => {
  let result = initialValue;
  arr.forEach(item => {
    result = cb.call(undefined, result, item, arr);
  })
  return result;
}

module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;
module.exports.forEach = forEach;
