import express from 'express'
import * as campaignpaymentsController from '../controllers/campaignpayments-controller.js'

const router = express.Router()

//Routes for fetching payments for a campaign
router.route('/:campaignId')
    .get(campaignpaymentsController.getPaymentInfo)

export default router