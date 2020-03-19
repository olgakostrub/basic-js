const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const STARTING_ACTIVITY = 0.693;
const RADIOACTIVE_DECAY_CONSTANT = STARTING_ACTIVITY / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string") return false;

  let numericSampleActivity = parseFloat(sampleActivity);
  if (isNaN(numericSampleActivity)) return false;

  if (numericSampleActivity > MODERN_ACTIVITY || numericSampleActivity <= 0)
    return false;

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / numericSampleActivity) /
      RADIOACTIVE_DECAY_CONSTANT
  );
};
