const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")
const CatFactsController = require("../controllers/CatFactsController.js")
const CatPictureController = require("../controllers/CatPictureController.js")
const CatFinderController = require("../controllers/catFinderController")

const { authenticate } = require("../middlewares/authenticate")
const { authorize } = require("../middlewares/authorize")

router.post("/register", Controller.register)

router.post("/login", Controller.login)

router.post("/googleLogin", Controller.googleLogin)

router.get("/cat-facts", CatFactsController.getCatFacts)

router.get("/cat-pictures", CatPictureController.getCatPicture)

router.get("/cat-finder", CatFinderController.showAnimal)

module.exports = router
