# Game over

## Assignment

Create a game or graphical experience using JavaScript. The project must utilize a third-party WebGL framework such as PixiJS, Phaser, p5.js or three.js.

## About the game - Dino Sky Jumper

Our game is inspired by the famous dinosaur running game in chrome but this time the dinosaur is jumping on platforms in the sky.

[Play Dino Sky Jumper here!](https://dino-sky-jumper.netlify.app/)

## Built with

- HTML
- CSS
- [p5.js](https://p5js.org/)

## Preview

<img src="https://i.imgur.com/47qPwWg.png" width="100%">

## Pull requests

- [1 - Spawn Character Logic](https://github.com/DanThor/Game-Over/pull/1)
- [2 - Added Jumping Logic](https://github.com/DanThor/Game-Over/pull/2)
- [3 - Added Spawning Platforms Logic](https://github.com/DanThor/Game-Over/pull/3)
- [4 -Fixed To Only Jump On Platforms Or Ground](https://github.com/DanThor/Game-Over/pull/4)
- [5 - Stay On Platform + Collision](https://github.com/DanThor/Game-Over/pull/5)
- [6 - Stop Game On Collision](https://github.com/DanThor/Game-Over/pull/6)
- [7 - Added Start And Restart Screen](https://github.com/DanThor/Game-Over/pull/7)
- [8 - Score Calc Added](https://github.com/DanThor/Game-Over/pull/8)
- [9 - Added Animation Sprites](https://github.com/DanThor/Game-Over/pull/9)
- [10 - Added Score To Canvas And Fixed Speed Bug](https://github.com/DanThor/Game-Over/pull/10)
- [11 - Fixed Start Screen To Only Show Once](https://github.com/DanThor/Game-Over/pull/11)
- [12 - Added Increase Speed Over Time Logic](https://github.com/DanThor/Game-Over/pull/12)
- [13 - Changed This.R To This.sizze For Clearity](https://github.com/DanThor/Game-Over/pull/13)
- [14 - Updated README](https://github.com/DanThor/Game-Over/pull/14)
- [15 - Fixed The Image URL On Preview In README](https://github.com/DanThor/Game-Over/pull/15)
- [16 - Fixed Landing On Edge Bug](https://github.com/DanThor/Game-Over/pull/16)
- [17 - Sound Effects](https://github.com/DanThor/Game-Over/pull/17)
- [18 - Updated README With Pull Requests And Testers](https://github.com/DanThor/Game-Over/pull/18)
- [19 - Fixed misstake in order of pull requests and deleted min.sound.p5](https://github.com/DanThor/Game-Over/pull/19)
- [20 - Added Gameboy SVG instead](https://github.com/DanThor/Game-Over/pull/20)
- [21 - Revert "Added Gameboy SVG instead"](https://github.com/DanThor/Game-Over/pull/21)
- [22 - Moved canvas, added padding and a SVG-pattern background](https://github.com/DanThor/Game-Over/pull/22)
- [23 - Small fixes to css](https://github.com/DanThor/Game-Over/pull/23)

## Testers with programming skills

- [Oskar Sjölin Joss](https://github.com/OskarJoss) & [Terese Thulin](https://github.com/teresethulin)
- [Camilla Kylmänen Sjörén](https://github.com/camiwd) & [Maja Alin](https://github.com/majaalin)

## Testers without programming skills

- Victor Göthensten
- Fabio Hallerstedt
- Kim Åberg
- Robin Wendin
- Hampus Cannerfors

## Code review

 - [index.js Line 37](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/index.js#L37)
Maybe variable start could be called something else like isPlaying to clearly show its a bool
- [index.js Line 19](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/index.js#L19)
Maybe move this into a preload.js
- [index.js Line 36](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/index.js#L36)
Maybe turn this into a function StartGame.js
- [index.js Line 92](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/index.js#L92)
 spawnFrequency - 10 doesn’t appear to fill any function?
- [index.js Line 95](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/index.js#L95)
Could use platformWidth += 0.1, just a little bit shorter and cleaner.
- [Game.js](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/game.js#L1)
Code in this file is not very DRY, maybe create a function that sets up the parts that are the same everywhere.
- [Character.js Line 17-30](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/character.js#L17)
Velocity is used for the speed moving up while jumping, technically the character is not moving forwards ever, but I found it a bit confusing that velocity wasn’t the general running speed. Maby it could have been called something like velocityY or ascensionSpeed
- [Character.js Line 55](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/character.js#L55)
If the character is on the same x coordinates as a platform but below it maby you should just fall right through, right now its acting a bit weird if you time the jump so you hit the bottom edge of the platform.
- [platform.js Line 3](https://github.com/DanThor/Game-Over/blob/f8b135b1399237cc3bf4264793d9df295db9c239/platform.js#L3)
This.height and this.w for width feels a bit inconsistent, maby use h and w or height and width.
- It was hard to find things to comment about because your code is very clean and well commented. Great job!



## Authors

- [Daniel Thorsen](https://github.com/DanThor)
- [Victor Ljungblad](https://github.com/Ljungblad)
