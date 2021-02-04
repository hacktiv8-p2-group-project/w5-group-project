//@ts-check
const express = require("express")
const router = express.Router()

const { authenticate } = require("../middlewares/authenticate")
const { authorize } = require("../middlewares/authorize")

module.exports = router
