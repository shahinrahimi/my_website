import mongoose from "mongoose";

interface UserInterface {
    username: string,
    password: string,
    email: string, //should implement email verification
}

const userSchema = new mongoose.Schema<UserInterface>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

export default mongoose.model<UserInterface>("User", userSchema)