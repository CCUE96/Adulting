const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commentText: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;