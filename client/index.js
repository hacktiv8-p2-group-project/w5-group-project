$(document).ready(() => {
    auth()
    $("#linkRegister").on("click", (e) => {
        e.preventDefault()
        showRegister()
    })
    $("#linkLogin").on("click", (e) => {
        e.preventDefault()
        auth()
    })
    $("#loginform").on("submit", (e) => {
        e.preventDefault()
        login()
    })
    $("#registerform").on("submit", (e) => {
        e.preventDefault()
        register()
    })
    $("#logout").on("click", (e) => {
        e.preventDefault()
        var auth2 = gapi.auth2.getAuthInstance()
        auth2.signOut().then(function () {
            console.log("User signed out.")
        })
        localStorage.removeItem("access_token")
        Swal.fire({
            icon: "success",
            title: "You have success logout",
            backdrop: `
        rgba(0,0,123,0.4)
        url("nyat-cat.gif")
        left top
        no-repeat
      `,
            heightAuto: false,
            showConfirmButton: false,
            timer: 1500,
        })
        auth()
    })
    $("#cat_btn").click((e) => {
        e.preventDefault()
        getRandomCatPicture()
        getRandomCatFacts()
    })
    $("#cat_btn_breed").click((e) => {
        e.preventDefault()
        getRandomCatBreeds()
    })
})

const base_url = "http://localhost:3000/"

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //     toast.addEventListener("mouseenter", Swal.stopTimer)
    //     toast.addEventListener("mouseleave", Swal.resumeTimer)
    // },
})

function auth() {
    if (!localStorage.getItem("access_token")) {
        $("#loginform").show()
        $("#registerform").hide()
        $("#mainpage").hide()
        $("#navbar").hide()
    } else {
        $("#loginform").hide()
        $("#registerform").hide()
        $("#mainpage").show()
        $("#navbar").show()
    }
}

function showRegister() {
    $("#loginform").hide()
    $("#registerform").show()
    $("#mainpage").hide()
    $("#navbar").hide()
}

function login() {
    const email = $("#loginemail").val()
    const password = $("#loginpassword").val()
    $.ajax({
        url: base_url + "login",
        method: "POST",
        data: {
            email,
            password,
        },
    })
        .done((res) => {
            localStorage.setItem("access_token", res.access_token)
            Toast.fire({
                icon: "success",
                title: "Signed in success! Meaow :3",
            })
            auth()
        })
        .fail((xhr, txt) => {
            console.log(xhr.responseJSON.message, "masukkkkkkkkkkk fail")
            Swal.fire({
                icon: "error",
                title: "Wrong Email or Password",
                heightAuto: false,
            })
            $("#loginform").trigger("reset")
        })
        .always((_) => {
            console.log("always")
            $("#loginform").trigger("reset")
        })
}

function register() {
    const email = $("#registeremail").val()
    const password = $("#registerpassword").val()
    console.log(email, password)
    $.ajax({
        url: base_url + "register",
        method: "POST",
        data: {
            email,
            password,
        },
    })
        .done((res) => {
            console.log(res)
            Toast.fire({
                icon: "success",
                title: "Register success! Meaow :3",
            })
            auth()
        })
        .fail((xhr, txt) => {
            console.log(xhr, txt)
            Swal.fire({
                icon: "error",
                title: "Email already registered, please use a different one",
                heightAuto: false,
            })
            $("#registerform").trigger("reset")
        })
        .always((_) => {
            $("#registerform").trigger("reset")
        })
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
            localStorage.setItem("access_token", res.access_token)
            Toast.fire({
                icon: "success",
                title: "Signed in with google success! Meaow :3",
            })
            auth()
        })
        .fail((xhr, txt) => {
            console.log(xhr, txt)
        })
}

const cat_result = document.getElementById("cat_result")
async function getRandomCatPicture() {
    try {
        const response = await axios({
            url: base_url + `cat-pictures`,
            method: "get",
            headers: {
                access_token: localStorage.getItem("access_token"),
            },
        })
        Swal.fire({
            heightAuto: false,
            title: "Searching the glory of me....",
            text: "Meaow :3",
            showConfirmButton: false,
            timer: 1500,
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
            method: "get",
            headers: {
                access_token: localStorage.getItem("access_token"),
            },
        })
        cat_fact.innerHTML = `<h5>${response.data}</h5>`
    } catch (err) {
        throw err.message
    }
}

const cat_breeds = document.getElementById("cat_breed")
async function getRandomCatBreeds() {
    try {
        const response = await axios({
            url: base_url + `cat-finder`,
            method: "get",
            headers: {
                access_token: localStorage.getItem("access_token"),
            },
        })
        let index = Math.floor(Math.random() * 67)
        Swal.fire({
            heightAuto: false,
            title: `${response.data[index].name}`,
            html: `
            Did.... you know about me? :3 <br>
            Here's me in full glory for 5 seconds. <br>
            meaow :3
            `,
            imageUrl: `${response.data[index].image.url}`,
            imageAlt: "Custom image",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            showCloseButton: true,
        })
    } catch (err) {
        throw err.message
    }
}
