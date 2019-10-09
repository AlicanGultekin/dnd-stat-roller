## Modules

<dl>
<dt><a href="#module_stat-roller">stat-roller</a></dt>
<dd><p>Stat Roller module</p>
</dd>
<dt><a href="#module_util">util</a></dt>
<dd><p>Util module</p>
</dd>
</dl>

<a name="module_stat-roller"></a>

## stat-roller
Stat Roller module


* [stat-roller](#module_stat-roller)
    * _static_
        * [.rollNSidedDie([n])](#module_stat-roller.rollNSidedDie) ⇒ <code>number</code>
        * [.rollStat([numberOfRollsPerStat], [statName])](#module_stat-roller.rollStat) ⇒ <code>number</code>
        * [.rollStats([numberOfStatsToRoll], [numberOfRollsPerStat])](#module_stat-roller.rollStats) ⇒ <code>Array.&lt;number&gt;</code>
        * [.rollStatsAndAutoAssign([numberOfRollsPerStat])](#module_stat-roller.rollStatsAndAutoAssign) ⇒ <code>Array.&lt;Stat&gt;</code>
    * _inner_
        * [~Stat](#module_stat-roller..Stat) : <code>Object</code>

<a name="module_stat-roller.rollNSidedDie"></a>

### stat-roller.rollNSidedDie([n]) ⇒ <code>number</code>
Rolls N sided die
minimum sides is 2 (coin toss)

**Kind**: static method of [<code>stat-roller</code>](#module_stat-roller)  
**Returns**: <code>number</code> - Roll result  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [n] | <code>number</code> | <code>6</code> | Number of sides |

<a name="module_stat-roller.rollStat"></a>

### stat-roller.rollStat([numberOfRollsPerStat], [statName]) ⇒ <code>number</code>
Rolls dice for a given stat name
Out of all rolls, the lowest roll will be discarded

**Kind**: static method of [<code>stat-roller</code>](#module_stat-roller)  
**Returns**: <code>number</code> - Total of rolled dice  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [numberOfRollsPerStat] | <code>number</code> | <code>4</code> | Number of dice to roll per stat |
| [statName] | <code>string</code> |  | Name of stat to roll for |

<a name="module_stat-roller.rollStats"></a>

### stat-roller.rollStats([numberOfStatsToRoll], [numberOfRollsPerStat]) ⇒ <code>Array.&lt;number&gt;</code>
Rolls a given number of stats

**Kind**: static method of [<code>stat-roller</code>](#module_stat-roller)  
**Returns**: <code>Array.&lt;number&gt;</code> - An array containing all rolled values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [numberOfStatsToRoll] | <code>number</code> | <code>6</code> | Number of stats to roll for |
| [numberOfRollsPerStat] | <code>number</code> | <code>4</code> | Number of dice to roll per stat |

<a name="module_stat-roller.rollStatsAndAutoAssign"></a>

### stat-roller.rollStatsAndAutoAssign([numberOfRollsPerStat]) ⇒ <code>Array.&lt;Stat&gt;</code>
Rolls stats and auto assigns them to strength, dexterity, constitution, intelligence, wisdom, and charisma for a character

**Kind**: static method of [<code>stat-roller</code>](#module_stat-roller)  
**Returns**: <code>Array.&lt;Stat&gt;</code> - An array objects containing all rolled stat names and their values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [numberOfRollsPerStat] | <code>number</code> | <code>4</code> | Number of dice to roll per stat |

<a name="module_stat-roller..Stat"></a>

### stat-roller~Stat : <code>Object</code>
**Kind**: inner typedef of [<code>stat-roller</code>](#module_stat-roller)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of stat |
| value | <code>number</code> | Value of stat |

<a name="module_util"></a>

## util
Util module


* [util](#module_util)
    * [.ensureNumberOrThrow(value, errorMessage, [condition])](#module_util.ensureNumberOrThrow) ⇒ <code>number</code>
    * [.printStandardArrayComparison()](#module_util.printStandardArrayComparison)

<a name="module_util.ensureNumberOrThrow"></a>

### util.ensureNumberOrThrow(value, errorMessage, [condition]) ⇒ <code>number</code>
Ensures a value is a number or throws

**Kind**: static method of [<code>util</code>](#module_util)  
**Returns**: <code>number</code> - Roll result  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value |  |  | Value to be tested |
| errorMessage | <code>string</code> |  | Error message to be thrown if value is not a number |
| [condition] | <code>Boolean</code> | <code></code> | Optional condition check |

<a name="module_util.printStandardArrayComparison"></a>

### util.printStandardArrayComparison()
Prints D&D 5e standard stat array and its sum to the console

**Kind**: static method of [<code>util</code>](#module_util)  
