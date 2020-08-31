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

| Command             | Description                                                        | Example     |
| ------------------- | ------------------------------------------------------------------ | ----------- |
| `!r1(d#)`           | Roll a dice once.                                                  | `!r1d20`    |
| `!r1(d#)a`          | Roll a dice with advantage.                                        | `!r1d20a`   |
| `!r1(d#)d`          | Roll a dice with disadvantage.                                     | `!r1d20d`   |
| `!r1(d#)(+/-)(#)`   | Roll a dice with bonus.                                            | `!r1d20+5`  |
| `!r1(d#)a(+/-)(#)`  | Roll a dice with advantage and bonus.                              | `!r1d20a-2` |
| `!r1(d#)d(+/-)(#)`  | Roll a dice with disadvantage and bonus.                           | `!r1d20d+3` |
| `!r(x)(d#)`         | Roll a dice multiple times.                                        | `!r2d8`     |
| `!r(x)(d#)(+/-)(#)` | Roll a dice multiple times with bonus.                             | `!r3d6-1`   |
| `!rodee20 -h`       | Get list of commands available.                                    | N/A         |
| `!rodee20 -s`       | Roll four d6 and take the top three results.                       | N/A         |
| `!rodee20 -ds`      | Roll a death saving throw. <sup><a href="#fr">fr</a></sup>         | N/A         |
| `!rodee20 -dsc`     | Get death saving throw counter. <sup><a href="#fr">fr</a></sup>    | N/A         |
| `!rodee20 -dsr`     | Resets death saving throw counter. <sup><a href="#fr">fr</a></sup> | N/A         |

## Available Dice

| Dice (d#) | Sides     | Outcome         |
| --------- | --------- | --------------- |
| d4        | 4 sides   | 1 to 4          |
| d6        | 6 sides   | 1 to 6          |
| d8        | 8 sides   | 1 to 8          |
| d10       | 10 sides  | 0 to 9          |
| d10t      | 10 sides  | 0, 10... 80, 90 |
| d12       | 12 sides  | 1 to 12         |
| d20       | 20 sides  | 1 to 20         |
| d100      | 100 sides | 1 to 100        |

## Notes

<sup><a id="fr">fr</a></sup>: Future Release
