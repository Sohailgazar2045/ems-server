import mongoose, { Schema } from "mongoose";
const attendanceSchema =  new Schema
(
    {
        date:
        {
            type:String,
            required: true
        },
        checkInTime:
        {
            type:String,
            required: true,
            
        },
        checkOutTime:
        {
            type:String,
            required: true
        }
    }
)

const atnd = mongoose.model("Attendance", attendanceSchema);
export default atnd;