let link = ""
let users = []
let brandSelect = ""
let brand;
// name filter





async function galleryPreparation() {

    const search = document.getElementById('search2')
    const brandResponse = await fetch('json/brand.json'); // grab json
    const brandData = await brandResponse.json(); // wait for json and make it data

    brandData.forEach(function (datajson) {  
        search.innerHTML += `
        <option value="${datajson.brand}">${datajson.brand}</option>
        `
    })

    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    const gallery = document.getElementById('gallery')



    skinData.slice().reverse().forEach(function (skin) {

        //console.log(skin.id)
        gallery.innerHTML += `
        <a class="gallery-link" id="gallery-${skin.id}" href="#${skin.id}">
            <button class="gallery-btn" id="${skin.id}" onclick="viewer();">
            <div class="card-bg"></div>
            <div class="gallery-fade"></div>
            <img class="gallery-img" src="https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${skin.id}.png">
                <div>${skin.english} <br> <span class="gallery-sub">${skin.skinnameenglish}</span></div>
            </button>
        </a>`
        const icon = document.getElementById(`gallery-${skin.id}`)
        users.push({ name: skin.fullenglish, brand: skin.brand, element: icon })
    })
    console.log("users finished")
    //console.log(users) 
    const gallerySub = document.querySelectorAll('.gallery-sub')
    gallerySub.forEach(element => {
        if (element.innerHTML.length > 25) {
            element.style.fontSize = "14px";
        }
    });
} galleryPreparation()

async function gallery() {

    // name filter
    document.getElementById("gallery-gavialalter1").classList.add("amogsdgsdsdgkj")
    const searchInput = document.getElementById("search")
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        console.log("e", e)

        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) && user.brand.includes(brandSelect)
            const sugmaball = document.getElementById(user.element.id)
            sugmaball.classList.toggle("hide2", !isVisible)

        })
    })

    // brand filter
    const brandFilter = document.getElementById("search2")
    brandFilter.addEventListener("change", b => {
        brand = document.getElementById('search2').value
        brandSelect = brand
        users.forEach(user => {
            const isVisible = user.brand.includes(brand)
            const sugmaball = document.getElementById(user.element.id)
            sugmaball.classList.toggle("hide2", !isVisible)
        })
    })

    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    const galleryCbox = document.getElementById('gallery-btn')
    const planner = document.getElementById('planner')
    const gallery = document.getElementById('gallery')
    const headerGallery = document.getElementById('header-gallery')
    const headerGalleryImg = document.getElementById('header-gallery-img')

    if (galleryCbox.checked == true) {
        planner.style.display = "none"
        gallery.style.display = "flex"
        headerGallery.innerHTML = "planner"
        headerGalleryImg.src = "svg/planner.svg"
    } else {
        planner.style.display = "flex"
        gallery.style.display = "none"
        headerGallery.innerHTML = "gallery"
        headerGalleryImg.src = "svg/gallery.svg"
    }

    if (galleryCbox.checked == true) {

        const galleryBtn = document.querySelectorAll('.gallery-btn')
        galleryBtn.forEach((btn) => {
            btn.addEventListener('click', function () {
                console.log(btn.id)
                link = btn.id
                viewer();
            })
        })
    }
}

const viewerDiv = document.getElementById('viewer')

async function viewer() {
    let amogus = "skadi2"

    var hash = window.location.hash.substring(1);
    if (link == "") { link = hash }
    console.log('mogus')
    const skinName = document.getElementById("skin-name")
    const skinIcon = document.getElementById("skin-icon")
    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    skinData.forEach(function (skin) {
        console.log('link', link)
        if (skin.id == link) {
            viewerDiv.style.display = "flex"
            skinName.innerHTML = `${skin.id}`
            skinIcon.src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${skin.id}.png`
        }
    })
}

function quitViewer() {
    viewerDiv.style.display = "none"


}
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("AAAAAAAAAAAAAAAAAAAA")
// })


