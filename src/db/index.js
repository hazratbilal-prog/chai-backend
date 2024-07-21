import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDb=async()=>{
    try {
      const ConnectionInstance=await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(ConnectionInstance.connection.host)
    } catch (error) {
         console.log("mongodb connection FAILED:",error)
         process.exit(1)
    }
}
export default connectDb