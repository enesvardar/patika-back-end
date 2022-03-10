const express = require('express');
const authController = require('../controllers/authControllers');
const { body, validationResult } = require('express-validator');
const User = require('../models/User')

const router = express.Router();

router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please Enter Your Name'),

        body('email').not().isEmpty().withMessage('Please Enter Vlid Email')
        .custom((userEmail) => {
            return User.findOne({email:userEmail}).then(user=>{
                if (user) {
                    return Promise.reject('Email is already exists!');
                }
            })
        }),

        body('password').not().isEmpty().withMessage('Please Enter A password')
    ],
    authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);


module.exports = router;