import express from 'express'
import * as blogController from '../controllers/community-blog-controller.js'

// initialize an express Router object
const router = express.Router()

//Default route for creating new blog post
router.route('/')
    .post(blogController.createBlogPost)
  

//routes for getting and updating a blog post based on campaign
router.route('/:campaignId')
    .get(blogController.getBlogPostsForCampaign)
    .patch(blogController.updateBlog)


export default router