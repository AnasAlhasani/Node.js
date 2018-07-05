//this is a class 
const Logger = require('./logger')

const logger = new Logger()

// 1: Register
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

// 2: Emit
logger.log('message')
