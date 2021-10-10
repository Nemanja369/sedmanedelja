import Countries from "./components/Countries";
import { getAllCountries } from "./service";

import Select from "./components/Select"

const divSelect = document.querySelector('#select')
const divInput = document.querySelector('#input')

getAllCountries().then(res => {
    let countries = res.data
    
    document.querySelector('main').innerHTML = ''
    document.querySelector('main').append(...Countries(countries))

    generateSelect(countries)
    searchCountries(countries)
})

const generateSelect = (arr) => {
    divSelect.innerHTML = ''
    let options = new Set(arr.map(el => el.region))

    let select = Select(options)
    let tmp = []
    select.addEventListener('change', () => {
        tmp = arr.filter(country => country.region == select.value)
        document.querySelector('main').innerHTML = ''
        document.querySelector('main').append(...Countries(tmp))
        searchCountries(tmp)
    })
    
    divSelect.append(select)

}
const searchCountries = (arr) =>{
    divInput.innerHTML = ''
    const inputSearch = document.createElement('input')

    inputSearch.addEventListener('input', ()=>{
        let tmp = arr.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()))
        generateSelect(tmp)
        document.querySelector('main').innerHTML = ''
        document.querySelector('main').append(...Countries(tmp))
    })
    divInput.append(inputSearch)
}
