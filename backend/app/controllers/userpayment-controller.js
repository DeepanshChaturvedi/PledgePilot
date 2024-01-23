import {setDataErrorResponse, setDataResponse} from './simple-response-handler.js'
import * as userPaymentService from '../services/userpayment-service.js'


//Controller to get payment history for a user
export const getPaymentHistory = async (request, response) => {
    try {
        const userId = request.params.userId
        const paymentHistory = await userPaymentService.getPaymentHistoryByUserId(userId)
        setDataResponse(paymentHistory, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}