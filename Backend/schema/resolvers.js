const {User, Finances, Fitness, Post,Comment,Reply} = require('../models')
const {GraphQLError}= require('graphql')
const {signToken} = require('../utils/auth')

const resolvers = {
  Query: {
    user: async (_, { username }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new GraphQLError('User not found');
        }
        return user;
      } catch (err) {
        throw new GraphQLError(err.message);
      }
    }}}
  
  module.exports = resolvers;