/* global Phaser */

// Copyright (c) 2020 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: Apr 2021
// This is the Phaser3 configuration file

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    this.camaras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {  
  }

  update (time, delta) {  
  }
}

export default SplashScene
