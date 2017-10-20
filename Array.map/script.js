var arr = [1, 2, 3, 4, 5];
var arr2 = [2, 4, 5];

var map = function rec(arr, newArr, i) {

    if (!newArr) {
        var newArr = [];
    }

    if (!i) {
        var i = 0;
    }

    if (i < arr.length) {
        newArr.push(callback(arr[i], i, arr));
        rec(arr, newArr, ++i);
    }

    return newArr;
}

var callback = function(element, index) {
    return element + index;
};

console.log(map(arr));
console.log(arr);

console.log(map(arr2));
console.log(arr2);