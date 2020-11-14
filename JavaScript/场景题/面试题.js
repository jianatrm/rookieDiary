/*
第一题:
设计一个函数trafficLight，使得：

trafficLight()
  .lightUp('red')
  .wait(2000)
  .lightUp('yellow')
  .lightUp('red')
  .wait(1000)
  .lightUp('green')

输出结果为：
red
(等待2秒)
yellow
red
(等待1秒)
green
*/

function trafficLight() {

    let funArray= [];
    let flag = true;
    let _this = this
    return  {
        lightUp : (args) =>{
            console.log(args)
            return _this
        },

         wait : (times) =>{
            setTimeout(()=>{
                return _this
            },times)
        }
    }

}
//
// trafficLight()
//   .lightUp('red')
//   .wait(2000)
//   .lightUp('yellow')
//   .lightUp('red')
//   .wait(1000)
//   .lightUp('green')

/*
第二题:
给定一个整数数组 arr，实现一个函数`countMax(arr)`，
计算出从 arr 中选择出 多个不相邻元素 组成最大的和是多少。
const x = [1, 4, 5, 3]
countMax(x) // 4 + 3 = 7
const y = [3, 12, 6, 2, 4]
countMax(y) // 12 + 4 = 16
const z = [3, 12, 1, 1, 6, 2, 4]
countMax(z) // 12 + 6 + 4 = 22
*/

function countMax(arr) {
    // code...
    let i = j = 2;
    let max = 0
    // while(i<j&&j<arr.length){
    //    let num = 0
    //     num = arr[i]+arr[j]
    //     while (arr)
    // }

    for (let k = 0; k <arr.length ; k++) {
        let num = arr[k]
        while (j<arr.length){
            num += arr[j]
            if ( (j+2) <arr.length){
                j += 2
            }else {
                i++
                j=i
                max = Math.max(max,num)
                num = arr[k]
            }
        }
        j=k+3

    }
    return max
}

// const x = [1, 4, 5, 3];
// console.log('countMax(x) => ', countMax(x));
// const y = [3, 12, 6, 2, 4];
// console.log('countMax(y) => ', countMax(y));
const z = [3, 12, 1, 1, 6, 2, 4];
console.log('countMax(z) => ', countMax(z));
/*
第三题:
实现一个方法decodeStr，输入一个字符串，根据约定规则输出编码结果。约定规则如下：
str = "2[a]1[bc]", 返回 "aabc".
str = "2[e2[d]]     ", 返回 "eddedd".
str = "3[abc]2[cd]ff", 返回 "abcabcabccdcdff".
可以看出: N[string]，表示string 正好重复 N 次。假设字符串一定是有效正确的字符串
*/

// 2[e2[d]]
// 2[e2[d], "", ""
function decodeStr(inputStr) {
    let arr = inputStr.split("]")
    let str = ""
    for(let i =0;i<arr.length;i++){
        let temp = arr[i]
        let arr1 = temp.split("[")
        for(let j=0;j<arr1[0];j++){
            let str1 = arr1[1].join('').replace("[","")
            str1 = str1.replace("]","")
            str += str1
        }
    }

    return str

    // code...
}

// console.log("2[a]1[bc] => ", decodeStr("2[a]1[bc]"));
// console.log("2[e2[d]] => ", decodeStr("2[e2[d]]"));
// console.log("3[abc]2[cd]ff => ", decodeStr("3[abc]2[cd]ff"));
