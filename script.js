//your code here
function majorityElement(arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;

        if (map[num] > Math.floor(arr.length / 2)) {
            return num;
        }
    }
}