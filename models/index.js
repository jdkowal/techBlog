const User = require('./user');
const Comment = require('./comment');
const Post = require('./blog-post');

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});


module.exports = { User, Comment, Post };
