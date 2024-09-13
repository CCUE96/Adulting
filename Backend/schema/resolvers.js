const { User, Comment, Reply } = require("../models");
const { signToken, checkPassword } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      try {
        const allUsers = await User.find().populate('comments').populate('replies');
        return allUsers.map(user => ({
          id: user._id.toString(),
          username: user.username,
          email: user.email,
          profilePicture: user.profilePicture || '',
          bio: user.bio || '',
          comments: user.comments.map(comment => ({
            id: comment._id.toString(),
            commentText: comment.commentText,
            userId: comment.userId.toString(),
            postId: comment.postId.toString(),
          })),
          replies: user.replies.map(reply => ({
            id: reply._id.toString(),
            content: reply.content,
            username: reply.username,
            userId: reply.userId.toString(),
            commentId: reply.commentId.toString(),
          })),
          createdAt: user.createdAt ? user.createdAt.toISOString() : null,
          updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
        }));
      } catch (error) {
        console.error("Error fetching users:", error.message);
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
    },
    user: async (parent, { id }) => {
      try {
        console.log(`Fetching user with ID: ${id}`);

        const individualUser = await User.findById(id)
          .populate('comments')
          .populate('replies');

        if (!individualUser) {
          throw new Error("User not found");
        }

        return {
          id: individualUser._id.toString(),
          username: individualUser.username,
          email: individualUser.email,
          profilePicture: individualUser.profilePicture || '',
          bio: individualUser.bio || '',
          comments: individualUser.comments.map(comment => ({
            id: comment._id.toString(),
            commentText: comment.commentText,
            userId: comment.userId.toString(),
            postId: comment.postId.toString(),
          })),
          replies: individualUser.replies.map(reply => ({
            id: reply._id.toString(),
            content: reply.content,
            username: reply.username,
            userId: reply.userId.toString(),
            commentId: reply.commentId.toString(),
          })),
          createdAt: individualUser.createdAt ? individualUser.createdAt.toISOString() : null,
          updatedAt: individualUser.updatedAt ? individualUser.updatedAt.toISOString() : null,
        };
      } catch (error) {
        console.error(`Error finding user with ID ${id}:`, error.message);
        throw new Error(`Failed to fetch user by ID: ${error.message}`);
      }
    },
    comments: async () => {
      try {
        const allComments = await Comment.find().populate('userId');
        return allComments.map(comment => ({
          id: comment._id.toString(),
          commentText: comment.commentText,
          user: {
            id: comment.userId._id.toString(),
            username: comment.userId.username,
          },
          createdAt: comment.createdAt ? comment.createdAt.toISOString() : null,
        }));
      } catch (error) {
        console.error("Error fetching comments:", error.message);
        throw new Error(`Failed to fetch comments: ${error.message}`);
      }
    },
    comment: async (parent, { id }) => {
      try {
        const singleComment = await Comment.findById(id).populate('userId');
        if (!singleComment) {
          throw new Error("Comment not found");
        }
        return {
          id: singleComment._id.toString(),
          commentText: singleComment.commentText,
          user: {
            id: singleComment.userId._id.toString(),
            username: singleComment.userId.username,
          },
          createdAt: singleComment.createdAt ? singleComment.createdAt.toISOString() : null, 
        };
      } catch (error) {
        console.error(`Error fetching comment with ID ${id}:`, error.message);
        throw new Error(`Failed to fetch comment by ID: ${error.message}`);
      }
    },
    replies: async () => {
      try {
        const allReplies = await Reply.find().populate('userId');
        return allReplies.map(reply => ({
          id: reply._id.toString(),
          content: reply.content,
          createdAt: reply.createdAt ? reply.createdAt.toISOString() : null, 
          username: reply.username,
          userId: reply.userId.toString(),
          commentId: reply.commentId.toString(),
        }));
      } catch (error) {
        console.error("Error fetching replies:", error.message);
        throw new Error(`Failed to fetch replies: ${error.message}`);
      }
    },
    reply: async (parent, { id }) => {
      try {
        const singleReply = await Reply.findById(id).populate('userId');
        if (!singleReply) {
          throw new Error("Reply not found");
        }
        return {
          id: singleReply._id.toString(),
          content: singleReply.content,
          createdAt: singleReply.createdAt ? singleReply.createdAt.toISOString() : null,
          username: singleReply.username,
          userId: singleReply.userId.toString(),
          commentId: singleReply.commentId.toString(),
        };
      } catch (error) {
        console.error(`Error fetching reply with ID ${id}:`, error.message);
        throw new Error(`Failed to fetch reply by ID: ${error.message}`);
      }
    },
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      try {
        const { username, email, password } = input;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("Email already in use");
        }
        const user = new User({ username, email, password });
        const savedUser = await user.save();
        const token = signToken(savedUser);
        return { 
          token, 
          user: {
            id: savedUser._id.toString(),
            username: savedUser.username,
            email: savedUser.email,
            profilePicture: savedUser.profilePicture || '', 
            bio: savedUser.bio || '', 
            createdAt: savedUser.createdAt ? savedUser.createdAt.toISOString() : null, 
            updatedAt: savedUser.updatedAt ? savedUser.updatedAt.toISOString() : null,
          }
        };
      } catch (error) {
        console.error("Error creating user:", error.message);
        throw new Error(`Failed to create user: ${error.message}`);
      }
    },
    updateUser: async (parent, { id, input }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(id, input, { new: true }).populate('comments').populate('replies');
        if (!updatedUser) {
          throw new Error("User not found");
        }
        return {
          id: updatedUser._id.toString(),
          username: updatedUser.username,
          email: updatedUser.email,
          profilePicture: updatedUser.profilePicture || '', 
          bio: updatedUser.bio || '', 
          comments: updatedUser.comments.map(comment => ({
            id: comment._id.toString(),
            commentText: comment.commentText,
            userId: comment.userId.toString(),
            postId: comment.postId.toString(),
          })),
          replies: updatedUser.replies.map(reply => ({
            id: reply._id.toString(),
            content: reply.content,
            username: reply.username,
            userId: reply.userId.toString(),
            commentId: reply.commentId.toString(),
          })),
          createdAt: updatedUser.createdAt ? updatedUser.createdAt.toISOString() : null,
          updatedAt: updatedUser.updatedAt ? updatedUser.updatedAt.toISOString() : null, 
        };
      } catch (error) {
        console.error(`Error updating user with ID ${id}:`, error.message);
        throw new Error(`Failed to update user: ${error.message}`);
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error("User not found");
        }
        await user.remove();
        return {
          id: user._id.toString(),
          username: user.username,
          email: user.email,
        };
      } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error.message);
        throw new Error(`Failed to delete user: ${error.message}`);
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Incorrect email or password");
        }
        const valid = await checkPassword(password, user.password);
        if (!valid) {
          throw new Error("Incorrect email or password");
        }
        const token = signToken(user);
        return { 
          token, 
          user: {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture || '',
            bio: user.bio || '',
            createdAt: user.createdAt ? user.createdAt.toISOString() : null,
            updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
          }
        };
      } catch (error) {
        console.error("Error logging in:", error.message);
        throw new Error(`Login failed: ${error.message}`);
      }
    },
    createComment: async (parent, { input }) => {
      try {
        const { commentText, userId, postId } = input;
        const newComment = new Comment({ commentText, userId, postId });
        const savedComment = await newComment.save();
        return {
          id: savedComment._id.toString(),
          commentText: savedComment.commentText,
          userId: savedComment.userId.toString(),
          postId: savedComment.postId.toString(),
          createdAt: savedComment.createdAt ? savedComment.createdAt.toISOString() : null,
        };
      } catch (error) {
        console.error("Error creating comment:", error.message);
        throw new Error(`Failed to create comment: ${error.message}`);
      }
    },
    updateComment: async (parent, { id, input }) => {
      try {
        const updatedComment = await Comment.findByIdAndUpdate(id, input, { new: true });
        if (!updatedComment) {
          throw new Error("Comment not found");
        }
        return {
          id: updatedComment._id.toString(),
          commentText: updatedComment.commentText,
          userId: updatedComment.userId.toString(),
          postId: updatedComment.postId.toString(),
          createdAt: updatedComment.createdAt ? updatedComment.createdAt.toISOString() : null,
        };
      } catch (error) {
        console.error(`Error updating comment with ID ${id}:`, error.message);
        throw new Error(`Failed to update comment: ${error.message}`);
      }
    },
    deleteComment: async (parent, { id }) => {
      try {
        const comment = await Comment.findById(id);
        if (!comment) {
          throw new Error("Comment not found");
        }
        await comment.remove();
        return {
          id: comment._id.toString(),
          commentText: comment.commentText,
        };
      } catch (error) {
        console.error(`Error deleting comment with ID ${id}:`, error.message);
        throw new Error(`Failed to delete comment: ${error.message}`);
      }
    },
    createReply: async (parent, { input }) => {
      try {
        const { content, userId, commentId } = input;
        const newReply = new Reply({ content, userId, commentId });
        const savedReply = await newReply.save();
        return {
          id: savedReply._id.toString(),
          content: savedReply.content,
          userId: savedReply.userId.toString(),
          commentId: savedReply.commentId.toString(),
          createdAt: savedReply.createdAt ? savedReply.createdAt.toISOString() : null,
        };
      } catch (error) {
        console.error("Error creating reply:", error.message);
        throw new Error(`Failed to create reply: ${error.message}`);
      }
    },
    updateReply: async (parent, { id, input }) => {
      try {
        const updatedReply = await Reply.findByIdAndUpdate(id, input, { new: true });
        if (!updatedReply) {
          throw new Error("Reply not found");
        }
        return {
          id: updatedReply._id.toString(),
          content: updatedReply.content,
          userId: updatedReply.userId.toString(),
          commentId: updatedReply.commentId.toString(),
          createdAt: updatedReply.createdAt ? updatedReply.createdAt.toISOString() : null,
        };
      } catch (error) {
        console.error(`Error updating reply with ID ${id}:`, error.message);
        throw new Error(`Failed to update reply: ${error.message}`);
      }
    },
    deleteReply: async (parent, { id }) => {
      try {
        const reply = await Reply.findById(id);
        if (!reply) {
          throw new Error("Reply not found");
        }
        await reply.remove();
        return {
          id: reply._id.toString(),
          content: reply.content,
        };
      } catch (error) {
        console.error(`Error deleting reply with ID ${id}:`, error.message);
        throw new Error(`Failed to delete reply: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
