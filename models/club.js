const mongoos = require('mongoose')
const schema = mongoos.Schema;

let clubScheema = new schema({
    username:{
        type:String
    },
    passward:{
        type:String
    }
})

module.exports = mongoos.model('user',clubScheema)