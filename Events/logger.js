//This is a class 
const EventEmitter = require('events')

class Logger extends EventEmitter { 

    //This is a constructor function 
    log(message) { 
        // Send an HTTP request 
        console.log(message)

        //Raise an event 
        this.emit('messageLogged', { id: 1, url: 'http://www.google.com'})
    }
    
}

module.exports = Logger 