const axios = require("axios")

class CatPictureController {
  static async getCatPicture(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.thecatapi.com/v1/images/search`,
        headers: {
          "x-api-key": process.env.X_API_KEY,
        },
      })
      res.status(200).json(response.data)
    } catch (err) {
      next(err)
    }
  }
}


module.exports = CatPictureController
