'use strict'

const BaseObject = require("./BaseObject")

class Spawn extends BaseObject {

    constructor() {
        super()
        this.name = "Spawn-" + Math.random()
        this.type = "SPAWN"
    }

}

module.exports = Spawn
