const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");

const User = require("../../models/User");

// @route    GET api/auth
// @desc     Get all auth
// @access   Public

router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);

    }catch(err){
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/', [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
] , async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: "Invalid Credentials"});
    }
    const {email, password} = req.body;

    try{
        const user = await User.findOne({ email });
        if (!user){
            return res.status(400).json({msg: "User not found"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: "password did not match"});
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get("jwtSecret"), // imported from custom-environment-variables.json
            {expiresIn: 360000},
            (err, token) => {
                if(err) throw err;
                res.json({ token});
            }
        )

    }catch(err){
        console.error(err.message);
        res.status(500).send("Internal server Error");
    }


})

module.exports = router
