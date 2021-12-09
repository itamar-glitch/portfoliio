const userController = require('./../controllers/user_controller');
const express = require("express")
const router = express.Router();
router
    .route('/')
    .post(userController.updateUserData)
router
    .route('/:name')
    .get(userController.getUserData)
module.exports = router