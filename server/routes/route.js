const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

const { authenticate } = require("../middlewares/authenticate")
const { authorize } = require("../middlewares/authorize")

router.post("/register", Controller.register)

router.post("/login", Controller.login)

module.exports = router
