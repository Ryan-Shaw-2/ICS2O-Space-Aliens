/* global Phaser */

// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()
  }

  update (time, delta) {
    // called 60 times a second

    const keyLeftObj = this.input.keyboard.addKey('A')
    const keyRightObj = this.input.keyboard.addKey('D')
    const keyUpObj = this.input.keyboard.addKey('W')
    const keyDownObj = this.input.keyboard.addKey('S')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.ship.x = this.ship.x -= 7
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x = this.ship.x += 7
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keyUpObj.isDown === true) {
      this.ship.y = this.ship.y -= 7
      if (this.ship.y < 0) {
        this.ship.y = 0
      }
    }

    if (keyDownObj.isDown === true) {
      this.ship.y = this.ship.y += 7
      if (this.ship.y > 1080) {
        this.ship.y = 1080
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
