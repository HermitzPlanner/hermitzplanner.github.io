const skins = document.getElementById("skins")
const events = document.getElementById("events-list")

const initialPrimeDiv = document.getElementById('menu-initialprime')
initialPrimeDiv.addEventListener('input', initialPrime);
let initialPrimeValue = 0
let skinValue = 0;

function initialPrime() {
  let rewardN = 1
  let previousValue = 0;
  initialPrimeValue = document.getElementById('menu-initialprime').value;
  const initialDivs = document.querySelectorAll('.initial-value')
  initialDivs[0].innerHTML = initialPrimeValue
  const totalDivs = document.querySelectorAll('.total-value')
  totalDivs.forEach(divs => {
    let rewardValue = document.getElementById(`reward-${rewardN}`).innerHTML
    let costValue = document.getElementById(`cost-${rewardN}`).innerHTML

    if (rewardN == "mog") {
      previousValue = parseInt(initialPrimeValue)
        + parseInt(rewardValue)
        - parseInt(costValue);
    }
    if (rewardN > 1) {
      //console.log(document.getElementById(`reward-${parseInt(rewardN - 1)}`))
      //console.log('rewardN', rewardN)
      let rewardPreviousValue = document.getElementById(`reward-${parseInt(rewardN - 1)}`).innerHTML
      let costPreviousValue = document.getElementById(`cost-${parseInt(rewardN - 1)}`).innerHTML
      //console.log('target',  rewardN)
      //console.log('prev', previousValue)

      //document.getElementById(`initial-${rewardN}`).innerHTML = previousValue;
      previousValue += parseInt(rewardPreviousValue) - parseInt(costPreviousValue);
      //console.log('post', previousValue)
      //console.log(' ')
      //document.getElementById(`initial-${rewardN}`).innerHTML = previousValue
    }

    var totalValue = parseInt(initialPrimeValue) + parseInt(rewardValue) - parseInt(costValue) + parseInt(previousValue);
    var elementId = `initial-${rewardN + 1}`;
    var element = document.getElementById(elementId);
    if (element) {
      // The element exists
      element.innerHTML = totalValue;
    } else {
      // The element does not exist
      //console.log(`Element with ID '${elementId}' does not exist.`);
    }
    divs.innerHTML = totalValue;

    rewardN++;
  });
}

