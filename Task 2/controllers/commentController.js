const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

exports.addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { text, user } = req.body; 

        const postExists = await Post.findById(postId);
        const userExists = await User.findById(user);

        if (!postExists || !userExists) {
            return res.status(404).json({ message: 'Post or User not found' });
        }

        const comment = new Comment({ text, post: postId, user });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId }).populate('user', 'username email');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};