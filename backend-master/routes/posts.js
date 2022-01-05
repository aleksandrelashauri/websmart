import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, getchoises,getchoise,createChoise  } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

router.patch('/:id/getchoises', getchoises);
router.patch('/:id/getchoise', getchoise);
router.patch('/:id/createChoise', createChoise);





export default router;