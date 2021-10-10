import {divLaunchList,btnUpcomingLaunches,inputFilter,divSelect} from './constants.js'
import { getLaunches,getUpcomingLaunches } from './service.js'
import Launches from './components/Launches.js'
import Select from './components/Select.js'

let launches = []


const generateSelect = (arr)=>{
    let options = new Set(arr.map(launch => launch.date_utc.slice(0,4))) // ['2020','2008','2009']

    divSelect.innerHTML = ''
    let select = Select(options)
    select.addEventListener('change',()=>{
        let tmp = arr.filter(launch => launch.date_utc.startsWith(select.value))
        divLaunchList.innerHTML = ''
        divLaunchList.append(...Launches(tmp))
    })
    divSelect.append(select)
}

getLaunches().then(res => {
    launches = res.data
    divLaunchList.append(...Launches(launches))
    generateSelect(launches)
  
})

btnUpcomingLaunches.addEventListener('click',()=>{
    divLaunchList.innerHTML = ''
    getUpcomingLaunches().then(res => {
        launches = res.data
        divLaunchList.append(...Launches(launches))
        generateSelect(launches)
    })
})

inputFilter.addEventListener('input',()=>{
    divLaunchList.innerHTML = ''
    let filter = launches.filter(launch => launch.name.toLowerCase().includes(inputFilter.value.toLowerCase()))
    divLaunchList.append(...Launches(filter))
    generateSelect(filter)
})

