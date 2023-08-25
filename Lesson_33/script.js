// first option

Array.prototype.powWithDelay = function(n, delay) {
    const result = [];
  
    const calculatePower = (item) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(Math.pow(item, n));
        }, delay);
      });
    };
  
    const promises = this.map(item => calculatePower(item));
  
    return Promise.all(promises)
      .then(values => values);
};
  
const numbers = [1, 2, 3, 4, 5];
numbers.powWithDelay(2, 2000)
  .then(squaredNumbers => {
      console.log(squaredNumbers);
    });


// second option

Array.prototype.pow = function(n) {
    return this.map(item => Math.pow(item, n));
};
  
const numbers2 = [1, 2, 3];
const squaredNumbers2 = numbers2.pow(3); 
console.log(squaredNumbers2);

Function.prototype.defer = function(n) {
    const func = this;
    setTimeout(func, n);
};
  
function a() {
    console.log("test");
}
  
a.defer(5000);