let initialInfo;
let eventArray = []
let skinArray = []
async function amogus() {
  const eventResponse = await fetch('json/events.json'); // grab json
  const eventData = await eventResponse.json(); // wait for json and make it data

  const skinResponse = await fetch('json/skins.json'); // grab json
  const skinData = await skinResponse.json(); // wait for json and make it data


  let eventCounter = 1;

  eventData.forEach(function (eventJson) {

    let totalValue = 0
    let rewardCheck = "disable reward"
    // let costValue = 0
    // totalValue = initialPrimeValue + eventJson.reward - costValue
    if (eventJson.status == "end" || eventJson.eventN == "") { return; }
    if (eventCounter == "1") {
      document.getElementById('event-title').innerHTML = eventJson.event
    }
    eventArray.push(`event-${eventJson.eventcode}`)
    // https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/events/${eventJson.eventcode}.jpg
    events.innerHTML += `
        <a href="#skin-${eventJson.eventcode}" style="all: unset; width: 100%;">
          <button id="event-${eventJson.eventcode}">
            <div class="event-row flex">
              <div class="event-n flex">${eventCounter}</div>
              <div class="event-mid flex" style="background-image: linear-gradient(rgba(13, 13, 13, 0.85), rgba(3, 3, 3, 0.85)), url('events/resized_${eventJson.eventcode}.jpg');">${eventJson.event}</div>
              <div class="event-info flex-column">
                <div class="info-container flex">
                  <div class="info-icon flex"></div>
                  <div class="info-value flex initial-value" id="initial-${eventCounter}">${initialPrimeValue}</div>
                </div>
                <div class="info-container flex">
                  <div class="info-icon flex">+</div>
                  <div class="info-value flex reward-value" id="reward-${eventCounter}">${eventJson.reward}</div>
                </div>
                <div class="info-container flex">
                  <div class="info-icon flex cost-value">-</div>
                  <div class="info-value flex" id="cost-${eventCounter}">0</div>
                </div>
                <div class="info-container flex" >
                  <div class="info-icon flex">=</div>
                  <div class="info-value flex total-value" style="border-top: 1px solid white;">${totalValue}</div>
                </div>
              </div>
            </div>
          </button>
        </a>
        `
        if (eventJson.reward == 0 && eventJson.rewardRerun > 1) {
          rewardCheck = "enable reward"
        }
    let rewardDiv = `<input type="checkbox" class="reward-check" id="reward-check-${eventJson.eventN}"><div>${rewardCheck}</div>`
    if (eventJson.reward == 0 && eventJson.rewardRerun == 0) {
      rewardDiv = "";
    }
    
    skins.innerHTML += `
      <div class="skin" id="skin-${eventJson.eventcode}">
        <div class="flex" style="width: 100%;">
          <div>reward</div>
          <div>${eventJson.reward}</div>
          ${rewardDiv}
        </div>
      </div>`

    if (eventJson.newSkins != "") {
      skins.innerHTML += ``
    }

    skinData.forEach(function (skinJson) {
      if (eventJson.newSkins.indexOf(skinJson.id) !== -1 ||
        eventJson.rerunSkins.indexOf(skinJson.id) !== -1) {
        skinArray.push(skinJson.id)
        let skinContainer = document.getElementById(`skin-${eventJson.eventcode}`)
        skinContainer.innerHTML +=
          `
                <input class="checkbox" type="checkbox" name="skin-cbox" id="cbox_${skinJson.id}_batch${eventJson.eventN}">
                <label class="card-container" for="cbox_${skinJson.id}_batch${eventJson.eventN}">
                <img class="invis" src="https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/portrait/${skinJson.id}.png" alt="${this.userid}"">
                <div class="skin-price main-text">${skinJson.price}</div>
                <div class="op-name main-text flex">${skinJson.fullenglish}</div>
                <span style="display: none";>${eventCounter}</span>
                </label>
                `
      }
    });
    eventCounter++;
  });

  
  

  

  // Get all event buttons
  const eventButtons = document.querySelectorAll('button[id^="event-"]');
  // Get all skin elements
  const skinElements = document.querySelectorAll('div[id^="skin-"]');
  const eventRow = document.querySelectorAll('.event-row')
  // Show the first skin element by default
  //console.log('skinElements', skinElements[0])
  var hash = window.location.hash.substring(1); // Remove the '#' character
  if (hash == "") {}
  //else {document.getElementById(hash).style.display = 'block';}
  //
  skinElements[0].style.display = 'block';
  // Add click event listener to each event button
  eventButtons.forEach(button => {
    button.addEventListener('click', function () {

      document.getElementById('event-title').innerHTML = button.children[0].children[1].innerHTML
      const parentDiv = document.getElementById(button.id)
      const childDiv = parentDiv.querySelector('.event-row');
      // TODO fix
      eventRow.forEach(event => {
        event.style.height = '100px';
        event.style.transition = '0.3s';
      });
      childDiv.style.height = '100px';
      childDiv.style.transition = '0.3s';
      const eventId = button.id;  // Get the ID of the clicked event button
      const skinId = eventId.replace('event', 'skin');  // Generate cor|ponding skin ID



      // Hide all skin elements
      skinElements.forEach(skin => {
        skin.style.display = 'none';
      });

      // Show the corresponding skin element
      const correspondingSkin = document.getElementById(skinId);
      if (correspondingSkin) {
        correspondingSkin.style.display = 'block';
      }
    });
  });

  // some calcs
  const checkboxes = document.querySelectorAll('input[name="skin-cbox"]');
  let previousCounterValue = "1"
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {

      const eventCounterValue = checkbox.nextElementSibling.children[2].innerHTML
      //console.log('counter previous calcs', eventCounterValue)
      //console.log('skinValue pre calcs', skinValue)
      if (eventCounterValue !== previousCounterValue) {

        if (checkbox.checked == true) {
          skinValue = parseInt(checkbox.nextElementSibling.children[1].innerHTML)
          initialPrime();
        } else {

          const mogus = document.getElementById(`cost-${eventCounterValue}`).innerHTML
          //console.log('mogus', mogus)
          skinValue = mogus - parseInt(checkbox.nextElementSibling.children[1].innerHTML)
          initialPrime();
        }

        document.getElementById(`cost-${eventCounterValue}`).innerHTML = skinValue
        initialPrime();

      } else {

        if (checkbox.checked == true) {
          skinValue += parseInt(checkbox.nextElementSibling.children[1].innerHTML)
          initialPrime();
        } else {
          skinValue = parseInt(skinValue) - parseInt(checkbox.nextElementSibling.children[1].innerHTML)
          initialPrime();
        }
        document.getElementById(`cost-${eventCounterValue}`).innerHTML = skinValue
        initialPrime();

      }

      //console.log('post', eventCounterValue)
      //console.log('skinValue post calcs', skinValue)
      //console.log(" ")
      previousCounterValue = eventCounterValue
    });
  });

  const rewardChecks = document.querySelectorAll('.reward-check')
  rewardChecks.forEach(button => {
    button.addEventListener('click', function () {
      if (button.checked == true) {
        console.log(`cbox ${button.id} is ture`)
      }
    })
  })


  //console.log('eventArray', eventArray)
  //console.log('skinArray', skinArray)
 
  //console.log('hash', hash)
  const hashNew = hash.replace('skin', 'event');
  //console.log('hash new', hashNew)
  var button = document.getElementById(hashNew);
  //console.log('button', button) 
  if (button) {
    button.click();
  }

} amogus()
