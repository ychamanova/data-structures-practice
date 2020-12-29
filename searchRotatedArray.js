var search = function (nums, target) {
    if (nums.length === 0) return -1; // check empty

    let left = 0;
    let right = nums.length - 1;

    //binary search for lowest number
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        // if the number in the middle is larger than one to the farthest right, change left + 1 variable to be middle + 1

        //otherwise, right is the middle

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    //start is the lowest number in the array (how array would start if it wasn't rotated)
    let start = left;
    left = 0;
    right = nums.length - 1;

    //if target is equal or larger than lowest number, search right part
    if (target >= nums[start] && target <= nums[right]) {
        left = start;
        // otherwise search left part
    } else {
        right = start;
    }

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};