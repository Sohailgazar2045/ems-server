import mongoose, { Schema } from "mongoose";
const hiringSchema =  new Schema
(
    {
        jobID:{
            type:Number,
            required: true,
            unique : true

        },
        jobTitle:
        {
            type:String,
            required: true
        },
        jobDescription:
        {
            type:String,
            required: true,
            
        },
        applicantName:
        {
            type:String,
            required: true
        },
        interviewDate:
        {
            type:String,
            required: true
        },
        interviewer:
        {
            type:String,
            required: true
        },
        interviewerFeedback:
        {
            type:String,
            required: true
        },
        offerSalary:
        {
            type:String,
            required: true
        },
        hireDate:
        {
            type:String,
            required: true
        }
    }
)

const hire = mongoose.model("hiring", hiringSchema);
export default hire;