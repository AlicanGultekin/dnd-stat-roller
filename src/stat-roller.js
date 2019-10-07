/**
 * Stat Roller module
 * @module stat-roller
 */

const util = require('./util');
const { Random, MersenneTwister19937 } = require('random-js');
const random = new Random(MersenneTwister19937.autoSeed());

/**
 * Rolls N sided die
 * minimum sides is 2 (coin toss)
 *
 * @param {number} [n=6] Number of sides
 * @returns {number} Roll result
 */
exports.rollNSidedDie = function(n = 6) {
  util.ensureNumberOrThrow(
    n,
    'A number equal to or greater than 2 should be passed',
    n >= 2
  );

  return random.integer(1, n);
};

/**
 * Rolls dice for a given stat name
 * Out of all rolls, the lowest roll will be discarded
 *
 * @param {number} [numberOfRollsPerStat=4] Number of dice to roll per stat
 * @param {string} [statName] Name of stat to roll for
 * @returns {number} Total of rolled dice
 */
exports.rollStat = function(numberOfRolls = 4, statName = null) {
  util.ensureNumberOrThrow(
    numberOfRolls,
    'numberOfRolls should be a number greater than or equal to 1',
    numberOfRolls >= 1
  );

  let rolls = [];

  for (let die = 1; die <= numberOfRolls; die++) {
    let roll = exports.rollNSidedDie(6);
    rolls.push(roll);
    console.log(
      `Die ${die} rolled ${roll} ${statName ? `for ${statName}` : ''}`
    );
  }

  rolls.sort();
  console.log(`Discarding ${rolls[0]}`);
  rolls = rolls.splice(1, rolls.length);

  let total = rolls.reduce((a, b) => a + b, 0);
  console.log(`Total is ${total}\n`);

  return total;
};

/**
 * Rolls a given number of stats
 * @param {number} [numberOfStatsToRoll=6] Number of stats to roll for
 * @param {number} [numberOfRollsPerStat=4] Number of dice to roll per stat
 *
 * @returns {number[]} An array containing all rolled values
 */
exports.rollStats = function(
  numberOfStatsToRoll = 6,
  numberOfRollsPerStat = 4
) {
  util.ensureNumberOrThrow(
    numberOfStatsToRoll,
    'numberOfStatsToRoll should be a number greater than or equal to 1',
    numberOfStatsToRoll >= 1
  );
  util.ensureNumberOrThrow(
    numberOfRollsPerStat,
    'numberOfRollsPerStat should be a number greater than or equal to 1',
    numberOfRollsPerStat >= 1
  );

  let stats = Array.from(Array(numberOfStatsToRoll).keys());
  stats = stats.map(() => exports.rollStat(numberOfRollsPerStat));

  console.log(stats.join(', '));

  return stats;
};

/**
 * @typedef {Object} Stat
 * @property {string} name - Name of stat
 * @property {number} value - Value of stat
 */

/**
 * Rolls stats and auto assigns them to strength, dexterity, constitution, intelligence, wisdom, and charisma for a character
 * @param {number} [numberOfRollsPerStat=4] Number of dice to roll per stat
 *
 * @returns {Array.<Stat>} An array objects containing all rolled stat names and their values
 */
exports.rollStatsAndAutoAssign = function(numberOfRollsPerStat = 4) {
  util.ensureNumberOrThrow(
    numberOfRollsPerStat,
    'numberOfRollsPerStat should be a number greater than or equal to 1',
    numberOfRollsPerStat >= 1
  );

  let stats = [
    {
      name: 'STR',
      value: 0,
    },
    {
      name: 'DEX',
      value: 0,
    },
    {
      name: 'CON',
      value: 0,
    },
    {
      name: 'INT',
      value: 0,
    },
    {
      name: 'WIS',
      value: 0,
    },
    {
      name: 'CHA',
      value: 0,
    },
  ];

  stats.map(stat => {
    stat.value = exports.rollStat(numberOfRollsPerStat, stat.name);
  });

  stats.map(stat => {
    console.log(`${stat.name} is ${stat.value}`);
  });

  return stats;
};
