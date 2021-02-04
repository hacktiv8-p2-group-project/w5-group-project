$(document).ready(() => {
    auth()
})

const base_url = "http://localhost:3000/"

function auth() {
    if (!localStorage.getItem("access_token")) {
        //
    } else {
        //
    }
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token
  $.ajax({
    url: base_url + `googleLogin`,
    method: "POST",
    data: {
      google_token: id_token,
    },
  })
    .done((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
        .done((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

// const cat_btn = document.getElementById("cat_btn")
// cat_btn.addEventListener("click", getRandomCat)

$("#cat_btn").click((e) => {
    e.preventDefault()
    getRandomCatPicture()
    getRandomCatFacts()
})

const cat_result = document.getElementById("cat_result")
async function getRandomCatPicture() {
  try {
    const response = await axios({
      url: base_url + `cat-pictures`,
      method: "get",
    })
    cat_result.innerHTML = `<img src=${response.data[0].url} alt="cat" />`
  } catch (err) {
    throw err.message
  }
}

const cat_fact = document.getElementById("cat_fact")
async function getRandomCatFacts() {
    try {
        const response = await axios({
            url: base_url + `cat-facts`,
            method: "get"
        })
        cat_fact.innerHTML = `<h3>${response.data}</h3>`
    } catch (err) {
        throw err.message
    }
}