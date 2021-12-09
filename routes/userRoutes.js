const userController = require('./../controllers/user_controller');
const express = require("express")
const router = express.Router();
router
    .route('/:id')
    .get(userController.getUserData)
module.exports = router