function sum(a, b) {
    return a + b;
}

let arr = new Array(1, -5, 50, 13);

//sum of all Array number 

function sumOfAllArray(arr) {
    let sumElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof 1){
            sumElement = sumElement + arr[i];     
        }  
    }
    return sumElement;
};

//find min, max 

function findMaxElementArray(arr) {
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof 1){
            if (arr[i] > maxElement){
                maxElement = arr[i];   
            }
        }  
    }
    return maxElement;
};

function findMinElementArray(arr) {
  let minElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == typeof 1){
          if (arr[i] < minElement){
              minElement = arr[i];   
          }
      }  
  }
  return minElement;
};

module.exports = {
    sum,
    sumOfAllArray,
    findMaxElementArray,
    findMinElementArray
}