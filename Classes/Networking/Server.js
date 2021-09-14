'use strict'

const Map = require("../Game/Core/Map")

class Server {

    constructor() {
        this.port    = 9022
        this.players = []
        this.map     = new Map()
    }    

}

module.exports = Server
