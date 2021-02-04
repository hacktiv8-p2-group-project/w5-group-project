const axios = require('axios')

class CatFacts {
  static getCatFacts(req, res, next) {
    const amount = req.query.amount || 1
    axios({
      method: "get",
      url: `https://cat-fact.herokuapp.com/facts/random?amount=${amount}`
    })
    .then((result) => {
      const facts = result.map(element => {
        return { factText: element.text }
      })
      res.status(200).json(facts)
    })
    .catch((err) => {
      next(err)
    });
  }
}

module.exports = CatFacts