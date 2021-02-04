const axios = require('axios');
const CF_APIKEY = process.env.CF_APIKEY

class CatFinderController {

    static showAnimal(req,res,next){
        axios({
            method: "GET",
            url:`https://api.petfinder.com/v2/animals?type=cat`,
            headers:{
            Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCRlI4amtVZmJWSUtQNlpXOHBmOUxjZkVucGRYNEF4eTdBME1NcEFGQXJUb1ZPUFNhWCIsImp0aSI6ImIzYmU3ZTlmN2RiN2NhN2Q3NjhmYTI3MjYwYmMxOTVkMDk0YjIwY2IyZGI1NWY1OWJhNzQ2ODVkMDNiNTU2NmJlNjQyOTJiZDZiOGRlNTlkIiwiaWF0IjoxNjEyNDQzNDE1LCJuYmYiOjE2MTI0NDM0MTUsImV4cCI6MTYxMjQ0NzAxNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.F5SNcPptGBW2Yxat4ckAT7nf7L3oMDTzyOkJflK_91VUGaRORGC6T4WQLaXCtjy5_VVnSiqD6cprUqg6DM9VLv5G1ttDhhPPPujF5FqBvydc_xKaCEPc5W8T43RRvRPPQvxkwU7cLLU7pAAPyKvEYScmszmP5P2DJtHUHSoTTRH2tstSVm9AH0srmykJ0Fn9qVKeWB4J6LrZGJ-_ueBnEJ75BpMuZgR2gWcSbXiDmVOEygFvcTyKTOJFGKhtVQOGqP3UttFrkzDUQ04fFte-8vZqbPSNry32PuoOaNMg0UnijStWIzBiFMj0BtxKa7lTPzdJQr65BAsFjh_AW0JZfA"
            }
        })
            .then((animalsData)=>{
                const {animals} = animalsData.data
                // console.log(animalsData);
                res.status(200).json(animals)
            })
            .catch((err)=>{
                next(err)
            })
    }
}

module.exports = CatFinderController