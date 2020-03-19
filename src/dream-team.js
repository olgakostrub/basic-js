module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  const name = members
    .filter(item => typeof item === "string")
    .map(item => item.trim()[0].toUpperCase())
    .sort()
    .join("");
  return name.length ? name : false;
};
