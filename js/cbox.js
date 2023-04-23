async function selectOnlyThis(id) {
  // console.log("id", id)
    const eventResponse = await fetch('json/events.json'); // grab json
    const eventData = await eventResponse.json(); // wait for json and make it data
    eventData.forEach(function (eventJson) { 
        if (eventJson.eventN == '') {
          return;
        }
        // console.log("event", eventJson.eventN)
        document.getElementById(eventJson.eventN).checked = false;
        const ligma = document.getElementById(`row${eventJson.eventN}`)
        ligma.style.backgroundColor = '#0f0f0f'
     })
     
    document.getElementById(id).checked = true;
    const joe = document.getElementById(id)
    joe.style.backgroundColor = '#303030'
    
  }

