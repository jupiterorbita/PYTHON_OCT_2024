/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

// take 5-8 mins to write the pseudocode here:

//              nums = []
function sumArr(nums, index= 0) {
    // BASE CASE
    // logic towards the base case
    // recursion

}

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭


// create the function and decide what params it needs and what it will return

















function sumArr(nums, x = 0) {
    if (x == nums.length) {
        return 0;
    }
    return nums[x] + sumArr(nums.slice(1));

}

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))

function sumArr(nums, x = 0, sum = 0) {
    if (x < nums.length) {
        x += 1;
        sum += nums[x - 1];
        return sumArr(nums, x, sum);
    }
    console.log(sum);
}

function sumArr(nums, x = 0, sum = 0) {

    if (x < nums.length) {
        sum += nums[x]
        return sumArr(nums, x + 1, sum)
    }
    return sum
}

console.log(sumArr(nums1));

function sumArr(nums, i = nums.length - 1) {
    //1. break point 
    if (i < 0) {
        return 0;
    }
    return nums[i] + sumArr(nums, i - 1);
}

function recursiveSigma(num) {
    if (num <= 0) {
        return 0;
    }
    else {
        return Math.floor(num + recursiveSigma(num - 1))
    }
}

console.log(recursiveSigma(two_num3))


function recursiveSigma(num, sum = 0) {

    num = Math.floor(num)

    if (num <= 0) {
        return sum
    } else {
        return recursiveSigma(num - 1, sum + num)
    }
}


// ==================
/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) { }

/*****************************************************************************/

/**
 * Recursively sums the given array.
 * - Time: O(n) linear.
 * - Space: O(n) linear due to the call stack.
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums = [], i = 0) {
    if (i === nums.length) {
        return 0;
    }
    return nums[i] + sumArr(nums, i + 1);
}

function sumArr2(nums = [], sum = 0, i = 0) {
    if (i === nums.length) {
        return sum;
    }
    return sumArr2(nums, sum + nums[i], i + 1);
}
