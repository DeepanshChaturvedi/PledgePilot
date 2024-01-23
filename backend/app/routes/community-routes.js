import express from 'express'
import * as communityController from '../controllers/community-controller.js'

// initialize an express Router object
const router = express.Router()

//default route for creating new community for a campaign
router.route('/')
    .post(communityController.createCommunity)
  
//Routes for getting campaign data and updating based on id
router.route('/:id')
    .get(communityController.getCommunityData)
    .patch(communityController.updateCommunity)


export default router