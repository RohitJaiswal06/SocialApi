import express from 'express';
const postrouter = express.Router();
import {addPosts, deletePost, getAllPosts, getById, getByUserId, updatePost} from "../controllers/post-controller.js"

postrouter.get('/', getAllPosts);
postrouter.post('/add',addPosts);
postrouter.put('/update/:id', updatePost)
postrouter.get('/:id', getById);
postrouter.delete('/delete/:id', deletePost);
postrouter.get('/users/:id', getByUserId)
export default postrouter;