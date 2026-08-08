var summaryRanges = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];

        // move while numbers are consecutive
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        let end = nums[i];

        // format
        if (start === end) {
            result.push(start.toString());
        } else {
            result.push(start + "->" + end);
        }
    }

    return result;
};

console.log(summaryRanges[0,9]);
