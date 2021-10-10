import Country from "./Country.js"

const Countries = (countries)=>{
    let single =  countries.length == 1

    return countries.map(country => Country(country, single) )
}

export default Countries
