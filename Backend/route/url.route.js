const express = require("express");
const { genarateUrl, shortenUrl, checkUrl } = require("../helper/urlShortner");
const { authenticateUser } = require("../middleware/auth");
const urlRouter = express.Router();


urlRouter.post("/shorten",authenticateUser, shortenUrl)

urlRouter.get("/:shortUrl", checkUrl);

module.exports = {urlRouter}