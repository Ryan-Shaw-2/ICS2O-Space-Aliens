/* global Phaser */

// Copyright (c) 2020 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: Apr 2021
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default TitleScene
