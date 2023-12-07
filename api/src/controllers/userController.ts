import User from "../model/User";
import bcrypt from "bcrypt"
import { Request, Response } from "express"
import { isValidObjectId } from "mongoose";

const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find().select('-password').exec()

    return res.status(200).json(users)
}

const createNewUser = async (req: Request, res: Response) => {
    const {
        username,
        password,
        email,
    } = req.body

    if (!username || !password || !email){
        return res.status(400).json({ message : "All fields required"})
    }

    const duplicateUser = await User.findOne({ username: username }).lean().exec()
    if(duplicateUser){
        return res.status(409).json({ message: "Duplicate username"})
    }

    const duplicateEmail = await User.findOne({ email: email }).lean().exec()
    if(duplicateEmail){
        return res.status(409).json({ message: "Duplicate email"})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username: username,
        password: hashPassword,
        email: email
    })

    if (!newUser){
        return res.status(400).json({ message: 'Invalid user data received'})
    }

    res.status(201).json({ message : `New user ${username} created`})

}

const updateUser = async (req: Request, res:Response) => {
    const { id } = req.params

    if (!id || !isValidObjectId(id)){
        return res.status(400).json({ message: "Required param or unvalid Id"})
    }

    const user = await User.findById(id).select("-password").lean().exec()
    if (!user){
        return res.status(400).json({ message: "User Id not found"})
    }

    res.json(user)
}

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    if (!id || !isValidObjectId(id)){
        return res.status(400).json({ message: "Required param or unvalid Id"})
    }

    const user = await User.findById(id).select("-password").exec()

    if (!user){
        return res.status(400).json({ message: "User not found"})
    }

    const result = await user.deleteOne()

    res.json({ message: `User with username ${user.username} is deleted`})
}

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}