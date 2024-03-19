import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type : 'string',
        required : true
    },
    description:{
        type : 'string',
        required : true
    },
    user:{
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    }
})

export default mongoose.model("Post", postSchema)