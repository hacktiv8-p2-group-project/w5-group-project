# Cat Miaw Miaw App Server

## RESTful endpoints
### GET /cat-pictures

> Get a random picture of cat

_Request Header_
```
{
  "x-api-key": "<your x api key>",
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    breeds: [],
    id: 'cw8A3_95e',
    url: 'https://cdn2.thecatapi.com/images/cw8A3_95e.png',
    width: 2232,
    height: 1920
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "msg": "Internal Server Error"
}
```
---
### GET /cat-facts

> Get a random fact of cat

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
  status: { verified: true, sentCount: 1 },
  type: 'cat',
  deleted: false,
  _id: '58e008800aac31001185ed07',
  user: '58e007480aac31001185ecef',
  text: 'Wikipedia has a recording of a cat meowing, because why not?',
  __v: 0,
  source: 'user',
  updatedAt: '2020-08-23T20:20:01.611Z',
  createdAt: '2018-03-06T21:20:03.505Z',
  used: false
}
```

_Response (500 - Internal Server Error)_
```
{
  "msg": "Internal Server Error"
}
```
---
### GET /cat-finder

> Get a random breed cat

_Request Header_
```
{
  "x-api-key": "<your x api key>",
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
  {
    weight: { imperial: '12 - 18', metric: '5 - 8' },
    id: 'ycho',
    name: 'York Chocolate',
    temperament: 'Playful, Social, Intelligent, Curious, Friendly',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description: "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
    life_span: '13 - 15',
    indoor: 0,
    lap: 1,
    alt_names: 'York',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 3,
    health_issues: 1,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 4,
    stranger_friendly: 4,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/York_Chocolate',
    hypoallergenic: 0,
    reference_image_id: '0SxW2SQ_S',
    image: {
      id: '0SxW2SQ_S',
      width: 800,
      height: 1203,
      url: 'https://cdn2.thecatapi.com/images/0SxW2SQ_S.jpg'
    }
  }
]
```

_Response (500 - Internal Server Error)_
```
{
  "msg": "Internal Server Error"
}
```
---
### POST /register

> Create new user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "email": <posted email>
}
```

_Response (400 - Bad Request)_
```
{
  "msg": "Invalid requests"
}
```
---
### POST /login

> Create access token and login for existing user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
    "access_token": "<your access token>"
}
```

_Response (400 - Bad Request)_
```
{
  "msg": "Invalid requests"
}
```

_Response (401 - Unauthorized)_
```
{
  "msg": "Invalid Token"
}
```
---
### POST /googlelogin

> Create new user and login using google account

_Request Header_
```
{
  "idToken": <your google token>
  "audience": <your client id>
}
```

_Request Body_
```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200 - OK)_
```
{
  "access_token": <your access token>
}
```

_Response (201 - Created)_
```
{
  "access_token": <your access token>
}
```

_Response (400 - Bad Request)_
```
{
  "msg": "Invalid requests"
}
```