//二维数组查找

function findNumberIn2DArray(matrix, target) {

    let rowNums = matrix.length
    let colNums = matrix[0].length

    let i =0 ,j =colNums-1

    while (i<rowNums && j>=0){
        if (matrix[i][j]== target) return true;
        if (matrix[i][j] < target){
            ++i
        }else {
            --j
        }
    }
    return false;

}
console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
],19))


//链表翻转

var reversePrint = function(head) {
   let p = head;
   let arr = reversePrint(head.next);
   arr.push(p.value)
    return arr;
};
console.log(reversePrint([1,2,3]))