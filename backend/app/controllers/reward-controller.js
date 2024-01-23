import { request, response } from "express";
import * as rewardService from '../services/reward-service.js'
import { setDataErrorResponse, setDataResponse } from "./simple-response-handler.js";


//Controller to get the rewards of the logged in user
export const getAllRewards = async (request, response) => {
    try {
        const params = { ...request.query };
        const allRewards = await rewardService.getAllRewards(params)
        setDataResponse(allRewards, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}


//Controller to get reward by it's ID
export const getRewardById = async (request, response) => {
    try {
        const rewardId = request.params.rewardId
        const reward = await rewardService.getRewardById(rewardId)
        setDataResponse(reward, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}