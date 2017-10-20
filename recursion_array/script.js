let arr = [1, 2, 3, 4, 5];
let i = 0;

function recArr(arr) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        recArr(arr);
    }
}

recArr(arr);