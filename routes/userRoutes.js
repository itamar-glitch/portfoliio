const userController = require('./../controllers/user_controller');
const express = require("express")
const router = express.Router();
router
    .route('/:name').get(userController.getUserData)
    .post(userController.updateUserData)
module.exports = router