import mongoose, { Schema } from "mongoose";
const RoleSchema =  new Schema
(
    {
    
        userName:
        {
            type:String,
            required: true
        },
        email:
        {
            type:String,
            required: true,
            
        },
        password:
        {
            type:String,
            required: true
        },
        role:
        {
            type:String,
            required: true
        }
    }
)

const perform = mongoose.model("schemaRole", RoleSchema);
export default perform;