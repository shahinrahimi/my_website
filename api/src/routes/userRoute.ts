import express from "express"
import userController from "../controllers/userController"
const router = express.Router()

router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createNewUser)

router.route("/:id")
    // .patch(userController.updateUser)
    .delete(userController.deleteUser)


export default router;