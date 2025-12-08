const express = require("express");
const router = express.Router();

// @route    GET api/auth
// @desc     Get all auth
// @access   Public

router.get('/', (req, res) => {
    res.send("Auth")
})

module.exports = router
