const { User } = require("../models")
const { comparePass } = require("../helpers/bcrypt")
const { generateToken, decoded } = require("../helpers/jwt")
const { OAuth2Client } = require("google-auth-library")

class Controller {
    static register(req, res, next) {
        const { email, password } = req.body
        User.create({ email, password })
            .then((data) => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email,
            },
        }).then((user) => {
            if (!user) {
                throw {
                    name: "CustomError",
                    status: 400,
                    message: "Wrong Username/Password",
                }
            }

            let compared = comparePass(password, user.password)
            if (!compared) {
                throw {
                    name: "CustomError",
                    status: 400,
                    message: "Wrong Username/Password",
                }
            } else {
                const access_token = generateToken({
                    id: user.id,
                    email: user.email,
                })
                res.status(200).json({ access_token })
            }
        })
    }

    static googleLogin(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = ""
        client
            .verifyIdToken({
                idToken: req.body.google_token,
                audience: process.env.CLIENT_ID,
            })
            .then((ticket) => {
                const payload = ticket.getPayload()
                // email = payload.email
                console.log(payload, "ini payload")
                return User.findOne({ where: { email: payload.email } })
            })
            .then((user) => {
                if (!user) {
                    console.log("Registering with google")
                    return User.create({ email, password: process.env.SECRET_GOOGLE })
                } else {
                    const access_token = generateToken({
                        id: registeredUser.id,
                        email: registeredUser.email,
                    })
                    res.status(200).json(access_token)
                }
            })
            .then((registeredUser) => {
                console.log("Logining with google")
                const access_token = generateToken({
                    id: registeredUser.id,
                    email: registeredUser.email,
                })
                res.status(201).json(access_token)
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = Controller
