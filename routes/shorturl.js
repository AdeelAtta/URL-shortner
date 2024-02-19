const express = require(`express`);

const {  handleRedirectUrl, handleAddNewUrls } = require(`../controller/shorturl`)
const router = express.Router()


router.get(`/:short`, handleRedirectUrl)
    .post(`/`, handleAddNewUrls)



module.exports = router;