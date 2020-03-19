module.exports = function countCats(catMatrix) {
  // remove line with error and write your code here
  let catCount = 0;
  catMatrix.forEach(catRow =>
    catRow.forEach(cat => {
      if (cat === "^^") catCount++;
    })
  );
  return catCount;
};
