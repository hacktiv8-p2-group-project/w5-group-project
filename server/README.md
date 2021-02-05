# Cat Miaw Miaw App Server

Postman Published Documentation: https://documenter.getpostman.com/view/14405106/TW73G6PH

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
### GET /cat-breed

> Get a random breed cat

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
  "current_page": 1,
  "data": [
      {
          "breed": "Abyssinian",
          "country": "Ethiopia",
          "origin": "Natural/Standard",
          "coat": "Short",
          "pattern": "Ticked"
      },
      ...
      ...
  ]
}
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