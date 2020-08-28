<div align="center">
  <img src="#" alt="rodee-20" height="100">
  <h1>Rodee-20</h1>
  <h4>A Friendly Dice Roll Discord Bot</h4>
</div>

**Rodee-20** is a Discord bot that helps you roll polyhedral dice by entering commands in the chat.

## Table of Contents

- [Introduction](#Introduction)
- [List of Commands](#List-of-Commands)
- [Available Dice](#Available-Dice)
- [Notes](#Notes)

## Introduction

```
Rodee-20:
  Hello, I am Rodee-20!
  I can help you throw your dice. Just tell me what you need. :D
```

## List of Commands

| Command             | Description                                                        | Example    | Outcome                                                           |
| ------------------- | ------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------- |
| `/rodee20 -h`       | Get list of commands available.                                    | N/A        | N/A                                                               |
| `/r(d#)`            | Roll a dice once.                                                  | `/rd20`    | `{USER} rolled a [20].`                                           |
| `/r(x)(d#)`         | Roll a dice multiple times.                                        | `/r2d8`    | `{USER} rolled [3] [7].`                                          |
| `/r(d#)a`           | Roll a dice with advantage.                                        | `/rd20a`   | `{USER} rolled [8] [18] -> Result with advantage [18].`           |
| `/r(d#)d`           | Roll a dice with disadvantage.                                     | `/rd20d`   | `{USER} rolled [9] [16] -> Result with disadvantage [9].`         |
| `/r(d#)(+/-)(#)`    | Roll a dice once and with bonus.                                   | `/rd20+5`  | `{USER} rolled a [15]. -> Result with bonus [19].`                |
| `/r(x)(d#)(+/-)(#)` | Roll a dice multiple times with bonus.                             | `/r3d6-1`  | `{USER} rolled [1] [5] [3]. -> Result with bonus [0] [4] [2].`    |
| `/r(d#)a(+/-)(#)`   | Roll a dice with advantage and bonus.                              | `/rd20a-2` | `{USER} rolled [15] [12] -> Result with advantage [13].`          |
| `/r(d#)d(+/-)(#)`   | Roll a dice with disadvantage and bonus.                           | `/rd20d+3` | `{USER} rolled [10] [4] -> Result with disadvantage [7].`         |
| `/rodee20 -s`       | Roll four d6 and take the top three results.                       | N/A        | `{USER} rolled [5] [1] [4] [5] -> Your stat is [14].`             |
| `/rodee20 -ds`      | Roll a death saving throw. <sup><a href="#fr">fr</a></sup>         | N/A        | `{USER} rolled a [12]. Success: 2 <-> Failures: 1`                |
| `/rodee20 -dsc`     | Get death saving throw counter. <sup><a href="#fr">fr</a></sup>    | N/A        | `{USER}'s Death Saving Throws are: Success: 0 <-> Failures: 0`    |
| `/rodee20 -dsr`     | Resets death saving throw counter. <sup><a href="#fr">fr</a></sup> | N/A        | `Death Saving Throws have been reset. Success: 0 <-> Failures: 0` |

## Available Dice

| Dice (d#) | Sides     | Outcome           |
| --------- | --------- | ----------------- |
| d4        | 4 sides   | 1 to 4            |
| d6        | 6 sides   | 1 to 6            |
| d8        | 8 sides   | 1 to 8            |
| d10       | 10 sides  | 1 to 10           |
| d10t      | 10 sides  | 10, 20... 90, 100 |
| d12       | 12 sides  | 1 to 12           |
| d100      | 100 sides | 1 to 100          |

## Notes

<sup><a id="fr">fr</a></sup>: Future Release
