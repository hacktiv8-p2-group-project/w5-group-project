//@ts-check
// @ts-ignore
const { User } = require("../models")
const { hashPass, comparePass } = require("../helpers/bcrypt")
const { generateToken, decoded } = require("../helpers/jwt")
const { OAuth2Client } = require("google-auth-library")

class Controller {
    //
}

module.exports = Controller
