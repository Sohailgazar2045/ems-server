import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const employeeProSchema =  new Schema
(
    {
        address:
        {
            type:String,
            required: true
        },
        dataOfBirth:
        {
            type:String,
            required: true,
            
        },
        emergencyContactInfo:
        {
            type:String,
            required: true
        },
        personalEmail:
        {
            type:String,
            required: true,
        },
        personalPhoneNumber:
        {
            type:String,
            required: true
        }
    }
)

const empP = mongoose.model("Employee", employeeProSchema);
export default empP;