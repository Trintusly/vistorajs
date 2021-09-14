'use strict'

class Payload {
    
    constructor( command, payload ) {
        this.command = command
        this.payload = payload
        
        return this
    }

    private() {
        this.payload = { command: this.command, data: this.payload }
        this.command = "PRIVATE-SIGNAL"
        
        return this
    }

}

module.exports = Payload
