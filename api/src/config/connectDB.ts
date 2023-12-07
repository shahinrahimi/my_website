import mongoose from "mongoose"

export default async () => {
    try{
        if (process.env.DATABASE_URI){
            await mongoose.connect(process.env.DATABASE_URI)
        } else {
            throw Error("DataBase URI is undefined")
        }
    } catch (error) {
        console.log(error)
    }
}