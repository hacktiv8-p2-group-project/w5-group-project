const axios = require("axios")

class CatFactsController {
    static getCatFacts(req, res, next) {
        try {
            const respond = axios({
                method: "get",
                url: `https://cat-fact.herokuapp.com/facts/random`,
            })
            console.log(respond)
            res.status(200).json(respond.text)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CatFactsController
