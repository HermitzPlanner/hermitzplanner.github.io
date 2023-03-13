async function galleryfetch() {
    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    skinData.forEach(function (skinJson) {
        const galleryIcon = document.getElementById(`gallery_icon_${skinJson.id}`)
        galleryIcon.src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${skinJson.id}.png`

    })
}