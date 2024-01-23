import MilestoneModel from "../models/Milestone.js"

//Service for creating new milestone for a campaign
export const createNewMilestone = async (milestoneObj) => {
    const checkMilestone = await getMilestoneByCampaignId(milestoneObj.campaignId)
    if(checkMilestone !== null){
        await removeMilestoneByCampaignId(checkMilestone.campaignId)
    }
    const milestone = new MilestoneModel(milestoneObj)
    return milestone.save()
}

//service to fetch milestones for a particular campaign id
export const getMilestoneByCampaignId = async (campaignId) => {
    const milestone = await MilestoneModel.findOne({ campaignId: campaignId }).exec()
    return milestone
}

//service to delete milestones for a particular campaign id
export const removeMilestoneByCampaignId = async (campaignId) => {
    // call the above function to get the milestone
    const milestone = await getMilestoneByCampaignId(campaignId)
    return await MilestoneModel.findByIdAndDelete(milestone._id)
}