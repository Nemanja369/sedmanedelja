import Countries from "./Countries"

const Country = (country, arr) => {
    const selectedCountry = country
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`
    divCountry.classList.add('kantri')
    divCountry.append(p, img)
    divCountry.innerHTML += `
        <p><span>Capital : </span>${country.capital}</p>
        `
    divCountry.addEventListener('click', () => {
        let lang = ''
        country.languages.forEach(lng => {
            console.log(lng.name)
            lang += ' ' + lng.name.toString()
            return lng.name.toString()
        })

        document.querySelector('main').innerHTML = `
            <p>${country.name}</p>
            <img src="${country.flag}">
            <p><span>Capital : </span>${country.capital}</p>
            <p><span>languages: </span>${lang}</p>
            <p><span>timezone: </span>${country.timezones}</p>
            <p><span>population: </span>${country.population}</p>
            <button id="next">Next</button>
            <button id="back">Back</button>
            <button id="preview">Preview</button>
            `
        const nextBtn = document.querySelector('#next')
        nextBtn.addEventListener('click', () => {
            if(arr.indexOf(country)+1 <= arr.length -1){
                country = arr[arr.indexOf(country)+1]
                divCountry.click()
            }
          
        })
        const previewBtn = document.querySelector('#preview')
        previewBtn.addEventListener('click', () => {
            if(arr.indexOf(country)-1 >= 0){
                country = arr[arr.indexOf(country)-1]
                divCountry.click()
            }
            
        })
        const backBtn = document.querySelector('#back')
        backBtn.addEventListener('click', () => {
            document.querySelector('main').innerHTML =''
            document.querySelector('main').append(...Countries(arr))
        
        })
    })



    return divCountry
}


export default Country