import StripePayment from 'stripe'
import * as paymentService from '../services/payment-service.js'
import * as rewardService from '../services/reward-service.js'
import { setDataErrorResponse, setDataResponse } from './simple-response-handler.js';
import { response } from 'express';

//Controller to initialize and handle stripe API
export const stripePaymentHandler = async (request, response) => {
    const stripe = StripePayment(process.env.ADMIN_STRIPE_SECRET_KEY)
    try{
        const { token, donationAmount } = request.body
        const payment = await paymentService.stripePaymentService(token, donationAmount, request, response, stripe)
        // setDataResponse(payment, response)
    } catch (error) {
        // setDataErrorResponse(error, response)
    }  
}

//Controller to add payment information in database
export const addPaymentToPaymentDB = async (request, response) => {
    try {
        const newPayment = {...request.body}
        // update stripe backend with the payment
        // update Payment DB of the app
        const payment = await paymentService.createPayment(newPayment)
        // update reward DB
        const reward = {
            paymentId: payment._id,
            campaign: payment.campaignName,
            rewardedTo: payment.paidBy,
            rewardAmt: payment.rewardGenerated,
            txnDate: payment.txnDate
        }
        const rewardResponse = await rewardService.addReward(reward)
        // update totalDonations (Number), [payments (payment._id)], rewards (Number) fields in userPayments DB
        try{ 
            const userPaymentResponse = await paymentService.addUserPayment(payment)
        } catch (error){
        }
        //update payments received field of campaign DB
        try {
            const campaignPaymentResponse = await paymentService.addCampaignPayment(payment)
        } catch (error) {
        }        
        setDataResponse(payment, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

export const getPaymentById = async (request, response) => {
    try {
        const payment = await paymentService.getPaymentById(request.params.payId)
        setDataResponse(payment, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}