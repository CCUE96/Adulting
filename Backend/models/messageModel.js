const {Schema,model} = require('mongoose')

const messageSchema = new Schema({
    timeSent:{
        type:Date,
        default:Date.now,
    },
    messageText:{
        type:String,
        required:true
    },
    Sender:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Recipient:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const Message = model('Message',messageSchema)

module.exports = Message