const removeFromArray = function(array, ...values) {
    return array.filter( !values.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3)); 
// Do not edit below this line
module.exports = removeFromArray;
