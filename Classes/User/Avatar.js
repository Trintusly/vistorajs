'use strict'

class Avatar {

    constructor() {
        this.colors = {
            head:      null,
            torso:     null,
            right_arm: null,
            left_arm:  null,
            right_leg: null,
            left_leg:  null
        }
        this.hats  = {
            hat1: 0,
            hat2: 0,
            hat3: 0
        }
        this.face  = 0
        this.shirt = 0
        this.pants = 0
    }

}

module.exports = Avatar
