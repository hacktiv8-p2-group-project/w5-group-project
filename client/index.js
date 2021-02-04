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
  var id_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    url: base_url + `googleLogin`,
    method: "POST",
    data: {
      google_token: id_token
    }
  })
    .done(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}


// const cat_btn = document.getElementById("cat_btn")
// const cat_result = document.getElementById("cat_result")

// cat_btn.addEventListener("click", getRandomCat)

// function getRandomCat() {
//     fetch("https://aws.random.cat/meow")
//         .then((res) => res.json())
//         .then((data) => {
//             cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
//         })
// }

$("#cat_btn").click((e) => {
  e.preventDefault()
})
