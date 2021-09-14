'use strict'

const Vector3 = require("../Vector3")
const Payload = require("../../../Networking/Payload")

class BaseObject {

    constructor() {
        this.name     = "Object-" + Math.random()
        this.rotation = new Vector3()
        this.position = new Vector3()
        this.scale    = new Vector3()
        this.color    = "FFF"
    }

    instance() {
        return new Payload("ADD-OBJECT", this)
    }

}

module.exports = BaseObject
