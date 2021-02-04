const axios = require("axios")

class CatFactsController {
  static async getCatFacts(req, res, next) {
    try {
      const respond = await axios({
        method: "get",
        url: `https://cat-fact.herokuapp.com/facts/random`,
      })
      console.log(respond)
      res.status(200).json(respond.data.text)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CatFactsController
