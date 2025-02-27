
var smallerNumberThanCurrent = function(nums){
    let sorted = [...nums].sort((a, b) => a - b);
    let map = new Map();

    for (let i = 0; i < sorted.length; i++){
        if (!map.has(sorted[i])){
            map.set(sorted[i], i)
        }
    }
    return nums.map(num => map.get(num))
}

console.log(smallerNumberThanCurrent([6, 6, 6]));
 