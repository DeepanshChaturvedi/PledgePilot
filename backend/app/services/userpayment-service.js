import UserPaymentModel from '../models/UserPayment.js'

//Service to get payment history for a user
export const getPaymentHistoryByUserId = async (userId) => {
    const paymentHistory = await UserPaymentModel.findOne({ userId: userId }).exec();
    return paymentHistory
}