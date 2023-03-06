document.getElementById('menu-initialprime').addEventListener('input', function () {
    let initialPrime = document.getElementById('menu-initialprime').value;
    //console.log(initialPrime)
    localStorage.setItem("initialPrimeStorage", initialPrime)
    //console.log('initialPrimeStorage')
    //console.log(localStorage.getItem("initialPrimeStorage"))
});

function hideTutorial() {
    const tuto = document.getElementById('tutorial')
    tuto.style.display = 'none'
}

function showTutorial() {
    const tuto = document.getElementById('tutorial')
    tuto.style.display = 'block'
    localStorage.setItem("tutorialCheckStorage", 'false')
    console.log('tutorial')
    console.log(localStorage.getItem("tutorialCheckStorage"))

}

function skinGallery() {
    const blacklistButton = document.getElementById('header-blacklist')
    const blacklistButtonLabel = document.getElementById('header-blacklist-label')
    const skinContainer = document.getElementById('container')
    const blacklistContainer = document.getElementById('gallery-container')
    const arrow = document.querySelector('.slider-container')
    if (blacklistButton.checked == true) {
        // slider.checked = true;
        slider.checked = true;
        arrow.style.opacity = '0'
        skinContainer.style.opacity = '0';
        skinContainer.style.display = 'none';
        skinContainer.style.transition = 'var(--transition)'
        blacklistContainer.style.display = 'flex';
        blacklistButtonLabel.style.backgroundColor = 'white';
        blacklistButtonLabel.style.color = 'black'
        blacklistButton.style.transition = 'var(--transition)'
        menuSlider();


    } else {
        slider.checked = false;
        arrow.style.opacity = '1'
        skinContainer.style.opacity = '1';
        skinContainer.style.display = 'block';
        skinContainer.style.transition = 'var(--transition)'
        blacklistContainer.style.display = 'none';
        blacklistButtonLabel.style.backgroundColor = 'black';
        blacklistButtonLabel.style.color = 'white'
        blacklistButton.style.transition = 'var(--transition)'
        menuSlider();
    }
}

function displayArt() {
    const h1 = document.getElementById('full-image-container');
    h1.style.display = 'none';
    document.getElementById('full-image').src = '';
}

function mobileCheck() {
    const arrowLoad = document.querySelector('.slider-container')
    const sliderEventsLoad = document.querySelector('.events')
    const sliderSkinsLoad = document.getElementsByClassName('batch')
    const skinsContainerLoad = document.querySelector('.skins')
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        //alert('mobile')
        arrowLoad.style.left = '85%';
        sliderEventsLoad.style.width = '100%';
        skinsContainerLoad.style.display = 'none'
        for (i = 0; i < sliderSkinsLoad.length; i++) {
            sliderSkinsLoad[i].style.width = '0%';
            sliderSkinsLoad[i].style.display = 'none';
        }
        arrowLoad.style.opacity = '0';

    } else {

        arrowLoad.style.opacity = '1';
        arrowLoad.style.left = '35%';
        // arrowLoad.style.top = '5%'
    }
}

