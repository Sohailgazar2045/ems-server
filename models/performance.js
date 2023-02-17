import mongoose, { Schema } from "mongoose";
const performanceSchema =  new Schema
(
    {
        // EmployeeID:{
        //     type:Number,
        //     required: true,
        //     unique : true

        // },
        evaluationPeriod:
        {
            type:String,
            required: true
        },
        manager:
        {
            type:String,
            required: true,
            
        },
        goals:
        {
            type:String,
            required: true
        },
        objrctives:
        {
            type:String,
            required: true
        },
        jobDuties:
        {
            type:String,
            required: true
        },
        performanceRating:
        {
            type:String,
            required: true
        },
        feedBack:
        {
            type:String,
            required: true
        }
    }
)

const perform = mongoose.model("performance", performanceSchema);
export default perform;