import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true,
        minlength: 6
    },
    posts:[{
        type : mongoose.Types.ObjectId,
        ref : "Post",
        required: true,
    }]
})

export default mongoose.model("User",userSchema);
