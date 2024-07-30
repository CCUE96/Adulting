const { User, Comment, Reply } = require('../models');
const { UserInputError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.findAll();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    user: async (parent, { id }) => {
      try {
        return await User.findByPk(id);
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    comments: async () => {
      try {
        return await Comment.findAll();
      } catch (error) {
        throw new Error("Failed to fetch comments");
      }
    },
    comment: async (parent, { id }) => {
      try {
        return await Comment.findByPk(id);
      } catch (error) {
        throw new Error("Failed to fetch comment");
      }
    },
    replies: async () => {
      try {
        return await Reply.findAll();
      } catch (error) {
        throw new Error("Failed to fetch replies");
      }
    },
    reply: async (parent, { id }) => {
      try {
        return await Reply.findByPk(id);
      } catch (error) {
        throw new Error("Failed to fetch reply");
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
        return await User.create({ username, email, password });
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
    createComment: async (parent, { input }) => {
      try {
        const { userId, commentText } = input;
        return await Comment.create({ userId, commentText });
      } catch (error) {
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
    },
  },
  User: {
    comments: async (user) => await Comment.findAll({ where: { userId: user.id } }),
    replies: async (user) => await Reply.findAll({ where: { userId: user.id } }),
  },
  Comment: {
    user: async (comment) => await User.findByPk(comment.userId),
    replies: async (comment) => await Reply.findAll({ where: { commentId: comment.id } }),
  },
  Reply: {
    user: async (reply) => await User.findByPk(reply.userId),
    comment: async (reply) => await Comment.findByPk(reply.commentId),
  },
};

module.exports = resolvers;