function menuSlider() {
    const sliderEvents = document.querySelector('.events')
    const sliderSkins = document.getElementsByClassName('batch')
    const arrow = document.querySelector('.slider-container')
    const skinsContainer = document.querySelector('.skins')
    const galleryContainer = document.querySelector('#gallery-container')
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        if (slider.checked == true) {
            document.getElementById('sliderthree').src = 'svg/arrow-right-solid.svg';
            arrow.style.left = '0%';
            arrow.style.transition = 'var(--transition)'

            sliderEvents.style.width = '0%';
            sliderEvents.style.transition = 'var(--transition)'
            sliderEvents.style.display = 'none';

            skinsContainer.style.display = 'block'

            for (i = 0; i < sliderSkins.length; i++) {
                sliderSkins[i].style.width = '100%';
                sliderSkins[i].style.transition = 'var(--transition)'
                sliderSkins[i].style.opacity = '1';
            }

            galleryContainer.style.width = '100%';
            galleryContainer.style.transition = 'var(--transition)'



        } else {
            document.getElementById('sliderthree').src = 'svg/arrow-left-solid.svg';
            arrow.style.left = '85%';
            arrow.style.transition = 'var(--transition)'

            sliderEvents.style.width = '100%';
            sliderEvents.style.transition = 'var(--transition)'
            sliderEvents.style.display = 'block'

            skinsContainer.style.display = 'none'

            for (i = 0; i < sliderSkins.length; i++) {
                sliderSkins[i].style.width = '0%';
                sliderSkins[i].style.transition = 'var(--transition)'
                sliderSkins[i].style.opacity = '0';
            }
            galleryContainer.style.width = '0%';
            galleryContainer.style.transition = 'var(--transition)'


        }
    } else {
        if (slider.checked !== true) {
            sliderEvents.style.width = '35%';
            sliderEvents.style.transition = 'var(--transition)'
            for (i = 0; i < sliderSkins.length; i++) {
                sliderSkins[i].style.width = '65%';
                sliderSkins[i].style.transition = 'var(--transition)'
            }
            arrow.style.left = '35%';
            arrow.style.transition = 'var(--transition)'
            document.getElementById('sliderthree').src = 'svg/arrow-left-solid.svg';
            galleryContainer.style.width = '65%';
            galleryContainer.style.transition = 'var(--transition)';

        } else {
            sliderEvents.style.width = '0%';
            sliderEvents.style.transition = 'var(--transition)'
            for (i = 0; i < sliderSkins.length; i++) {
                sliderSkins[i].style.width = '100%';
                sliderSkins[i].style.transition = 'var(--transition)'
            }
            arrow.style.left = '0%';
            arrow.style.transition = 'var(--transition)'
            document.getElementById('sliderthree').src = 'svg/arrow-right-solid.svg';
            galleryContainer.style.width = '100%';
            galleryContainer.style.transition = 'var(--transition)';
        }
    }
}

const impostor = []

