const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },  
    images: [{ 
        type: String 
    }],  
    tags: [{ 
        type: String 
    }],  
    date: { 
        type: Date, 
        default: Date.now 
    }
});

const Post = model('Post', postSchema);

module.exports = Post;
