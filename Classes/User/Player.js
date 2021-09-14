'use strict'

const Vector3 = require("../Game/Core/Vector3")
const Avatar = require("./Avatar")

class Player {

    constructor() {
        this.socket   = null
        this.avatar   = new Avatar()
        this.user     = {}
        this.health   = 100
        this.position = new Vector3()
        this.rotation = new Vector3()
        this.scale    = new Vector3(1, 1, 1)
        this.gears    = {
            equipped: 0,
            list: []
        }
    }
    
    send( event ) {
        this.socket.send(event)
    }

}

module.exports = Player
