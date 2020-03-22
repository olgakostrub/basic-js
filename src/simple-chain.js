const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("Incorrect position");
    }
    this.chain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let stringChain = "";
    this.chain.forEach((item, index) => {
      stringChain +=
        `( ${item} )` + (index < this.chain.length - 1 ? "~~" : "");
    });
    this.chain = [];
    return stringChain;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
