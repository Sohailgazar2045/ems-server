import mongoose from "mongoose";

const connection = () =>
{
    const url = "mongodb://127.0.0.1:27017/EMS";
    mongoose.set('strictQuery', true);
    mongoose.connect(url, (err) => {
        if (err) {
          console.error(`Failed to connect to MongoDB: ${err}`);
        } else {
          console.log("Successfully connected to MongoDB");
        }
      });
 }

 export default connection;