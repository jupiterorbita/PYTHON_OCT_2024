/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.
*/
//              0  1  2  3  4
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9, 1];
const expected2 = -1;
// 0  1  2  3  
const nums3 = [1, 1, 0, 2];
const expected3 = 2;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return









// -------------------------------------------
function balanceIdx(arr) {
    var sumLeft = 0;
    var sumRight = 0;

    for (var i = 0; i < arr.length; i++) {
        sumRight += arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        sumRight -= arr[i];
        if (sumLeft == sumRight) {
            return i;
        }
        sumLeft += arr[i];
    }
    return -1;
}

function balanceIndex(nums) {
    if (nums.length < 3) return false

    let left = nums[0]
    let right = 0

    for (let i = 2; i < nums.length; i++) {
        right += nums[i]
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (left === right) return i

        console.log(left, right)

        right -= nums[i + 1]
        left += nums[i]
    }
    return -1
}


function balanceIndex(arr) {
    var leftVar = 0;
    var rightVar = 0;
    if (arr.length > 3) {
        for (let i = 0; i < arr.length - 1; i++) {
            leftVar += arr[i];
            rightVar += arr[arr.length - 1 - i]
            if (leftVar == rightVar) {
                return i + 1;
            }
        }
    } else {
        return -1;
    }
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))



/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) { }

/*****************************************************************************/

/**
 * - Time: O(2n) linear -> O(n).
 * - Space: O(1) constant.
 */
function balanceIndex(nums = []) {
    if (nums.length < 3) {
        return -1;
    }

    let left = nums[0];
    let right = 0;

    for (let i = 2; i < nums.length; i++) {
        right += nums[i];
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (left === right) {
            return i;
        }

        right -= nums[i + 1];
        left += nums[i];
    }
    return -1;
}

/**
 * - Time: O(n/2) -> O(n) linear, n/2 since looping from outside towards center.
 * - Space: O(1) constant.
 */
function balanceIndexOutsideIn(nums = []) {
    if (nums.length < 3) {
        return -1;
    }
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    let leftSum = 0;
    let rightSum = 0;

    while (leftIdx < rightIdx) {
        if (nums[leftIdx] == 0) {
            leftIdx++;
            continue;
        }
        if (nums[rightIdx] == 0) {
            rightIdx--;
            continue;
        }
        if (leftSum == rightSum) {
            leftSum += nums[leftIdx];
            rightSum += nums[rightIdx];
            leftIdx++;
            rightIdx--;
        } else if (leftSum < rightSum) {
            leftSum += nums[leftIdx];
            leftIdx++;
        } else {
            rightSum += nums[rightIdx];
            rightIdx--;
        }
    }

    if (leftSum == rightSum && leftIdx == rightIdx) {
        return leftIdx;
    } else {
        return -1;
    }
}


function balanceIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for (var j = 0; j < i; j++) {    //get sum left of index
            leftSum += arr[j];
        }
        for (var k = i + 1; k < arr.length; k++) {   //get sum right of index
            rightSum += arr[k];
        }
        if (rightSum === leftSum) {      //if both sums are equal then return the index
            return i;
        }
    }
    return -1;  //otherwise return -1
}