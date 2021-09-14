'use strict'

const Payload = require("../../Networking/Payload")

class Alert {

    constructor( text ) {
        return new Payload("SHOW-ALERT", { text: text }).private()
    }

}

module.exports = Alert
