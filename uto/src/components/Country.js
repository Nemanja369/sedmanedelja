
const Country = (country, single)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    divCountry.append(p,img)
    if(single){
        divCountry.innerHTML += `
        <p>${country.nativeName}</p>
        <p>${country.population}</p>
        <p>${country.capital}</p>
        <p>${country.topLevelDomain.join(', ')}</p>
        `
    }
    return divCountry
}

export default Country