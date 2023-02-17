import mongoose, { Schema } from "mongoose";
const payRollSchema =  new Schema
(
    {
        payPeriod:
        {
            type:String,
            required: true
        },
        salary:
        {
            type:String,
            required: true,
            
        },
        taxas:
        {
            type:String,
            required: true
        },
        deductions:
        {
            type:String,
            required: true
        },
        totallDeductions:
        {
            type:String,
            required: true
        },
        totalEarning:
        {
            type:String,
            required: true
        },
        netPay:
        {
            type:String,
            required: true
        }
    }
)

const payroll = mongoose.model("payRoll", payRollSchema);
export default payroll;