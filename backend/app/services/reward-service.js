import RewardModel from "../models/Reward.js";

//Service to add rewards for a particular user
export const addReward = async (reward) => {
    try {
        const rewardObject = new RewardModel(reward);
        return rewardObject.save();
      } catch (error) {
      }
}

//Service to fetching all rewards for a particular user
export const getAllRewards = async(params = {}) => {
    const rewards = await RewardModel.find(params).exec();
    return rewards
}

//Service to fetching a particular reward for a particular user based on ID
export const getRewardById = async(rewardId) => {
    const reward = await RewardModel.findById(rewardId).exec();
    return reward
}