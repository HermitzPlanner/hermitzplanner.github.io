const summaryBtn = document.getElementById('summary-btn')
function summary() {

    const events = document.getElementById('events-container')
    const skins = document.getElementById('skins-container')
    const eventsDiv = document.getElementById('events')
    const summaryDiv = document.getElementById('summary-events')
    const topBar = document.getElementById('event-top-bar')
    const summaryBtnText = document.getElementById('summary-btn-text')
    const helpButton = document.getElementById('help-button')
    if (summaryBtn.checked == true) {
        events.style.width = "90%"
        events.style.overflowY = "scroll"
        skins.style.display = "none"
        eventsDiv.style.width = "30%"
        eventsDiv.style.overflowY = "visible"
        summaryDiv.style.display = "flex"
        topBar.style.width = "30%"
        summaryBtnText.innerHTML = "Skin planner"
        helpButton.innerHTML = "Empty rows"
        //helpButton.style.backgroundColor = "var(--accent-transparent)"
        helpButton.style.width = "110px"
        //helpButton.style.fontSize = "70%"
    } else {
        events.style.width = "30%"
        events.style.overflowY = "hidden"
        skins.style.display = "flex"
        eventsDiv.style.width = "100%"
        eventsDiv.style.overflowY = "scroll"
        summaryDiv.style.display = "none"
        topBar.style.width = "100%"
        summaryBtnText.innerHTML = "Selection summary"
        helpButton.innerHTML = "?"
        //helpButton.style.backgroundColor = "var(--primary-button)"
        helpButton.style.width = "30px"
        //helpButton.style.fontSize = "100%"
    }



    const summaryEvents = document.getElementById('summary-events')
    summaryEvents.innerHTML = ""
    const eventRows = document.querySelectorAll('.event-row')

    let summaryRowCounter = 1;
    let summaryId
    eventRows.forEach(rows => {
        console.log(summaryRowCounter)
        //console.log('rows', rows.children[1].innerHTML)
        summaryId = rows.parentElement.id.split("-")[1]
        if (rows.parentElement.id == "event-pinch-outexperimentaloperation") {
            summaryId = "pinch-outexperimentaloperation"
        }
        // summaryEvents
        summaryEvents.innerHTML += `<div class="event-row summary-row" id="summary-${summaryId}" style="outline: 0px solid red;"></div>`
        summaryRowCounter++;
    })

    let somth = []
    const cboxes = document.querySelectorAll('.checkbox')
    cboxes.forEach(cbox => {
        if (cbox.checked == true) {
            console.log('parent', cbox.parentElement.id.split("-")[1])
            console.log('cbox id', cbox.id.split("_")[1])
            let myObject = {
                eventId: cbox.parentElement.id.split("-")[1],
                cboxIdvariable2: cbox.id.split("_")[1]
            };
            somth.push(myObject)
            //${cbox.id.split("_")[1]}
            document.getElementById(`summary-${cbox.parentElement.id.split("-")[1]}`).innerHTML += `
            <img class="" src="https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${cbox.id.split("_")[1]}.png" alt="${this.userid}"">

            `
        }
    })
    console.log('array', somth)
}

function reset() {
    const cboxes = document.querySelectorAll('.checkbox')
    cboxes.forEach(cbox => {
        if (cbox.checked) {
            cbox.click()
        }

    })
}
let counter = 0
function helpButton() {
    console.log("amogners")
    const summaryRows = document.querySelectorAll('.summary-row')
    if (summaryBtn.checked == true) {
        if (counter == 0) {
            console.log("counter", counter)
            summaryRows.forEach(row => {
                if (row.hasChildNodes()) {
                } else {
                    row.style.display = "none"
                    let something = row.id
                    //console.log(something)
                    document.getElementById(something.replace('summary-', 'link-')).style.display = "none"
                }
            });
            counter = 1
            return
        } if (counter == 1) {
            console.log("counter", counter)
            summaryRows.forEach(row => {
                if (row.hasChildNodes()) {
                } else {
                    row.style.display = "flex"
                    let something = row.id
                    //console.log(something)
                    document.getElementById(something.replace('summary-', 'link-')).style.display = "flex"
                }
            });
            counter = 0
        }
    }
    
}