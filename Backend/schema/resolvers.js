const { User, Finances, Fitness, Post, Comment, Reply, Message } = require("../models");
const { GraphQLError, UserInputError } = require('graphql'); 
const { signToken, checkPassword } = require('../utils/auth');

// throughout resolvers we change the default mongoose _id to string form id so it can be compatible with graphql
const resolvers = {
  Query: {
    users: async () => {
      try {
        const allUsers = await User.find().populate('friends')
        return allUsers.map(user =>({
          id:user._id.toString(),
          username:user.username,
          email:user.email,
          friends:user.friends.map(friend =>({
            id:friend._id.toString(),
            username:friend.username,
            email:friend.email,
          })),
        }));
      } catch (error) {
        console.error("cannot fetch users",error)
        throw new Error("Failed to fetch users");
      }
    },
    user: async (parent, { id }) => {
      try {
        const individualUser = await User.findById(id).populate('friends');
        return {
          id: individualUser._id.toString(),
          username: individualUser.username,
          email: individualUser.email,
          friends:individualUser.friends.map(friend =>({
            id:friend._id.toString(),
            username:friend.username,
            email:friend.email,
          })),
        };
      } catch (error) {
        console.error("error finding user", error);
        throw new Error("failed to fetch user by id");
      }
    },
    comments: async () => {
      try {
        // populate the comments with user data referenced in the model
        const allComments = await Comment.find().populate('userId')
        // mapping function allows for transforming the data into the desired format rather then just returning all comments as is
        return allComments.map(comment =>({
          // returns the default mongoose primary key _id into a string id and assigning it a graphql id making the mongoose _id compadible with graphlql
          id: comment._id.toString(),
          // returns comment text
          commentText: comment.commentText,
          // returns user data again converting the default mongoose _id into a string and assigning it to a graphql id
          user: {
            id: comment.userId._id.toString(),
            username: comment.userId.username,
          },
          createdAt : comment.createdAt
        }))
      } catch (error) {
        throw new Error("Failed to fetch comments");
      }
    },
    comment: async (parent, { id }) => {
      try {
        const singleComment = await Comment.findById(id).populate('userId');
        return {
          id: singleComment._id.toString(),
          commentText: singleComment.commentText,
          user: {
            id: singleComment.userId._id.toString(),
            username: singleComment.userId.username,
          },
          createdAt: singleComment.createdAt,
        };
      } catch (error) {
        console.error('Error fetching comment by ID:', error);
        throw new Error('Failed to fetch comment by ID');
      }
    },
    replies: async () => {
      try {
        const allReplies = await Reply.find();
        return allReplies.map(reply => ({
          id: reply._id.toString(),
          content: reply.content,
          createdAt: reply.createdAt,
          username: reply.username,
          userId: reply.userId._id.toString(),
          commentId: reply.commentId.toString(),
        }));
      } catch (error) {
        console.error("Error fetching replies:", error);
        throw new Error("Failed to fetch replies");
      }
    },
    reply: async (parent, { id }) => {
      try {
        const singleReply = await Reply.findById(id).populate('userId');
        return {
          id: singleReply._id.toString(),
          content: singleReply.content,
          createdAt: singleReply.createdAt,
          username: singleReply.username,
          userId: singleReply.userId._id.toString(),
          commentId: singleReply.commentId.toString(),
        };
      } catch (error) {
        console.error('Error fetching reply by ID:', error);
        throw new Error('Failed to fetch reply by ID');
      }
    },
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      try {
        const { username, email, password } = input;
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          throw new UserInputError("Email already in use");
        }
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
    updateUser: async (parent, { id, input }) => {
      try {
        await User.update(input, { where: { id } });
        return await User.findByPk(id);
      } catch (error) {
        throw new Error("Failed to update user");
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const user = await User.findByPk(id);
        await User.destroy({ where: { id } });
        return user;
      } catch (error) {
        throw new Error("Failed to delete user");
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          throw new UserInputError("Incorrect email or password");
        }
        const valid = await checkPassword(password, user.password);
        if (!valid) {
          throw new UserInputError("Incorrect email or password");
        }
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new Error("Failed to login");
      }
    },
    createComment: async (parent, { input }) => {
      try {
        const { userId, commentText } = input;
        const user = await User.findByPk(userId);
        if (!user) {
          throw new UserInputError("User not found");
        }
        return await Comment.create({ userId, commentText });
      } catch (error) {
        console.error("Error creating comment:", error);
        throw new Error("Failed to create comment");
      }
    },
    updateComment: async (parent, { id, commentText }) => {
      try {
        await Comment.update({ commentText }, { where: { id } });
        return await Comment.findByPk(id);
      } catch (error) {
        throw new Error("Failed to update comment");
      }
    },
    deleteComment: async (parent, { id }) => {
      try {
        const comment = await Comment.findByPk(id);
        await Comment.destroy({ where: { id } });
        return comment;
      } catch (error) {
        throw new Error("Failed to delete comment");
      }
    },
    createReply: async (parent, { input }) => {
      try {
        const { userId, commentId, replyText } = input;
        return await Reply.create({ userId, commentId, replyText });
      } catch (error) {
        throw new Error("Failed to create reply");
      }
    },
    updateReply: async (parent, { id, replyText }) => {
      try {
        await Reply.update({ replyText }, { where: { id } });
        return await Reply.findByPk(id);
      } catch (error) {
        throw new Error("Failed to update reply");
      }
    },
    deleteReply: async (parent, { id }) => {
      try {
        const reply = await Reply.findByPk(id);
        await Reply.destroy({ where: { id } });
        return reply;
      } catch (error) {
        throw new Error("Failed to delete reply");
      }
    }
  }
};

module.exports = resolvers;