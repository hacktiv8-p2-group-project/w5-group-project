const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")
const CatFactsController = require("../controllers/CatFactsController.js")
const CatPictureController = require("../controllers/CatPictureController.js")

const { authenticate } = require("../middlewares/authenticate")
const { authorize } = require("../middlewares/authorize")

router.post("/register", Controller.register)

router.post("/login", Controller.login)

router.get("/cat-facts", CatFactsController.getCatFacts)

router.get("/cat-pictures", CatPictureController.getCatPicture)

module.exports = router
