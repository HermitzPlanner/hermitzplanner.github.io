const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const brandFilter = document.querySelector("[data-search2]")

let brandSelect = ""
let brand;
let users = []

// brand filter
brandFilter.addEventListener("change", b => {
  brand = document.getElementById('search2').value
  brandSelect = brand
  users.forEach(user => {
    const isVisible = user.brand.includes(brand)
    user.element.classList.toggle("hide2", !isVisible)
  })
})

// name filter
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) && user.brand.includes(brandSelect)
    user.element.classList.toggle("hide2", !isVisible)
  })
})

//async function galleryfetch() {
fetch("json/skins.json")
  .then(res => res.json())
  .then(data => {
    users = data.slice().reverse().map(user => {

      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const inputt = card.querySelector("[data-input]")
      const label = card.querySelector("[data-input-label]")

      inputt.id = `ban_${user.id}`
      header.id = `gallery_icon_${user.id}`
      inputt.addEventListener('change', tururu)
      function tururu() {

        speed.value = 1;
        skin = ''
        var img = document.getElementById('full-image');
        img.style.transform = 'scale(1)';
        img.style.top = '0'
        img.style.left = '0'

        perspective = 'front'
        perspectiveSelector.value = 'front'
        const h1 = document.getElementById('full-image-container');
        h1.style.display = 'flex';
        //document.getElementById('full-image').src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/art/${user.id}.png`
        document.getElementById('full-image').src = `${user.art}`

        skin = `${user.code}`
        char = `${user.codechar}`

        var scale = 1;

        img.addEventListener('wheel', function (e) {
          e.preventDefault();
          var delta = e.deltaY || e.detail || e.wheelDelta;

          if (delta < 0) {
            // zoom in
            scale += 0.1;
          } else {
            // zoom out if scale is greater than the minimum value
            if (scale > 0.5) {
              scale -= 0.1;
            }
          }
          img.style.transform = 'scale(' + scale + ')';
        });


        // Define variables to store the starting mouse position and image position
        let startX = 0;
        let startY = 0;
        let imageX = 0;
        let imageY = 0;

        // Attach an event listener to the image to track mouse movements
        img.addEventListener('mousedown', e => {
          startX = e.clientX;
          startY = e.clientY;
          imageX = img.offsetLeft;
          imageY = img.offsetTop;
          document.addEventListener('mousemove', moveImage);
        });

        // Function to move the image
        function moveImage(e) {
          const deltaX = e.clientX - startX;
          const deltaY = e.clientY - startY;
          img.style.left = `${imageX + deltaX}px`;
          img.style.top = `${imageY + deltaY}px`;
        }

        // Detach the event listener when the mouse button is released
        document.addEventListener('mouseup', e => {
          document.removeEventListener('mousemove', moveImage);
        });

        document.getElementById('gallery_view-english').innerHTML = user.fullenglish
        document.getElementById('gallery_view-icon').src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${user.id}.png`
        document.getElementById('gallery_view-brand').innerHTML = user.brand
        document.getElementById('gallery_view-release').innerHTML = user.release
        document.getElementById('gallery_view-release-global').innerHTML = user.releaseGlobal
        document.getElementById('gallery_view-skinnameenglish').innerHTML = user.skinnameenglish

        if (user.price < 15 || user.price > 24) {
          document.getElementById('gallery_view-price').innerHTML = user.token
          document.getElementById('gallery_view-currency').src = user.currency
          //document.querySelector('.currency-div img').style.padding = '.25rem';
        } else {
          document.getElementById('gallery_view-price').innerHTML = user.price
          document.getElementById('gallery_view-currency').src = user.currency
          //document.querySelector('.currency-div').style.padding = '0';

        }

        document.getElementById('gallery_view-obtain').innerHTML = user.obtain
        document.getElementById('gallery_view-artist').innerHTML = user.artist

        let chibiwidth = document.getElementById("chibi").offsetWidth;
        let chibiheight = document.getElementById("chibi").offsetHeight;
        app.renderer.resize(chibiheight, app.renderer.height);
        app.renderer.resize(chibiwidth, app.renderer.width);

        animationUpdate();
        charaSelect();

        loadCircle();

      }
      label.htmlFor = `ban_${user.id}`
      //header.src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${user.id}.png`
      //header.src = `${user.icon}`

      body.textContent = user.id

      //if(whitelist.indexOf(user.skinname) !== -1){
      userCardContainer.append(card)
      //} 

      return { name: user.id, brand: user.brand, element: card }
    })
  })
//}

let skin
let char
let skinSpine
let perspective = 'front'
let folder;
let newFolder;
let animationList = []
const perspectiveSelector = document.getElementById('perspective')
const animationSelector = document.getElementById('animation')
let animation;

const pixelEquivalent = window.innerWidth / 100;
const vwValueInPixels = pixelEquivalent * 18; // convert 1vw to pixels
const chibicont = document.getElementById('chibi-container')
let speed = document.getElementById('speed')


const app = new PIXI.Application({

  width: 800,
  height: 600,
  backgroundAlpha: 0,
  //background: 0x000000,
  premultiplyAlpha: true,
  antialias: true,

});

document.getElementById('chibi').appendChild(app.view);

function loadCircle() {
  const circle = new PIXI.Graphics();
        circle.lineStyle(5, 0xffffff);
        circle.moveTo(25, 0);
        circle.arc(0, 0, 25, 0, 1);
        circle.moveTo(25, 0);
        circle.arc(0, 0, 25, 0, -1);
        circle.x = app.renderer.width / 2;
        circle.y = app.renderer.height / 2;
        app.stage.addChild(circle);

        app.ticker.add(() => {
          circle.rotation += 0.1;
        });
}


function folderUpdate() {
  perspective = perspectiveSelector.value
  if (perspective == "build") {
    folder = `https://raw.githubusercontent.com/HermitzPlanner/planner-assets/main/${char}/${perspective}/build_${skin}`
  } else {
    folder = `https://raw.githubusercontent.com/HermitzPlanner/planner-assets/main/${char}/${perspective}/${skin}`
  }
}

function animationUpdate() {
  animationSelector.innerHTML = '<option selected disabled value="Animation">Animation</option>'
}

function charaSelect() {
  app.stage.removeChildren()
  loadCircle();
  folderUpdate();
  pixi()
}


function pixi() {




  PIXI.Assets.load(`${folder}.skel`).then(onAssetsLoaded);

  function onAssetsLoaded(skinAsset) {
    app.stage.removeChildren()
    skinSpine = new PIXI.spine.Spine(skinAsset.spineData);


    const skinSpineAnimations = skinSpine.spineData.animations
    var stringAnimations = "";
    for (var i = 0; i < skinSpineAnimations.length; i++) {
      //animationSelector.innerHTML += "<option value=\"" + skinSpineAnimations[i].name + "\">" + skinSpineAnimations[i].name + "</option>";
      animationSelector.innerHTML += `<option value="${skinSpineAnimations[i].name}">${skinSpineAnimations[i].name}</option>`;
    }

    skinSpine.x = app.screen.width / 2;
    skinSpine.y = app.screen.height;
    let timeScale = 1
    speed.addEventListener('change', function(){
      timeScale = speed.value
    })
    skinSpine.alpha = 1;
    skinSpine.scale.set(.5)
    app.stage.addChild(skinSpine);
    skinSpine.state.timeScale = 0.25;
    app.ticker.add(() => {
      skinSpine.state.timeScale = timeScale; // Update the time scale of the animation
      
    });

    const backpers = document.getElementById('backpers')
    if (skin == 'char_101_sora_epoque_17' ||
      skin == 'char_101_sora_summer_1' ||
      skin == 'char_291_aglina_summer_5' ||
      skin == 'char_291_aglina_boc_1' ||
      skin == 'char_1012_skadi2_boc_4') {
      backpers.style.display = 'none'
    } else {
      backpers.style.display = 'flex'
    }

    if (perspective == 'front' || perspective == 'back') {
      if (skin == 'char_214_kafka_snow_3' || skin == 'char_401_elysm_snow_2') {
        skinSpine.state.setAnimation(0, 'Idle', true);
      } else {
        skinSpine.state.setAnimation(0, 'Start', false);
        // listen for the end of animation "a"
        //skinSpine.state.addListener({
        //complete: function () {
        //skinSpine.state.setAnimation(0, 'Idle', true);
        //}
        //})
        skinSpine.state.addListener({
          complete: (trackEntry) => {
            if (trackEntry.animation.name === "Start") {
              skinSpine.state.setAnimation(0, "Idle", false); // start playing animation_b once animation_a ends
            }
          }
        });
      }

    } else {
      skinSpine.state.setAnimation(0, 'Relax', true);
    }
  }



  animationSelector.addEventListener('change', function () {
    //console.log('animation value')
    //console.log(animationSelector.value)
    skinSpine.state.setAnimation(0, animationSelector.value, true)
    //console.log(animationSelector.value)
    if (animationSelector.value == 'Sit') {
      skinSpine.y = app.screen.height / 1.25
    } else {
      skinSpine.y = app.screen.height / 1
    }
  })
}

perspectiveSelector.addEventListener('change', function () {
  
  perspective = perspectiveSelector.value
  animationUpdate();
  animationList = [];
  charaSelect();
})



