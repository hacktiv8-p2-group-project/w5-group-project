const axios = require('axios')

class CatFactsController {
  static getCatFacts(req, res, next) {
    axios({
      method: "get",
      url: `https://cat-fact.herokuapp.com/facts/random`
    })
    .then((result) => {
      res.status(200).json(result.text)
    })
    .catch((err) => {
      next(err)
    });
  }
}

module.exports = CatFactsController