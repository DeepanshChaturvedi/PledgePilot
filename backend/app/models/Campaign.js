import mongoose from "mongoose";
import UserModel from "./User.js";

//Schema model for Campaign
const Schema = mongoose.Schema

const CampaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    community: {
        comment: {
            id: {
                type: String,
            },
            body: {
                type: String,
            },
            owner: {
                userId: {
                    type: String,
                }
            }
        },
        blog: {
            id: {
                type: String,
            },
            body: {
                type: String,
            },
            owner: {
                userId: {
                    type: String,
                }
            }
        }
    },
    milestone: {
        target: {
            type: String,
        },
        progress: {
            type: String,
        }
    },
    payments: {
        count: {
            type: String,
        }
    }
},
{
    versionKey: false
})

const campaignModel = mongoose.model('Campaign', CampaignSchema)

export default campaignModel