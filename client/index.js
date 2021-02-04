//@ts-check
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

// const cat_btn = document.getElementById("cat_btn")
// cat_btn.addEventListener("click", getRandomCat)

$("#cat_btn").click((e) => {
    e.preventDefault()
    getRandomCatPicture()
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
