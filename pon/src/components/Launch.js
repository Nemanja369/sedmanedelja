const Launch = launch => {
    const divContainer = document.createElement('div')
    divContainer.className = 'launch'

    divContainer.innerHTML = `
    <div  class = "inner-div-0">
        <img src="${launch.links.patch.small ? launch.links.patch.small : 'https://via.placeholder.com/150'}" />
    </div>
    <div class="inner-div-1">
        <span>${launch.name}</span>
    </div>
    <div class="inner-div-2">
        <span>${launch.date_utc}</span>
    </div>
    `
    return divContainer
}

export default Launch