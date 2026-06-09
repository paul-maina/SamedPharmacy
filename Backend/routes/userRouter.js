import express from "express"
import {addUser,getUser,updateUser,deleteUser,singleUser} from "../controllers/userControllers.js"

const router = express.Router();

router.post("/user", addUser);
router.get("/user", getUser);

router.get("/user/:id", singleUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);



export default router;

