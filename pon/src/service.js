import axios from "axios"
import {BASE,VERSION,LAUNCHES,UPCOMING_LAUNCHES} from './constants.js'

export const getLaunches = ()=>{
    return axios.get(`${BASE}${VERSION}${LAUNCHES}`)
}

export const getUpcomingLaunches = ()=>{
    return axios.get(`${BASE}${VERSION}${LAUNCHES}${UPCOMING_LAUNCHES}`)
}
