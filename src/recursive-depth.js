module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      let depthChange = 1;
      if (Array.isArray(arr[i])) {
        depthChange += this.calculateDepth(arr[i]);
        if (depthChange > depth) {
          depth = depthChange;
        }
      }
    }
    return depth;
  }
};
