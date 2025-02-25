/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    let counter = 0;
    while (nums.length > 0){
        let minIndex = nums.indexOf(Math.min(...nums))
        for (let i = 0; i < minIndex; i++){
            let current = nums.shift()
            nums.push(current);
            counter++;
        }
        nums.shift()
        counter++;
    }
    return counter;
}


