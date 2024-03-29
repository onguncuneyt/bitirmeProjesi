const express = require("express");

const userController = require("../controllers").userController;

const router = express.Router();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.get("/list-all", userController.listAllUser);
router.post("/change-email", userController.changeEmail);
router.post("/change-password", userController.changePassword);
router.post("/email-verificaction", userController.userEmailVerification);
router.post("/email-resend", userController.userEmailResend);

module.exports = router;
