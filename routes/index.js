const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        message: "Hi, google calendar example",
    })
});

module.exports.router = router;