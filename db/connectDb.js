import mongoose from "mongoose";


const connectDb = async () => {
    if(mongoose.connection.readyState) return;
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    });
    console.log('Connected to MongoDB');
}

export default connectDb;