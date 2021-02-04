const axios = require("axios")
const CF_APIKEY = process.env.CF_APIKEY

class CatFinderController {
  static showAnimal(req, res, next) {
    axios({
      method: "GET",
      url: `https://api.petfinder.com/v2/animals?type=cat`,
      headers: {
        Authorization: CF_APIKEY,
      },
    })
      .then((animalsData) => {
        const { animals } = animalsData.data
        // console.log(animalsData);
        res.status(200).json(animals)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = CatFinderController
