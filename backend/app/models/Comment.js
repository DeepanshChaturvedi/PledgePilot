import mongoose from "mongoose";
import UserModel from "./User.js";

//Schema model for comments in blog
const Schema = mongoose.Schema

const commentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    commentBody: String,
    owner: { type: Schema.Types.ObjectId, ref: UserModel }
})

const commentModel = mongoose.model('Comment', commentSchema)

export default commentModel