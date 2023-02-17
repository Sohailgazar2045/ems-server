import { mongoose,  Schema } from "mongoose";
const employeeSchema =  new Schema
(
    { 
        firstName:
        {
            type:String,
            required: true
        },
        lastName:
        {
            type:String,
            required: true
        },
        jobTitle:
        {
            type:String,
            required: true
        },
        department:
        {
            type:String,
            required: true
        },
        contactInformation:
        {
            type:String,
            required: true
        },
        dateOfHire:
        {
            type:Date,
            required: true
        }
    }
);

const empD = mongoose.model("EmployeeDirectry", employeeSchema);
export default empD;