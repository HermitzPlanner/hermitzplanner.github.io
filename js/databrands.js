async function databrands(){
    const search = document.getElementById('search2')
    const brandResponse = await fetch('json/brand.json'); // grab json
    const brandData = await brandResponse.json(); // wait for json and make it data

    brandData.forEach(function (datajson) {  
        search.innerHTML += `
        <option value="${datajson.brand}">${datajson.brand}</option>
        `
    })
    
} databrands()