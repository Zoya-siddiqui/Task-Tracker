import mongoose from "mongoose";


const connectiontotheDB = async ()=>{
    try{


            const connect = await mongoose.connect(process.env.MONGO_URL );
            if(connect){
                console.log(`connected to the mongodb successfully ${connect.connection.host}`)
            }
    }
    catch( error){
            console.log("Error in connection mongoodb",error)
            // indicate error or failure in running code stop the node js  execution
            process.exit(1)
    }
}

export default connectiontotheDB