async function events() {
    let fragment = new DocumentFragment();
    // Fetching data
    const eventResponse = await fetch('json/events.json'); // grab json
    const eventData = await eventResponse.json(); // wait for json and make it data

    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    //calls the data json
    eventData.forEach(function (eventJson) {

        if (eventJson.status === 'end') {
            eventJson.skins = [];
        } 

        let batch;
        batch = document.createElement("li");
        batch.setAttribute('id', `li-batch${eventJson.eventN}`)
        fragment.appendChild(batch);
        batch.innerHTML += `
        <batch-component
        nbatch="${eventJson.eventN}"
        eventtitle="${eventJson.event}"
        eventimg="${eventJson.eventImage}"
        reward="${eventJson.reward}"
        runtype="${eventJson.type}">
        </batch-component>`;
        doThing();
        document.getElementById(`event-container`).appendChild(fragment)
        let cardContainer;
        cardContainer = document.createElement("li")
        cardContainer.setAttribute('id', `batch${eventJson.eventN}`)
        cardContainer.setAttribute('class', `batch`)
        fragment.appendChild(cardContainer);
        cardContainer.style.backgroundImage = `linear-gradient(hsla(0, 0%, 5%, 0.95), hsla(0, 0%, 1%, 0.95)), url('${eventJson.eventImage}')`;
        cardContainer.style.backgroundRepeat = 'no-repeat';
        cardContainer.style.backgroundSize = 'cover';
        cardContainer.style.backgroundPosition = 'center';
        document.getElementById(`container`).appendChild(fragment)
        // Event name
        let eventName;
        eventName = document.createElement("div")
        eventName.setAttribute('class', 'card-event-name flex')
        eventName.innerHTML = eventJson.event
        fragment.appendChild(eventName)
        // cardInfoContainer
        let cardInfo;
        cardInfo = document.createElement("div")
        cardInfo.setAttribute('id', `card-info${eventJson.eventN}`)
        cardInfo.setAttribute('class', 'card-info-container')
        fragment.appendChild(cardInfo)
        document.getElementById(`batch${eventJson.eventN}`).appendChild(fragment)
        // Select All
        let selectAll;
        selectAll = document.createElement("div")
        selectAll.setAttribute('id', `select-all_batch${eventJson.eventN}`)
        selectAll.setAttribute('class', 'select-all hide2')
        fragment.appendChild(selectAll);

        // Skin cost
        let skinCost;
        skinCost = document.createElement("div")
        skinCost.innerHTML = `
            <div class="select-all-button all" id='skincost-batch${eventJson.eventN}'>
            <div>Skin cost:</div>
            <div id='skin-cost${eventJson.eventN}'>0</div>
            </div>`;
        fragment.appendChild(skinCost);
        document.getElementById(`card-info${eventJson.eventN}`).appendChild(fragment)

        // RERUN OPTION
        if (`${eventJson.type}` == 'Rerun') {
            let rerunReward;
            rerunReward = document.createElement("div")
            rerunReward.innerHTML = `
            <input type="checkbox" id="rerunreward-batch${eventJson.eventN}" style="display: none" onchange="
                const reward = document.getElementById('menu-reward-batch${eventJson.eventN}')
                const rewardLabel = document.getElementById('rerunreward-batch${eventJson.eventN}-label')
                if (document.getElementById('rerunreward-batch${eventJson.eventN}').checked == true) {
                    reward.innerHTML = '+${eventJson.rewardRerun}'
                    rewardLabel.style.background = 'var(--bg-highlight)';
                } else {
                    reward.innerHTML = '+0'
                    rewardLabel.style.background = 'var(--card-bg)';
                }
                doThing();
            ">
            <label for="rerunreward-batch${eventJson.eventN}" id="rerunreward-batch${eventJson.eventN}-label" class="select-all-button all" style="font-size: 1.8vh; cursor: pointer;">
            <div>Enable Rewards</div>
            </label>`
            
            fragment.appendChild(rerunReward);
            document.getElementById(`card-info${eventJson.eventN}`).appendChild(fragment)
        }
        //localStorage.setItem("rerunRewardLocal", rerunRewardStorage)




        // Run/Rerun
        let run;
        run = document.createElement("div")
        run.setAttribute('id', `new_batch${eventJson.eventN}`)
        run.setAttribute('class', `card-container`)
        run.innerHTML = '<div class="runner">New skins</div>'
        fragment.appendChild(run)
        document.getElementById(`batch${eventJson.eventN}`).appendChild(fragment)
        let reRun;
        reRun = document.createElement("div")
        reRun.setAttribute('id', `rerun_batch${eventJson.eventN}`)
        reRun.setAttribute('class', `card-container`)
        reRun.innerHTML = '<div class="runner">Rerun skins</div>'
        fragment.appendChild(reRun)
        document.getElementById(`batch${eventJson.eventN}`).appendChild(fragment)
        // Total price will be stored here
        const summation = []
        skinData.slice().reverse().forEach(function (skinJson) {
            if (eventJson.skins.indexOf(skinJson.skinname) !== -1) {
                //console.log(`operator: ${skinJson.id}`)
                // select all prices from the ifs and push it to summation string
                summation.push(parseFloat(skinJson.price))
                impostor.push(skinJson.skinname)
                let card;
                card = document.createElement("div");
                card.setAttribute('class', 'card-box')
                card.setAttribute('id', `card-box-id_${skinJson.id}`)
                fragment.appendChild(card);
                card.innerHTML += `
                    <card-component
                    nbatch="${eventJson.eventN}"
                    userid="${skinJson.id}"
                    price="${skinJson.price}"
                    english="${skinJson.english}"
                    fullenglish="${skinJson.fullenglish}"
                    portrait="${skinJson.portrait}"
                    obtain="${skinJson.obtain}"
                    fullart="${skinJson.art}"
                    run="${skinJson.new}"
                    brand="${skinJson.brand}"
                    currency="${skinJson.currency}"
                    tokens="${skinJson.token}"
                    icon="${skinJson.icon}"
                    artist="${skinJson.artist}"
                    skinnameenglish="${skinJson.skinnameenglish}"
                    release="${skinJson.release}"
                    releaseglobal="${skinJson.releaseGlobal}"
                    code="${skinJson.code}">
                    codechar="${skinJson.codechar}"

                    </card-component>`;
            }
            if (skinJson.new == "new") {
                document.getElementById(`new_batch${eventJson.eventN}`).appendChild(fragment)
            } else {
                document.getElementById(`rerun_batch${eventJson.eventN}`).appendChild(fragment)
            }
        });
        //sums all the prices
        let sum;
        sum = summation.reduce((partialSum, a) => partialSum + a, 0);

        const checkerNew = document.getElementById(`new_batch${eventJson.eventN}`)
        if (checkerNew.children.length > 1) { } else {
            const checker2 = document.getElementById(`new_batch${eventJson.eventN}`)
            checker2.style.display = 'none';
        }
        const checkerRerun = document.getElementById(`rerun_batch${eventJson.eventN}`)
        if (checkerRerun.children.length > 1) { } else {
            const checker2 = document.getElementById(`rerun_batch${eventJson.eventN}`)
            checker2.style.display = 'none';
        }
        // html for Select ALl
        document.getElementById(`select-all_batch${eventJson.eventN}`).innerHTML = `
            <select-all 
            nbatch="${eventJson.eventN}"
            summing="${sum}">
            </select-all>`

                const batchHider = document.getElementById(`li-batch${eventJson.eventN}`)
            const batchContentHider = document.getElementById(`batch${eventJson.eventN}`)
        if (eventJson.status === 'end') {
            batchHider.style.display = 'none'
            batchContentHider.style.display = 'none'
        } 

    });

}

