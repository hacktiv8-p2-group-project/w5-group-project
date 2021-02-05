const axios = require("axios")

class CatFinderController {
  static async showAnimal(req, res, next) {
    try {
      const respond = await axios({
        method: "GET",
        url: `https://api.thecatapi.com/v1/breeds`,
        headers: {
          "x-api-key": process.env.KEY,
        },
      })
      res.status(200).json(respond.data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CatFinderController
