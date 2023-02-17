import mongoose, { Schema } from "mongoose";
const trainingSchema =  new Schema
(
    {
        // EmployeeID:{
        //     type:Number,
        //     required: true,
        //     unique : true

        // },
        trainingProgram:
        {
            type:String,
            required: true
        },
        startDate:
        {
            type:String,
            required: true,
            
        },
        endDate:
        {
            type:String,
            required: true
        },
        skillAquired:
        {
            type:String,
            required: true
        }
       
    }
)

const traindev = mongoose.model("training", trainingSchema);
export default traindev;