const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

router.post('/users/register', userController.registerUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/tag/:tag', postController.getPostsByTag); 
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

router.post('/posts/:postId/comments', commentController.addComment);
router.get('/posts/:postId/comments', commentController.getCommentsByPost);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;