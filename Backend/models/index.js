const User = require('./User');
const Comment = require('./Comment');
const Reply = require('./Reply');

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Comment.hasMany(Reply, { foreignKey: 'commentId' });
Reply.belongsTo(Comment, { foreignKey: 'commentId' });

User.hasMany(Reply, { foreignKey: 'userId' });
Reply.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Comment, Reply };
