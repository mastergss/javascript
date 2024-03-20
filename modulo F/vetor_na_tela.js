let nums = [1, 3, 7, 0, 9, 4, 2, 6]

console.log(nums)
/*
console.log(nums[0])
console.log(nums[1])
console.log(nums[2])
console.log(nums[3])
*/

for (let pos = 0; pos < nums.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${nums[pos]}`)
}

nums.sort()
//forma simplificada
for (let pos in nums) {
    console.log(`A posição ${pos} tem o valor ${nums[pos]}.`)
}