let selectedSkinStorage = []
let selectedCardStorage = []
let selectedCardCheckStorage = []



function downloadFile() {
    // Define the content of the text file
    var variable1 = localStorage.getItem("storageSkins");
    var variable2 = localStorage.getItem("initialPrimeStorage");
    var variable3 = localStorage.getItem("rerunRewardLocal")
    var content = variable1 + '\n' + variable2;

    // Create a Blob object to represent the data as a file
    var file = new Blob([content], { type: 'text/plain' });

    // Create a URL for the Blob object
    var url = URL.createObjectURL(file);

    // Create a link element and set its attributes
    var link = document.createElement('a');
    link.href = url;
    link.download = 'planner-selection.txt';

    // Append the link to the document body
    document.body.appendChild(link);

    // Click the link to download the file
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}

var content
var contentarray
function loadFile() {
    // Get the file input element
    var input = document.getElementById('load-btn');

    // Get the first file from the input element's files property
    var file = input.files[0];

    // Create a new FileReader object
    var reader = new FileReader();

    // Set up an event listener for when the file has been read
    reader.onload = function () {
        var lines = reader.result.split('\n');
        var variable1 = lines[0].trim();
        var variable2 = lines[1].trim();
        // Assign the contents of the file to a variable
        //content = reader.result;
        //console.log('content');
        //console.log(content);

        contentarray = JSON.parse(variable1);
        console.log('contentarray');
        console.log(contentarray);
        for (var i = contentarray.length - 1; i >= 0; i--) {
            document.getElementById(`${contentarray[i]}`).click();
        }
        document.getElementById('menu-initialprime').value = variable2;
        doThing();
        let initialPrime = document.getElementById('menu-initialprime').value;
        localStorage.setItem("initialPrimeStorage", initialPrime)
    }

    // Read the file as text
    reader.readAsText(file);


}

async function skinStorage() {
    selectedSkinStorage = JSON.parse(localStorage.getItem("storageSkins"))
    console.log('selectedSkinStorage')
    console.log(selectedSkinStorage)
    for (var i = selectedSkinStorage.length - 1; i >= 0; i--) {
        document.getElementById(`${selectedSkinStorage[i]}`).click();
    }
}

async function initialLoad() {
    document.getElementById('menu-initialprime').value = localStorage.getItem("initialPrimeStorage");
    const ini = document.getElementById('menu-initialprime').value
    if (ini == 0) {
        document.getElementById('menu-initialprime').value = 0
    }
    //localStorage.clear()
    console.log(localStorage)
    if (localStorage.getItem("tutorialCheckStorage") == 'true') {

        hideTutorial();
    } else {
        document.getElementById('tutorial').style.opacity = '1'
    }
} initialLoad()

async function main() {
    await events();
    await doThing();
    if (localStorage.getItem("storageSkins") === null) { } else {
        await skinStorage();
    }

} main();

async function selectionReset() {
    await skinStorage();


    selectedCardStorage = JSON.parse(localStorage.getItem("storageCards"))
    for (var i = selectedCardStorage.length - 1; i >= 0; i--) {
        const card = document.querySelector(`#${selectedCardStorage[i]}`)
        card.style.outlineColor = 'var(--card-outline)';
    }

    selectedCardCheckStorage = JSON.parse(localStorage.getItem("storageCardsCheck"))
    for (var i = selectedCardCheckStorage.length - 1; i >= 0; i--) {
        const card2 = document.querySelector(`#${selectedCardCheckStorage[i]}`)
        card2.style.backgroundColor = 'var(--card-outline-hover)';
        card2.style.opacity = 0;
    }
    localStorage.clear()
}


var myVid = document.getElementById("video1");

function playPause() {
    if (myVid.paused)
        myVid.play();
    else
        myVid.pause();
}

function stop() {
    myVid.pause();
    myVid.currentTime = 0;
}

function skip(value) {
    myVid.currentTime += value;
}

