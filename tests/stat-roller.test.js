const statRoller = require('../src/stat-roller');

test('N sided die should roll between 1 and 6 by default', () => {
  const expectedMinRoll = 1;
  const expectedMaxRoll = 6;
  const actualRoll = statRoller.rollNSidedDie();

  expect(actualRoll).toBeGreaterThanOrEqual(expectedMinRoll);
  expect(actualRoll).toBeLessThanOrEqual(expectedMaxRoll);
});

test('4 sided die should roll between 1 and 4', () => {
  const expectedMinRoll = 1;
  const expectedMaxRoll = 4;
  const actualRoll = statRoller.rollNSidedDie(expectedMaxRoll);

  expect(actualRoll).toBeGreaterThanOrEqual(expectedMinRoll);
  expect(actualRoll).toBeLessThanOrEqual(expectedMaxRoll);
});

test('a stat should roll 3 6-sided-dice and should be between 3 and 18 by default', () => {
  const numberOfRolls = 4;
  const expectedMaximumRollTotal = 18;
  const actualRollTotal = statRoller.rollStat();

  expect(actualRollTotal).toBeGreaterThanOrEqual(numberOfRolls - 1); // 1 out of N (4) rolls is discarded
  expect(actualRollTotal).toBeLessThanOrEqual(expectedMaximumRollTotal);
});

test('a stat with 4 20-sided-dice rolls should be between 4 and 80', () => {
  const numberOfRolls = 5;
  const expectedMaximumRollTotal = 80;
  const actualRollTotal = statRoller.rollStat(numberOfRolls, 'test stat');

  expect(actualRollTotal).toBeGreaterThanOrEqual(numberOfRolls - 1); // 1 out of N (5) rolls is discarded
  expect(actualRollTotal).toBeLessThanOrEqual(expectedMaximumRollTotal);
});

test('should roll 6 stats and they should each be between 3 and 18 by default', () => {
  const numberOfStats = 6;
  const numberOfRollsPerStat = 4;
  const expectedMaximumRollTotal = 18;
  const actualStats = statRoller.rollStats();

  expect(actualStats).toHaveLength(numberOfStats);

  for (let i = 0; i < numberOfStats; i++) {
    expect(actualStats[i]).toBeGreaterThanOrEqual(numberOfRollsPerStat - 1); // 1 out of N (4) rolls is discarded
    expect(actualStats[i]).toBeLessThanOrEqual(expectedMaximumRollTotal);
  }
});

test('should roll 3 stats and they should each be between 2 and 12', () => {
  const numberOfStats = 3;
  const numberOfRollsPerStat = 3;
  const expectedMaximumRollTotal = 12;
  const actualStats = statRoller.rollStats(numberOfStats, numberOfRollsPerStat);

  expect(actualStats).toHaveLength(numberOfStats);

  for (let i = 0; i < numberOfStats; i++) {
    expect(actualStats[i]).toBeGreaterThanOrEqual(numberOfRollsPerStat - 1); // 1 out of N (3) rolls is discarded
    expect(actualStats[i]).toBeLessThanOrEqual(expectedMaximumRollTotal);
  }
});

test('should roll 6 stats, auto assign them, and each should be between 3 and 18 by default', () => {
  const numberOfRollsPerStat = 4;
  const expectedMaximumRollTotal = 18;
  const actualStats = statRoller.rollStatsAndAutoAssign();
  const expectedStatNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  expect(actualStats).toHaveLength(expectedStatNames.length);

  for (let i = 0; i < expectedStatNames.length; i++) {
    expect(actualStats[i].name).toBe(expectedStatNames[i]);
    expect(actualStats[i].value).toBeGreaterThanOrEqual(
      numberOfRollsPerStat - 1
    ); // 1 out of N (4) rolls is discarded
    expect(actualStats[i].value).toBeLessThanOrEqual(expectedMaximumRollTotal);
  }
});

test('should roll 6 stats, auto assign them, and each should be between 1 and 6', () => {
  const numberOfRollsPerStat = 2;
  const expectedMaximumRollTotal = 6;
  const actualStats = statRoller.rollStatsAndAutoAssign(numberOfRollsPerStat);
  const expectedStatNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  expect(actualStats).toHaveLength(expectedStatNames.length);

  for (let i = 0; i < expectedStatNames.length; i++) {
    expect(actualStats[i].name).toBe(expectedStatNames[i]);
    expect(actualStats[i].value).toBeGreaterThanOrEqual(
      numberOfRollsPerStat - 1 // 1 out of N (2) rolls is discarded
    );
    expect(actualStats[i].value).toBeLessThanOrEqual(expectedMaximumRollTotal);
  }
});
