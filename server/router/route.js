import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from "../controllers/appController.js";
import Auth, { localVariables } from "../middleware/auth.js";
import { registerMail } from "../controllers/mailer.js";

//post methods
router.route("/register").post(controller.register); //register user
 router.route('/registerMail').post(registerMail); //send mail
router.route("/authenticate").post(controller.verifyUser,(req, res) => res.end()); //auth user
router.route("/login").post(controller.verifyUser, controller.login); //login

//get methods
router.route("/user/:username").get(controller.getUser); //user with username
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP); //random otp
router.route("/verifyOTP").get(controller.verifyOTP); //verify generated otp
router.route("/createResetSession").get(controller.createResetSession); //reset all the variables

//put methods
router.route("/updateuser").put(Auth, controller.updateUser); //update user profile
router.route("/resetPassword").put(controller.verifyUser,controller.resetPassword); //reset password

router.route("/reward").patch(controller.verifyUser, controller.coinReward);

export default router;
