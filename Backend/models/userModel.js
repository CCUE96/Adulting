const {Schema,model} = require('mongoose')
const bcrypt = require('bcrypt')
const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [emailMatch, 'Must be an email address']
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
    }]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        try {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        } catch (err) {
            return next(err);
        }
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
const User = model('User',userSchema)

module.exports = User