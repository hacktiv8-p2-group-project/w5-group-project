const axios = require("axios")

class CatNinja {
    static async showAnimal(req, res, next) {
        try {
            const respond = await axios({
                method: "GET",
                url: `https://catfact.ninja/breeds`,
            })
            res.status(200).json(respond.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CatNinja
