import express, { Router } from 'express';
import {
    sendPost,
    getPost,
    getPosts,
    likeIt,
    getLikeIt,
    deletePost,
    updatePost,
    getHashTagPosts
} from '../../controller/Post.controller';
import { loginRequired, uploadImage } from '../../middleware';
const router = Router()


// 카테고리 추가해야함

router.post('/sendPost', loginRequired, uploadImage.single('image'), sendPost);
router.get('/getPost', getPost);
router.get('/getPosts', getPosts);
router.get('/getHashTagPosts', getHashTagPosts);
router.put('/likeIt', loginRequired, likeIt);
router.get('/getLikeIt', getLikeIt);
router.put('/updatePost', loginRequired, updatePost);
router.delete('/deletePost', loginRequired, deletePost);

export default router