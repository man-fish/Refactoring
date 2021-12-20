declare function countArray(arr: any[]): number;

function isLargeArray(arr: any[]) {
    let arrLen = countArray(arr);
    return arrLen > 1000;
}

// =====>
function isLargeArrayV1(arr: any[]) {
    let arrLen = countArray(arr) > 1000;
}
