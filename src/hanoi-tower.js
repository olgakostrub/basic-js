module.exports = function calculateHanoi(disksNumber, turnsSpeedPerHour) {
  // remove line with error and write your code here
  const bigTurns = BigInt(Math.pow(2, disksNumber)) - BigInt(1);
  const bigSeconds = (bigTurns * BigInt(3600)) / BigInt(turnsSpeedPerHour);
  return { turns: Number(bigTurns), seconds: Number(bigSeconds) };
};
