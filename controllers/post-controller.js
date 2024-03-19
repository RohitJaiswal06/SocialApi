import mongoose from "mongoose";
import Post from "../model/Post.js";
import User from "../model/User.js";
export const getAllPosts = async (req,res,next) =>{
    let posts;
    try{
        posts = await Post.find();
    }
    catch(err){
        console.log(err);
    }
    if(!posts){
        return res.status(404).json({message:"No posts found"})
    }
    return res.status(200).json({posts})
}

export const addPosts = async (req,res,next) =>{
    const {title,description,user} = req.body;

    let existingUser;
    try{
        existingUser = await User.findById(user)
    }
    catch(err){
      return  console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message:"User not found By this id"})
    }

    const post = new Post({
        title,
        description,
        user
    });

    try {
       const session = await mongoose.startSession();
       session.startTransaction();
       await post.save({session});
       existingUser.posts.push(post);
       await existingUser.save({session});
       await session.commitTransaction();
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message: err})
    }
    return res.status(200).json({post})
}

export const updatePost = async (req,res,next) =>{
    const postId = req.params.id;
    const {title,description} = req.body;
    let post;
    try{
        post = await Post.findByIdAndUpdate(postId,{
            title,
            description
        });
    }
    catch(err){
        console.log(err)
    }

    if(!post){ 
        return res.status(500).json({message : "Unable to update Post"})
    }

    return res.status(200).json({message : "Post updated successfully"})
}

export const getById = async (req,res,next) =>{
    const id  = req.params.id
    let post;
    try{
        post =await  Post.findById(id);
    }
    catch(err){
        console.log(err)
    }

    if(!post){
        return res.status(404).json({message : "No Post found"})
    }

    return res.status(200).json({post})
}

export const deletePost = (req, res,next) =>{
    const id = req.params.id;

    let post;
    try{
        post =  Post.findByIdAndDelete(id).populate("user");
        post.user.posts.pull(post);
        post.user.save();
    }
    catch(err){
        console.log(err)
    }

    if(!post){
        return res.status(500).json({
            message : "Unable to delete post"
        })
    }

    return res.status(200).json({message : "Post deleted successfully"})
}


export const getByUserId = async (req, res,next) => {
    const userId = req.params.id;
    let userPosts;
    try{
        userPosts = await User.findById(userId).populate("post")
    }
    catch(err){
        console.log(err)
    }

    if(!userPosts){
        return res.status(404).json({message:"No post found"})
    }
    return res.status(200).json({posts: userPosts})
}