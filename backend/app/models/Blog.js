import mongoose from "mongoose";
import UserModel from "./User.js";
import campaign from './Campaign.js';

//Schema model for Blogs
const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogTitle: String,
    blogBody: String,
    owner: { type: Schema.Types.ObjectId, ref: UserModel },
    campaignID: String
})

const blogModel = mongoose.model('Blog', blogSchema)

export default blogModel
